var f0=Object.defineProperty;var d0=(e,t,n)=>t in e?f0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var L=(e,t,n)=>(d0(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function n2(){}function e0(e){return e()}function K2(){return Object.create(null)}function r2(e){e.forEach(e0)}function t0(e){return typeof e=="function"}function p0(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function h0(e){return Object.keys(e).length===0}function l(e,t){e.appendChild(t)}function P(e,t,n){e.insertBefore(t,n||null)}function A(e){e.parentNode&&e.parentNode.removeChild(e)}function u(e){return document.createElement(e)}function m(e){return document.createTextNode(e)}function y(){return m(" ")}function _2(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function f(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function _0(e){return Array.from(e.childNodes)}function h2(e,t){t=""+t,e.data!==t&&(e.data=t)}function B(e,t){e.value=t??""}let l2;function t2(e){l2=e}function n0(){if(!l2)throw new Error("Function called outside component initialization");return l2}function g0(e){n0().$$.on_mount.push(e)}function y0(e){n0().$$.on_destroy.push(e)}const V=[],X2=[];let G=[];const Y2=[],m0=Promise.resolve();let C2=!1;function b0(){C2||(C2=!0,m0.then(l0))}function O2(e){G.push(e)}const E2=new Set;let J=0;function l0(){if(J!==0)return;const e=l2;do{try{for(;J<V.length;){const t=V[J];J++,t2(t),v0(t.$$)}}catch(t){throw V.length=0,J=0,t}for(t2(null),V.length=0,J=0;X2.length;)X2.pop()();for(let t=0;t<G.length;t+=1){const n=G[t];E2.has(n)||(E2.add(n),n())}G.length=0}while(V.length);for(;Y2.length;)Y2.pop()();C2=!1,E2.clear(),t2(e)}function v0(e){if(e.fragment!==null){e.update(),r2(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(O2)}}function w0(e){const t=[],n=[];G.forEach(s=>e.indexOf(s)===-1?t.push(s):n.push(s)),n.forEach(s=>s()),G=t}const E0=new Set;function C0(e,t){e&&e.i&&(E0.delete(e),e.i(t))}function O0(e,t,n,s){const{fragment:r,after_update:a}=e.$$;r&&r.m(t,n),s||O2(()=>{const c=e.$$.on_mount.map(e0).filter(t0);e.$$.on_destroy?e.$$.on_destroy.push(...c):r2(c),e.$$.on_mount=[]}),a.forEach(O2)}function F0(e,t){const n=e.$$;n.fragment!==null&&(w0(n.after_update),r2(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function k0(e,t){e.$$.dirty[0]===-1&&(V.push(e),b0(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function L0(e,t,n,s,r,a,c,d=[-1]){const h=l2;t2(e);const g=e.$$={fragment:null,ctx:[],props:a,update:n2,not_equal:r,bound:K2(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:K2(),dirty:d,skip_bound:!1,root:t.target||h.$$.root};c&&c(g.root);let v=!1;if(g.ctx=n?n(e,t.props||{},(o,i,..._)=>{const b=_.length?_[0]:i;return g.ctx&&r(g.ctx[o],g.ctx[o]=b)&&(!g.skip_bound&&g.bound[o]&&g.bound[o](b),v&&k0(e,o)),i}):[],g.update(),v=!0,r2(g.before_update),g.fragment=s?s(g.ctx):!1,t.target){if(t.hydrate){const o=_0(t.target);g.fragment&&g.fragment.l(o),o.forEach(A)}else g.fragment&&g.fragment.c();t.intro&&C0(e.$$.fragment),O0(e,t.target,t.anchor,t.customElement),l0()}t2(h)}class j0{$destroy(){F0(this,1),this.$destroy=n2}$on(t,n){if(!t0(n))return n2;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(t){this.$$set&&!h0(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const A0=[0,4776,4925,4926,4869,4870,4927,4928,4871,4929,5460,4930,4872,4931,4873,4874,4932,4933,4875,4934,4876,4935,4877,4936,4937,4938,4878,4939,4940,4941,4879,4942,4880,4943,4944,4881,4945,4946,4882,4947,4883,4948,4949,4884,4950,4885,4951,4952,4953,4886,4954,4955,4956,4957,4887,4958,4959,5461,4888,4960,4961,4889,4890,4962,4963,4891,4964,4892,4965,4966,4893,4967,4894,4968,5544,4895,4969,4896,4970,4971,4972,4897,4973,4898,4974,4899,4975,4976,4900,4977,4978,4979,5032,4901,4980,4981,5033,4902,4982,4983,5034,4984,5035,4985,4986,4987,5036,5462,4988,4989,5037,4903,4990,4991,4992,4993,4904,4905,4994,4995,5466,4996,4997,4998,4906,4999,5038,5e3,5001,4907,5002,5003,5039,4908,5040,5004,5005,5041,4909,5006,5007,5008,5042,4910,5009,5010,5011,5043,5044,4911,5012,5013,4912,5014,5015,4913,4914,5016,5017,4915,4916,5018,5019,5020,5045,4917,4918,5021,5046,4919,4920,4921,4922,5022,5023,5024,5025,5026,5027,4923,4924,5028,5029,5030,5031,6185,6191,7678,7679,7680,7681,7682,7683,7684,7685,7686,7687,7688,7689,7690,7691,7692,7693,7694,7695,7696,7697,7698,7699,7700,7701,7702,7703,7704,7705,7706,7707,7708,7709,7710,7711,7712,7713,7714,7902,7903,7904,7905,7906,7907,7908,7909,7910,7911,7912,7913,7914,7915,7916,7917,7918,7919,7920,7921,7922,7923,7924,7925,7926,7927,7928,7929,7930,7931,7932,7933,7934,7935,7936,7937,7938,7939,7940,7941,7942,7943,7944,7945,7946,7947,7948,7949,7950,7951,8752,8753,8754,8755,8756,8757,8758,8759,8760,8761,8762,8763,8764,8765,8766,8767,8768,8769,8770,8771,8772,8773,8774,8775,8776,10123,12713,12714,12715,12716,12718,12719,12720,12721,12722,12723,12724,12725,12726,12727,12728,12729,12730,12731,12732,12733,12734,12735,12736,12737,12738,12739,12740,12741,12742,12743,12744,12745,12746,12747,12748,12749,12750,12751,12752,12753,12754,12755,12756,12757,12758,12759,12760,12761,12762,12763,12764,12765,12766,12767,12768,12769,12770,12771,12772,12773,12774,12775,12776,12777,12778,12779,12780,12781,12782,12783,12784,12785,12786,12787,12788,12789,12790,12791,12792,12793,12794,12795,12796,12797,12798,12799,12800,12801,12802,12803,12804,12805,12806,12807,12808,12809,12810,12811,12812,12813,12814,12815,12816,12817,12818,12819,12820,12821,12822,12823,12824,12825,12826,12827,12828,12829,12830,12831,12832,12833,12834,12835,12836,12837,13727,13728,13729,13730,13731,13732,14215,14211,14212,14213,14214,14216,14217,14218,14219,14220,15439,15626,15627,15628,15629,15630,15631,15632,15633,15634,15635,15636,15637,15638,16745,16746,16747,16748,16749,16750,16751,16752,16753,16754,16756,16742,16743,16744,17577,17578,17579,17580,17581,17582,17583,17584,17585,17586,17587,17588,17589,17590,17591,17592,17593,17562,17563,17564,17565,17566,20026,20029,20042,20045,20049,20055,20058,20062,20064,20065,20070,20072,20082,20083,20087,20090,20033,20047,20136,20056,20057,20059,20063,20084,20085,20086,20091,20092,20093,20094,20095,20096,20097,20112,20037,20050,20060,20066,20067,20069,20071,20081,20089,20098,20099,20101,20102,20106,20107,20108,20113,20032,20046,20137,20061,20068,20088,20118,20120,20123,20020,20023,20036,20111,20126,20127,20128,20130,20132,20138,20031,20080,20124,20125,20129,20131,20133,20134,20135,20140,20027,20028,20044,20115,20116,20117,20052,20053,20076,20077,20079,20104,20105,20110,20114,20141,20025,20034,20038,20039,20073,20075,20078,20109,20119,20122,20018,20019,20021,20022,20024,20030,20035,20040,20041,20043,20048,20051,20054,20074,20100,20121,20103,20142,20524,20143,20785,20786,20787,20788,20789,21174,21175,21176,21177,21178,22392,22389,22391,22394,22396,22395,22390,22393,22397,22398,23054,23055,23056,23057,23058,23059,23060,23061,23062,23063,23064,23065,23066,23067,23068,23069,23070,23071,23072,23073,23074,23075,24203,24204,24205,24206,24207,24208,24209,24210,24211,24212,24213,24214,24215,24216,24217,24218,24881,24882,24883,24884,24885,24886,24887,24888,24889,24890,24891,24892,24893,24557,24558,24559,24560,24561,24994,24990,24991,24992,24993,24995,26746,27417,27411,27412,27425,27427,27428,27429,27426,27430,27436,27431,27438,27439,27440,27449,27448,27446,27447,27451,27462,27414,27410,27415,27413,27419,27420,27422,27433,27435,27434,27443,27444,27445,27457,27452,27454,27450,27455,27458,27459,27463,27416,27418,27421,27437,26747,27453,27460,27461,27470,27479,27471,27469,27473,27423,27424,27472,27468,27475,27476,27477,27480,27482,27486,27487,26748,27474,27478,27489,27485,27488,27484,27465,27490,27491,27492,27441,27466,27493,27483,27497,27496,27442,26749,27464,27511,27513,27498,27495,27499,27506,27509,27504,27432,27456,27467,27481,27494,27500,27501,27507,27514,27503,27505,27512,27510,27515,27502,27508,28719,28065,28066,28067,28068,28069,28070,28071,28072,28189,28190,28191,28192,28193,28925,28926,28927,28928,28929,28930,28937,28938,29739,29722,29723,28941,29728,29729,29730,29736,29737,29738,29719,28942,28939,29724,28940,29725,29731,29735,29733,29718,29740,29741,29734,29721,29726,29727,29742,29732,29720,29743,29744,29745,29746,29747,29766,29749,29750,29751,29752,29753,29754,29755,29756,29757,29758,29759,29779,29761,29760,29763,29764,29765,29775,29767,29768,29769,29770,29771,29772,29780,29774,29748,29776,29777,29778,29773,29762,29781,29782,29783,29784,29785,29786,29787,29788,29789,29790,29791,29673,29678,30487,30593,30432,30433,30434,30435,30436,30437,30438,30439,30488,30489,30490,30491,30492,31129,31134,32049,32050,32051,32052,32053,32054,32055,32056,32057,32075,32076,32077,32095,32096,32097,32058,32059,32060,32078,32079,32080,32098,32099,32100,32061,32062,32081,32082,32101,32102,32064,32084,32104,32065,32066,32067,32068,32069,32070,32071,32072,32073,32085,32086,32087,32088,32089,32090,32091,32092,32093,32105,32106,32107,32108,32109,32110,32111,32112,32113,32063,32083,32103,32074,32094,32114,31771,31770,33316,33317,33318,33319,33320,33321,33322,33323,33324,33325,33326,33219,33220,33221,33222,33223,33239,33240,33241,33242,33243,33244,36385,36386,36387,36388,36389,36390,36392,36393,36394,36395,36396,36397,36398,36399,36400,35604,36402,36403,36404,36405,36407,36408,36409,36410,36411,36412,36414,36415,36417,36418,36419,36420,36421,36422,36423,36425,36426,36427,35605,36430,36431,36432,36434,36435,36436,36438,36439,36440,36441,36442,36443,36444,36446,36447,36448,36449,36450,36451,36452,36453,36454,35606,36456,36457,36458,36459,36460,36461,36462,36463,36465,36466,36467,36468,36470,36471,36472,36473,36475,36476,36477,36478,36479,36480,36481,36484,36485,35607,36487,36488,36489,36491,36492,36494,36495,36496,36497,36499,36501,36502,36503,36505,36506,36507,36508,36509,36510,36511,36512,36513,36514,36515,36516,36517,36518,36519,36520,36521,36679,36680,36681,36682,36683,36684,36685,36686,36660,36662,36663,37845,37846,37847,37848,37849,37850,37851,37852,37853,37697,38830,38831,38832,38833,38834,38835,38836,38810,38812,38814,38935,39240,38792,38793,38798,38799,39879,39880,39881,39882,39883,40524,40522,40523,40541,40542,40543,40561,40562,40563,40581,40582,40583,40521,40525,40526,40544,40545,40546,40564,40567,40566,40584,40585,40586,40527,40528,40547,40548,40565,40568,40587,40588,40530,40550,40570,40590,40531,40532,40533,40534,40535,40536,40537,40538,40539,40551,40552,40553,40554,40555,40556,40557,40558,40559,40571,40572,40573,40574,40575,40576,40577,40578,40579,40591,40592,40593,40594,40595,40596,40597,40598,40599,40529,40549,40569,40589,40540,40560,40580,40600,39912,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],S0=[20144,20145,20146,20147,20148,20149,20150,20151,20152,20153,20154,20155,20156,20157,20158,20159,20160,20161,20162,20163,20164,20165,20166,20167,20168,20169,20170,20171,20172,20173,20174,20175,20176,20177,20178,20179,20180,20181,20182,20183,20184,20185,20186,20187,20188,20189,20190,20191,20192,20193,20194,20195,20196,20197,20198,20199,20200,20201,20202,20203,20204,20205,20206,20207,20208,20209,20210,20211,20212,20213,20214,20215,20216,20217,20218,20219,20220,20221,20222,20223,20224,20225,20226,20227,20228,20229,20230,20231,20232,20233,20234,20235,20236,20237,20238,20239,20528,21179,21180,27516,27517,27518,27520,27522,27528,27529,27533,27536,27519,27521,27523,27524,27525,27527,27530,27531,27526,27532,27537,27539,27538,27540,27541,27544,27546,27547,27542,27543,27545,27548,27549,27550,27552,27553,27554,27555,27556,27557,27568,27569,27570,27571,27551,27558,27559,27560,27561,27577,27562,27563,27564,27565,27574,27576,27534,27567,27572,27575,27578,27581,27535,27566,27573,27579,27580,36522,36523,36524,36525,36526,36527,36548,36549,36550,36551,36552,36553,36554,36555,36556,36557,36558,36559,36560,36561,36562,36563,36564,36565,36528,36529,36530,36531,36532,36533,36534,36537,36536,36539,36538,36547,36540,36541,36542,36543,36544,36545,36566,36567,36571,36569,36570,36581,36572,36575,36574,36577,36576,36579,36582,36583,36584,36585,36586,36587,36568,36578,36573,36546,36580,36535,36659,36661,38811,38813,38939,38837,38838,38839,38840,38841,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],D0=2516,z2=1608,F2=161,r0=38,Q2=F2+r0,s0=34,x0=7,N0=F2+r0+s0+x0;function I0(e){let t=M0(e);return o0(t.subarray(32))}function o0(e){return!e||e.length!==D0?new Uint8Array:e.subarray(z2,z2+N0)}function i0(e){return e.subarray(0,F2)}function a0(e){return e.subarray(Q2,Q2+s0)}function u0(e){let t=0;return e.forEach(n=>{n=n-(n>>1&85),n=(n&51)+(n>>2&51),t+=n+(n>>4)&15}),t}function P0(e){return u0(i0(e))}function T0(e){return u0(a0(e))}function c0(e){e.length;let t=i0(e),n=a0(e),s=[];for(let r=0;r<t.length;r++){let a=t[r];for(let c=0;c<8;c++)a&1<<c&&s.push(A0[r*8+c])}for(let r=0;r<n.length;r++){let a=n[r];for(let c=0;c<8;c++)a&1<<c&&s.push(S0[r*8+c])}return s}function q0(e,t){let n=JSON.parse(e);return t.length===0?"invalid data":(n.completed=c0(t),JSON.stringify(n))}function M0(e){e=e.replaceAll(/[^0-9a-fA-F]/g,"");const t=new Uint8Array(e.length/2);for(let n=0;n<e.length;n+=2)t[n/2]=parseInt(e.substring(n,n+2),16);return t}(function(){let e=/[\?&]OVERLAY_WS=([^&]+)/.exec(location.href),t=null,n=[],s=0,r={},a={},c=null,d=!1;if(e){let o=function(){t=new WebSocket(e[1]),t.addEventListener("error",i=>{console.error(i)}),t.addEventListener("open",()=>{console.log("Connected!");let i=n;n=null;for(let _ of i)c(_)}),t.addEventListener("message",i=>{try{i=JSON.parse(i.data)}catch{console.error("Invalid message received: ",i);return}i.rseq!==void 0&&r[i.rseq]?(r[i.rseq](i),delete r[i.rseq]):h(i)}),t.addEventListener("close",()=>{n=[],console.log("Trying to reconnect..."),setTimeout(()=>{o()},300)})};var g=o;c=i=>{n?n.push(i):t.send(JSON.stringify(i))},o()}else{let o=function(){if(!window.OverlayPluginApi||!window.OverlayPluginApi.ready){setTimeout(o,300);return}let i=n;n=null,window.__OverlayCallback=h;for(let[_,b]of i)c(_,b)};var v=o;c=(i,_)=>{n?n.push([i,_]):OverlayPluginApi.callHandler(JSON.stringify(i),_)},o()}function h(o){if(a[o.type])for(let i of a[o.type])i(o)}window.dispatchOverlayEvent=h,window.addOverlayListener=(o,i)=>{d&&a[o]&&console.warn(`A new listener for ${o} has been registered after event transmission has already begun.
Some events might have been missed and no cached values will be transmitted.
Please register your listeners before calling startOverlayEvents().`),a[o]||(a[o]=[]),a[o].push(i)},window.removeOverlayListener=(o,i)=>{if(a[o]){let _=a[o],b=_.indexOf(i);b>-1&&_.splice(b,1)}},window.callOverlayHandler=o=>{let i;return t?(o.rseq=s++,i=new Promise(_=>{r[o.rseq]=_}),c(o)):i=new Promise(_=>{c(o,b=>{_(b==null?null:JSON.parse(b))})}),i},window.startOverlayEvents=()=>{d=!1,c({call:"subscribe",events:Object.keys(a)})}})();class H0{constructor(t,n=0){L(this,"len",0);L(this,"src",0);L(this,"dst",0);L(this,"type",0);L(this,"data");if(t[0]==="252"&&!(t.length<6)&&(this.len=parseInt(t[2],16),this.src=parseInt(t[3],16),this.dst=parseInt(t[4],16),this.type=parseInt(t[5],16)&65535,!(n>0&&this.len!==n))){this.data=new Uint8Array(this.len-16);for(let s=6,r=0;s<t.length-2;s++,r++){const a=t[s],c=parseInt(a,16);for(let d=0;d<4;d++)this.data[r*4+d]=c>>d*8&255}}}}class U0{constructor(t){L(this,"type",0);L(this,"serverID",0);L(this,"stamp",0);L(this,"data");if(t.length<=16)return;const n=new DataView(t.buffer,0);this.type=n.getUint16(2,!0),this.serverID=n.getUint32(4,!0),this.stamp=n.getUint32(8,!0),this.data=t.slice(16)}}function J0(e){let t;return{c(){t=u("span"),t.textContent="未连接",f(t,"class","red svelte-5ujetl")},m(n,s){P(n,t,s)},d(n){n&&A(t)}}}function V0(e){let t;return{c(){t=u("span"),t.textContent="已连接",f(t,"class","green svelte-5ujetl")},m(n,s){P(n,t,s)},d(n){n&&A(t)}}}function B0(e){let t;return{c(){t=u("span"),t.textContent="无数据",f(t,"class","red svelte-5ujetl")},m(n,s){P(n,t,s)},d(n){n&&A(t)}}}function G0(e){let t;return{c(){t=u("span"),t.textContent="有数据",f(t,"class","green svelte-5ujetl")},m(n,s){P(n,t,s)},d(n){n&&A(t)}}}function R0(e){let t;return{c(){t=u("span"),t.textContent="无数据",f(t,"class","red svelte-5ujetl")},m(n,s){P(n,t,s)},d(n){n&&A(t)}}}function $0(e){let t;return{c(){t=u("span"),t.textContent="有数据",f(t,"class","green svelte-5ujetl")},m(n,s){P(n,t,s)},d(n){n&&A(t)}}}function Z2(e){let t,n,s,r,a,c;return{c(){t=u("div"),n=u("label"),n.textContent="抓包数据:",s=y(),r=u("textarea"),f(n,"for","packet-data"),f(r,"id","packet-data"),f(r,"placeholder","请填写抓包得到的数据"),f(r,"class","svelte-5ujetl")},m(d,h){P(d,t,h),l(t,n),l(t,s),l(t,r),B(r,e[1]),a||(c=_2(r,"input",e[15]),a=!0)},p(d,h){h&2&&B(r,d[1])},d(d){d&&A(t),a=!1,c()}}}function W0(e){let t,n,s,r,a,c,d,h,g,v,o,i,_,b,F,R,s2,$,W,o2,K,T,j,X,Y,z,q,k2,i2,L2,C,a2,j2,M,A2,S2,H,D2,x2,U,N2,I2,k,P2,g2,T2,y2,q2,m2,M2,H2,O,Q,u2,U2,S,J2,b2,Z,c2,V2,D,B2,v2,e2,w2,G2;function R2(p,E){return p[3]?V0:J0}let f2=R2(e),x=f2(e);function $2(p,E){return p[4]?G0:B0}let d2=$2(e),N=d2(e);function W2(p,E){return p[5]?$0:R0}let p2=W2(e),I=p2(e),w=!e[3]&&Z2(e);return{c(){t=u("main"),n=u("div"),s=u("h1"),s.textContent="钓鱼笔记导出工具",r=y(),a=u("h3"),a.textContent="使用方法",c=y(),d=u("ol"),h=u("li"),g=m("请"),v=u("a"),o=m("点击这里"),i=m("尝试使用悬浮窗WS服务连接到悬浮窗。"),_=u("br"),b=m("如果悬浮窗状态显示未连接，也可以直接在ACT中添加悬浮窗，地址为 "),F=u("a"),R=m(e[2]),s2=m("。"),$=y(),W=u("li"),W.textContent="打开鱼糕/钓鱼时钟，点击导入/导出，复制导出数据到本页的第一个框内；",o2=y(),K=u("li"),K.textContent="在ACT中，点击插件-FFXIV解析插件-开启调试选项-开启记录所有网络包。",T=y(),j=u("li"),j.textContent="开启游戏，或是返回到标题画面后重新选择角色进入游戏。如果一切顺利的话，你就能看到生成了用于导入的数据。",X=y(),Y=u("li"),Y.textContent="复制导入数据到鱼糕/钓鱼时钟内导入，至此就完成了钓鱼笔记的导出。",z=y(),q=u("li"),q.textContent="现在，你可以关闭记录所有网络包选项，并删除已添加的悬浮窗了。",k2=y(),i2=u("div"),i2.innerHTML=`<span class="svelte-5ujetl">© 2023 <a href="https://ffxiv.cyou" target="_blank" class="svelte-5ujetl">狒狒西柚</a></span> 
      <span class="svelte-5ujetl"><a href="https://github.com/ffxiv-cyou/ffxiv-fish-export" target="_blank" class="svelte-5ujetl">Github</a></span> 
      <span class="svelte-5ujetl"><a href="https://nga.178.com/read.php?tid=36771535" target="_blank" class="svelte-5ujetl">NGA</a></span>`,L2=y(),C=u("div"),a2=u("span"),a2.textContent="数据版本: 6.4",j2=y(),M=u("span"),A2=m("悬浮窗状态: "),x.c(),S2=y(),H=u("span"),D2=m("ACT日志行: "),N.c(),x2=y(),U=u("span"),N2=m("网络包数据: "),I.c(),I2=y(),k=u("span"),P2=m("钓鱼笔记数目: "),g2=m(e[10]),T2=m(" (钓鱼: "),y2=m(e[9]),q2=m(" / 叉鱼: "),m2=m(e[8]),M2=m(")"),H2=y(),O=u("div"),Q=u("div"),u2=u("label"),u2.textContent="鱼糕/钓鱼时钟导出数据:",U2=y(),S=u("textarea"),J2=y(),w&&w.c(),b2=y(),Z=u("div"),c2=u("label"),c2.textContent="用于导入的数据:",V2=y(),D=u("textarea"),B2=y(),v2=u("div"),e2=u("button"),e2.textContent="复制到剪贴板",f(v,"href",e[6]),f(v,"class","svelte-5ujetl"),f(F,"href",e[2]),f(F,"target","_blank"),f(F,"class","svelte-5ujetl"),f(i2,"class","about svelte-5ujetl"),f(a2,"class","svelte-5ujetl"),f(M,"class","svelte-5ujetl"),f(H,"class","svelte-5ujetl"),f(U,"class","svelte-5ujetl"),f(k,"class","svelte-5ujetl"),f(C,"class","status svelte-5ujetl"),f(u2,"for","orig-data"),f(S,"id","orig-data"),f(S,"placeholder","请填写从鱼糕/钓鱼时钟导出的数据"),f(S,"class","svelte-5ujetl"),f(c2,"for","processed-data"),f(D,"id","processed-data"),D.readOnly=!0,f(D,"class","svelte-5ujetl"),f(e2,"class","pure-button"),f(O,"class","pure-form pure-form-stacked"),f(n,"class","main svelte-5ujetl")},m(p,E){P(p,t,E),l(t,n),l(n,s),l(n,r),l(n,a),l(n,c),l(n,d),l(d,h),l(h,g),l(h,v),l(v,o),l(h,i),l(h,_),l(h,b),l(h,F),l(F,R),l(h,s2),l(d,$),l(d,W),l(d,o2),l(d,K),l(d,T),l(d,j),l(d,X),l(d,Y),l(d,z),l(d,q),l(n,k2),l(n,i2),l(n,L2),l(n,C),l(C,a2),l(C,j2),l(C,M),l(M,A2),x.m(M,null),l(C,S2),l(C,H),l(H,D2),N.m(H,null),l(C,x2),l(C,U),l(U,N2),I.m(U,null),l(C,I2),l(C,k),l(k,P2),l(k,g2),l(k,T2),l(k,y2),l(k,q2),l(k,m2),l(k,M2),l(n,H2),l(n,O),l(O,Q),l(Q,u2),l(Q,U2),l(Q,S),B(S,e[0]),l(O,J2),w&&w.m(O,null),l(O,b2),l(O,Z),l(Z,c2),l(Z,V2),l(Z,D),B(D,e[7]),l(O,B2),l(O,v2),l(v2,e2),w2||(G2=[_2(S,"input",e[14]),_2(D,"input",e[16]),_2(e2,"click",e[11])],w2=!0)},p(p,[E]){E&64&&f(v,"href",p[6]),E&4&&h2(R,p[2]),E&4&&f(F,"href",p[2]),f2!==(f2=R2(p))&&(x.d(1),x=f2(p),x&&(x.c(),x.m(M,null))),d2!==(d2=$2(p))&&(N.d(1),N=d2(p),N&&(N.c(),N.m(H,null))),p2!==(p2=W2(p))&&(I.d(1),I=p2(p),I&&(I.c(),I.m(U,null))),E&1024&&h2(g2,p[10]),E&512&&h2(y2,p[9]),E&256&&h2(m2,p[8]),E&1&&B(S,p[0]),p[3]?w&&(w.d(1),w=null):w?w.p(p,E):(w=Z2(p),w.c(),w.m(O,b2)),E&128&&B(D,p[7])},i:n2,o:n2,d(p){p&&A(t),x.d(),N.d(),I.d(),w&&w.d(),w2=!1,r2(G2)}}}function K0(e,t,n){let s,r,a,c,d,h,g,v="",o="",i=new Uint8Array,_=!1,b=!1,F=!1;function R(T,j){if(!(!T||!j.length))try{return q0(T,j)}catch(X){return X}}function s2(){r&&navigator.clipboard.writeText(r).then(()=>alert("数据已复制到剪贴板")).catch(()=>alert("无法复制到剪贴板，请手动选中并使用Ctrl+C复制"))}function $(T){n(4,b=!0);const j=T.line;if(j[0]!=="252")return;n(5,F=!0);const Y=new H0(j),z=new U0(Y.data),q=o0(z.data);q.length>0&&(n(12,i=q),console.log(q),console.log(z))}g0(()=>{addOverlayListener("LogLine",$),callOverlayHandler({call:"getLanguage"}).then(()=>{n(3,_=!0)}),startOverlayEvents()}),y0(()=>{removeOverlayListener("LogLine",$)});function W(){v=this.value,n(0,v)}function o2(){o=this.value,n(1,o)}function K(){r=this.value,n(7,r),n(0,v),n(13,s),n(12,i),n(1,o)}return e.$$.update=()=>{e.$$.dirty&4098&&n(13,s=i.length>0?i:I0(o)),e.$$.dirty&8193&&n(7,r=R(v,s)),e.$$.dirty&8192&&n(10,a=c0(s).length),e.$$.dirty&8192&&n(9,c=P0(s)),e.$$.dirty&8192&&n(8,d=T0(s)),e.$$.dirty&4&&n(6,g=h+"?OVERLAY_WS=ws://127.0.0.1:10501/ws")},n(2,h=location.protocol+"//"+location.host+location.pathname),[v,o,h,_,b,F,g,r,d,c,a,s2,i,s,W,o2,K]}class X0 extends j0{constructor(t){super(),L0(this,t,K0,W0,p0,{})}}new X0({target:document.getElementById("app")});
