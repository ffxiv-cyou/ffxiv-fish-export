import FishData from "../assets/fish.json";
import SpearFishData from "../assets/spearfish.json";

const PACKET_LEN = 2516; // 数据包长度，不包括 0x20 长的的包头
const FISH_OFFSET = 0x0648; // 捕鱼数据偏移量，第一个 0xFE 出现的位置, 记得减去 0x20
const FISH_LEN = 161; // 数据长度
const FISH_SPOT_LEN = 38;
const SPEAR_BEGIN = FISH_LEN + FISH_SPOT_LEN;
const SPEAR_LEN = 34;
const SPEAR_SPOT_LEN = 7;
const FISH_PACKET_LEN = FISH_LEN + FISH_SPOT_LEN + SPEAR_LEN + SPEAR_SPOT_LEN;

export function GetFishDataFromStr(raw: string) {
  let data = Hex2U8Array(raw);
  return GetFishData(data.subarray(0x20));
}

export function GetFishData(packet: Uint8Array): Uint8Array {
  if (!packet || packet.length !== PACKET_LEN) {
    return new Uint8Array();
  }
  return packet.subarray(FISH_OFFSET, FISH_OFFSET + FISH_PACKET_LEN)
}

function getFishesMask(fishPacket: Uint8Array) {
  return fishPacket.subarray(0, FISH_LEN);
}
function getFishSpotsMask(fishPacket: Uint8Array) {
  return fishPacket.subarray(FISH_LEN, SPEAR_BEGIN);
}
function getSpearFishesMask(fishPacket: Uint8Array) {
  return fishPacket.subarray(SPEAR_BEGIN, SPEAR_BEGIN + SPEAR_LEN);
}
function getSpearFishSpotsMask(fishPacket: Uint8Array) {
  return fishPacket.subarray(SPEAR_BEGIN + SPEAR_LEN, FISH_PACKET_LEN);
}
function bitCount(arr: Uint8Array) {
  let count = 0;
  arr.forEach(n => {
    n = n - ((n >> 1) & 0x55)
    n = (n & 0x33) + ((n >> 2) & 0x33)
    count += (n + (n >> 4) & 0x0F);
  });
  return count;
}

export function FishCount(fishPacket: Uint8Array) {
  return bitCount(getFishesMask(fishPacket));
}
export function SpearFishCount(fishPacket: Uint8Array) {
  return bitCount(getSpearFishesMask(fishPacket));
}

export function ExtractFishList(fishPacket: Uint8Array) {
  if (fishPacket.length === 0) [];

  let fishes = getFishesMask(fishPacket);
  let spearfishes = getSpearFishesMask(fishPacket);

  let arr = [];
  for (let i = 0; i < fishes.length; i++) {
    let byte = fishes[i];
    for (let j = 0; j < 8; j++) {
      if (byte & (1 << j)) {
        arr.push(FishData[i * 8 + j]);
      }
    }
  }
  for (let i = 0; i < spearfishes.length; i++) {
    let byte = spearfishes[i];
    for (let j = 0; j < 8; j++) {
      if (byte & (1 << j)) {
        arr.push(SpearFishData[i * 8 + j]);
      }
    }
  }
  return arr;
}

export function MergeFishData(origin: string, fishPacket: Uint8Array) {
  let obj = JSON.parse(origin);

  if (fishPacket.length === 0) return "invalid data";

  obj.completed = ExtractFishList(fishPacket);
  return JSON.stringify(obj);
}

export function Hex2U8Array(text: string): Uint8Array {
  text = text.replaceAll(/[^0-9a-fA-F]/g, '');
  const array = new Uint8Array(text.length / 2);
  for (let i = 0; i < text.length; i += 2) {
    array[i / 2] = parseInt(text.substring(i, i + 2), 16);
  }
  return array;
}
