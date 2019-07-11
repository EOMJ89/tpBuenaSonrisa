export class Usuario {
    /** // Para todos
     * key de firebase
     * correo
     * nombre
     * apellido
     * tipo (cliente, especialista, recepcionista, administrador)
     * foto
     * // Esto es solo para especialista
     * especialidad
     */

    public key: string;
    public correo: string;
    public nombre: string;
    public apellido: string;
    public tipo: string;
    public foto: any;
    public especialidad: string;

    constructor(
        key?: string,
        correo?: string,
        nombre?: string,
        apellido?: string,
        tipo?: string,
        foto?: any,
        especialidad?: string
    ) {
        this.key = key;
        this.correo = correo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.tipo = tipo;
        this.foto = foto;
        this.especialidad = especialidad;
    }
}
