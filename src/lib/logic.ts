import FishData from "../assets/fish.json";
import SpearFishData from "../assets/spearfish.json";

export function GetFishDataFromStr(raw: string) {
  let data = Hex2U8Array(raw);
  return GetFishData(data.subarray(0x20));
}

export function GetFishData(packet: Uint8Array): Uint8Array {
  if (!packet || packet.length !== 2464)
    return new Uint8Array();
  return packet.subarray(0x062C, 0x062C + 161 + 38 + 34 + 7)
}

function getFishesMask(fishPacket: Uint8Array) {
  return fishPacket.subarray(0, 161);
}
function getSpearFishesMask(fishPacket: Uint8Array) {
  return fishPacket.subarray(161 + 38, 161 + 38 + 34);
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
  const array = new Uint8Array(text.length / 2);
  for (let i = 0; i < text.length; i += 2) {
    array[i / 2] = parseInt(text.substring(i, i + 2), 16);
  }
  return array;
}