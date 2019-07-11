export class Encuesta {
    public key: string;
    public turno: string;
    public resenia: string;
    public clinica: number;
    public especialista: number;

    constructor(key?: string, turno?: string, resenia?: string, clinica?: number, especialista?: number) {
        this.key = key;
        this.turno = turno;
        this.resenia = resenia;
        this.clinica = clinica;
        this.especialista = especialista;
    }
}
