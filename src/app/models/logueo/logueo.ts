export class Logueo {
    public key: string;
    public usuario: string;
    public fechaLogueo: string;

    constructor(key?: string, usuario?: string, fechaLogueo?: string) {
        this.key = key;
        this.usuario = usuario;
        this.fechaLogueo = fechaLogueo;
    }
}
