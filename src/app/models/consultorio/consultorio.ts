export class Consultorio {
    /**Para todos
     * key de firebase
     * codigo (cons01, cons02, cons03, cons04, cons05, cons06, cons07, cons08, cons09, cons10, labImagenes, labMecanica)
     * estado (disponible, ocupado, no_disponible)
     */

    public key: string;
    public codigo: string;
    public estado: string;

    constructor(key?: string, codigo?: string, estado?: string) {
        this.key = key;
        this.codigo = codigo;
        this.estado = estado;
    }
}
