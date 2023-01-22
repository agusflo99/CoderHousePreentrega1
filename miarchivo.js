//Se realizara una interacción para que el usuario ingrese el objeto que desea comprar,
//luego consultaremos si el mismo quiere seguir haciendo un pedido y en caso de que no
//quiera seguir comprando se le mostrara en pantalla el importe
//total por los productos seleccionados.

alert('Bienvenidos a Ferrag SA ¡Tu ferreteria de confianza!')
const productos = [
    {nombre: 'martillo ', precio :250},
    {nombre: 'destornillador', precio :150},
    {nombre: 'teflon', precio :50},
    {nombre: 'cinta', precio :100},
    {nombre: 'pinza', precio :130},
];

let carrito = [];

let ingreso = prompt('¿Desea comenzar alguna compra?')
while(ingreso != 'si' && ingreso!= 'no'){
    alert('La respuesta ingresada es incorrecta, indicar si o no')
    ingreso = prompt('¿Desea comenzar alguna compra?')
}

if (ingreso == 'si'){
    alert ('Nuestros productos son los siguientes')
    let totalProductos = productos.map ((productos) => productos.nombre + ' ' + productos.precio + '$');
    alert(totalProductos.join('-'));
}else if( ingreso =='no'){
    alert('Muchas gracias por visitarnos, vuelva pronto!')
}
while(ingreso !='no'){
    let productos = prompt('Ingrese un producto a comprar')
    let precio = 0 
    if( productos == 'martillo' || productos == 'destornillador' || productos == 'teflon'||
    productos == 'cinta'|| productos == 'pinza'){
        switch(productos){
            case 'martillo':
                precio=250;
                break;
            case 'destornillador':
                precio=150;
                break;
            case 'teflon':
                precio=50;
                break;
            case 'cinta':
                precio=100;
                break;
            case 'pinza':
                precio=130;
                break;
            default:
                break;
        }
    let unidades = parseInt(prompt('¿Cuantas unidades desea llevar?'))
    carrito.push({productos,unidades,precio})
    }else{
        alert('No tenemos ese producto')
    }
    ingreso = prompt('¿Desea seguir comprando?')
    while(ingreso == 'no'){
        alert('Gracias por su compra! A continuacion el total')
        const total = carrito.reduce((acc,el)=>acc+ el.precio * el.unidades,0)
        alert(`El precio total de tu compra es de: ${total}`)
        alert('Su compra esta siendo preparada')
    break;
    }
}

