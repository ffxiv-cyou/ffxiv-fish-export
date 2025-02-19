<script lang="ts">
  import "purecss/build/pure-min.css";
  import { ExtractFishList, GetFishData, GetFishDataFromStr, MergeFishData, FishCount, SpearFishCount } from "./lib/logic";
  import "./lib/ngld/common";
  import { onMount, onDestroy } from "svelte";
  import { FFXIVIpc, FFXIVSegment } from "./lib/log_parse";

  let dataFrom = "";
  let inputData = "";
  let fishData: Uint8Array = new Uint8Array();
  let isOverlayMode = false;
  let logLineStatus = false;
  let logLineDebug = false;

  $: rawFishData = fishData.length > 0 ? fishData : GetFishDataFromStr(inputData);
  $: generated = generateData(dataFrom, rawFishData);
  $: totalFishCount = ExtractFishList(rawFishData).length;
  $: fishCount = FishCount(rawFishData);
  $: spearFishCount = SpearFishCount(rawFishData);
  
  function generateData(from: string, rawData: Uint8Array) {
    if (!from || !rawData.length) return;

    try {
      return MergeFishData(from, rawData);
    } catch (ex) {
      return ex;
    }
  }

  function copy() {
    if (generated) {
      navigator.clipboard
        .writeText(generated)
        .then(() => alert("数据已复制到剪贴板"))
        .catch(() => alert("无法复制到剪贴板，请手动选中并使用Ctrl+C复制"))
    }
  }

  function parseLogLineData(evt: any) {
    logLineStatus = true;
    const lines = evt.line as string[];
    // lines: code | time | ... | checksum
    const code = lines[0];
    if (code !== "252") return;

    logLineDebug = true;
    const seg = new FFXIVSegment(lines);
    const ipc = new FFXIVIpc(seg.data);
    const data = GetFishData(ipc.data);

    if (data.length > 0) {
      fishData = data;
      console.log(data);
      console.log(ipc);
    }
  }

  onMount(() => {
    addOverlayListener("LogLine", parseLogLineData);
    callOverlayHandler({ call: 'getLanguage' }).then(() => {
      isOverlayMode = true;
    });
    startOverlayEvents();
  });

  onDestroy(() => {
    removeOverlayListener("LogLine", parseLogLineData);
  });

  $: url = location.protocol + "//" + location.host + location.pathname;
  $: url_local = url + "?OVERLAY_WS=ws://127.0.0.1:10501/ws";

</script>

<main>
  <div class="main">
    <h1>钓鱼笔记导出工具</h1>
    <h3>使用方法</h3>
    <ol>
      <li>请<a href={url_local}>点击这里</a>尝试使用悬浮窗WS服务连接到悬浮窗。<br>如果悬浮窗状态显示未连接，也可以直接在ACT中添加悬浮窗，地址为 <a href={url} target="_blank">{url}</a>。</li>
      <li>打开鱼糕/钓鱼时钟，点击导入/导出，复制导出数据到本页的第一个框内；</li>
      <li>在ACT中，点击插件-FFXIV解析插件-开启调试选项-开启记录所有网络包。</li>
      <li>开启游戏，或是返回到标题画面后重新选择角色进入游戏。如果一切顺利的话，你就能看到生成了用于导入的数据。</li>
      <li>复制导入数据到鱼糕/钓鱼时钟内导入，至此就完成了钓鱼笔记的导出。</li>
      <li>现在，你可以关闭记录所有网络包选项，并删除已添加的悬浮窗了。</li>
    </ol>
    <div class="about">
      <span>&copy; 2024-2025 <a href="https://ffxiv.cyou" target="_blank">狒狒西柚</a></span>
      <span><a href="https://github.com/ffxiv-cyou/ffxiv-fish-export" target="_blank">Github</a></span>
      <span><a href="https://nga.178.com/read.php?tid=36771535" target="_blank">NGA</a></span>
    </div>
    <div class="status">
      <span>数据版本: 7.1</span>
      <span>悬浮窗状态: {#if isOverlayMode}<span class="green">已连接</span>{:else}<span class="red">未连接</span>{/if}</span>
      <span>ACT日志行: {#if logLineStatus}<span class="green">有数据</span>{:else}<span class="red">无数据</span>{/if}</span>
      <span>网络包数据: {#if logLineDebug}<span class="green">有数据</span>{:else}<span class="red">无数据</span>{/if}</span>
      <span>钓鱼笔记数目: { totalFishCount } (钓鱼: {fishCount} / 叉鱼: {spearFishCount})</span>
    </div>
    <div class="pure-form pure-form-stacked">
      <div>
        <label for="orig-data">鱼糕/钓鱼时钟导出数据: </label>
        <textarea
          id="orig-data"
          bind:value={dataFrom}
          placeholder="请填写从鱼糕/钓鱼时钟导出的数据"
        />
      </div>
      {#if !isOverlayMode}
      <div>
        <label for="packet-data">抓包数据: </label>
        <textarea
          id="packet-data"
          bind:value={inputData}
          placeholder="请填写抓包得到的数据"
        />
      </div>
      {/if}
      <div>
        <label for="processed-data">用于导入的数据: </label>
        <textarea id="processed-data" bind:value={generated} readonly />
      </div>
      <div>
        <button class="pure-button" on:click={copy}>复制到剪贴板</button>
      </div>
    </div>

  </div>
</main>

<style>
  .main {
    max-width: 1000px;
    margin: auto;
  }
  textarea {
    width: 100%;
    min-height: 8em;
  }
  #packet-data {
    font-family: 'Courier New', Courier, monospace;
  }
  .status {
    margin: 1em 0;
  }
  .status span+span {
    margin-left: 1em;
  }
  span.red {
    color: brown;
  }
  span.green {
    color: forestgreen;
  }
  .about span+span {
    margin-left: 0.5em;
    padding-left: 0.5em;
    border-left: 1px solid #666;
  }
  a,
  a:visited {
    color: #06C;
  }
</style>
