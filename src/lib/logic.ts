import FishData from "../assets/fish.json";

export function GetFishDataFromStr(raw: string) {
  let data = Hex2U8Array(raw);
  return GetFishData(data.subarray(0x20));
}

export function GetFishData(packet: Uint8Array): Uint8Array {
  if (!packet || packet.length !== 2464)
    return new Uint8Array();
  return packet.subarray(0x062C, 0x062C + 161)
}

export function MergeFishData(origin: string, fish: Uint8Array) {
  let obj = JSON.parse(origin);

  if (fish.length === 0) return "invalid data";

  let arr = [];
  for (let i = 0; i < fish.length; i++) {
    let byte = fish[i];
    for (let j = 0; j < 8; j++) {
      if (byte & (1 << j)) {
        arr.push(FishData[i * 8 + j]);
      }
    }
  }

  obj.completed = arr;
  return JSON.stringify(obj);
}

export function Hex2U8Array(text: string): Uint8Array {
  const array = new Uint8Array(text.length / 2);
  for (let i = 0; i < text.length; i += 2) {
    array[i / 2] = parseInt(text.substring(i, i + 2), 16);
  }
  return array;
}

export function FishCount(packet: Uint8Array): number {
  let n = 0;
  for (let i = 0; i < packet.length; i++) {
    n += bitCount(packet[i]);
  }
  return n;
}

function bitCount (n) {
  n = n - ((n >> 1) & 0x55555555)
  n = (n & 0x33333333) + ((n >> 2) & 0x33333333)
  return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24
}