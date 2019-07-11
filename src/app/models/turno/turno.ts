import { diccionario } from '../diccionario';

export class Turno {
    /**key de firebase
     * cliente (uid)
     * especialista (iud)
     * fecha
     * estado (pedido, en_proceso, terminado, cancelado, ausente)
     * turnoRealizadoPor (true , false)
     * sala (cons01, cons02, cons03, cons04, cons05, cons06, cons07, labImagenes, labMecanica)
     */
    public key: string;
    public cliente: string;
    public especialista: string;
    public fecha: string;
    public estado: string;
    public turnoRealizadoPor: boolean;
    public sala: string;

    constructor(
        key?: string,
        cliente?: string,
        especialista?: string,
        fecha?: string,
        estado?: string,
        turnoRealizadoPor?: boolean,
        sala?: string) {
        this.key = key;
        this.cliente = cliente;
        this.especialista = especialista;
        this.fecha = fecha;
        this.estado = estado;
        this.turnoRealizadoPor = turnoRealizadoPor;
        this.sala = sala;
    }
}
