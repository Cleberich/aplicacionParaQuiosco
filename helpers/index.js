export const formatearDinero = cantidad =>{
    return cantidad.toLocaleString('es-UY', {
        style: 'currency',
        currency: 'UYU'
    })
}
