export const diccionario = {
    db: {
        usuarios: 'usuarios',
        consultorios: 'consultorios',
        turnos: 'turnos',
        logueos: 'logueos',
        encuestas_cliente: 'encuestas-cliente',
        resenia_especialisata: 'resenia-especialista',
    },
    estado_consultorio: {
        disponible: 'disponible',
        ocupado: 'ocupado',
        no_disponible: 'no-disponible',
        por_ser_usado: 'por-ser-utilizado',
    },
    estado_turno: {
        pedido: 'pedido',
        en_proceso: 'en_proceso',
        terminado: 'terminado',
        cancelado: 'cancelado',
        ausente: 'ausente',
    },
    turno_realizado_por: {
        cliente: true,
        recepcionista: false,
    }
};
