export class FFXIVSegment {
    len: number = 0;
    src: number = 0;
    dst: number = 0;
    type: number = 0;
    data?: Uint8Array;

    constructor(lines: string[], lenFilter = 0) {
        if (lines[0] !== "252") return;
        if (lines.length < 6) return;

        this.len = parseInt(lines[2], 16);
        this.src = parseInt(lines[3], 16);
        this.dst = parseInt(lines[4], 16);
        this.type = parseInt(lines[5], 16) & 0xFFFF;

        if (lenFilter > 0 && this.len !== lenFilter) return;

        this.data = new Uint8Array(this.len - 16);
        for (let i = 6, k = 0; i < lines.length - 2; i++, k++) {
            const line = lines[i];
            const num = parseInt(line, 16);
            for (let j = 0; j < 4; j++) {
                this.data[k * 4 + j] = (num >> (j * 8)) & 0xFF;
            }
        }
    }
}

export class FFXIVIpc {
    type: number = 0;
    serverID: number = 0;
    stamp: number = 0;
    data?: Uint8Array;

    constructor(data: Uint8Array) {
        if (data.length <= 16) return;

        const dw = new DataView(data.buffer, 0);
        this.type = dw.getUint16(2, true);
        this.serverID = dw.getUint32(4, true);
        this.stamp = dw.getUint32(8, true);
        this.data = data.slice(16);
    }
}
