export class Diagnostico {
    public key;
    public turno: string;
    public diagnostico: string;

    constructor(key?: string, turno?: string, diagnostico?: string) {
        this.key = key;
        this.turno = turno;
        this.diagnostico = diagnostico;
    }
}
