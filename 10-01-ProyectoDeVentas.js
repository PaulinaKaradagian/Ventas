class Producto {

    static contadorProductos = 0

    constructor(nombre, precio){

        this._idProducto = ++Producto.contadorProductos
        this._nombre = nombre
        this._precio = precio
    }
    get idProducto() {
        return this._idProducto
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nombre){
        this._nombre = nombre
    }
    get precio(){
        return this._precio
    }
    set precio(precio){
        return this._precio = precio
    }
    toString(){
        return ` ID Producto: ${this._idProducto}, Nombre: ${this._nombre}, Precio: $${this._precio}`
    }

}

class Orden{

    static contadorOrdenes = 0

    static get MAX_PRODUCTOS(){
        return 5
    }

    constructor(){

        this._idOrden = ++Orden.contadorOrdenes
        this._productos = []
        //this.contadorProductosAgregados = 0
    }

    get idOrden() {
        return this._idOrden

    }
    agregarProducto(producto){
        
        if(this._productos.length < Orden.MAX_PRODUCTOS ){

            this._productos.push(producto)
            //otra sintaxis
            //this._productos[this._contadorDeProductosAgregados++] = producto

        }else{
            console.log("No se pueden agregar más productos en esta orden.")
        }
    }
    calcularTotal(){

        let totalVenta = 0
        for(let producto of this._productos){

            totalVenta += producto.precio // = totalVenta + producto.precio 
        }
        return totalVenta
    }
    mostrarOrden(){
        let productoOrden = " "
        for(let producto of this._productos){
            productoOrden += "\n {" + producto.toString() + " } "
        }
        console.log(`Orden: ${this._idOrden} Total $${this.calcularTotal()}  Productos: ${productoOrden}  `)

    }

}





let producto1 = new Producto("Café", 120)


let producto2 = new Producto("Medialunas", 50)


let orden1 = new Orden()
orden1.agregarProducto(producto1)
orden1.agregarProducto(producto2)

orden1.mostrarOrden()
let producto3 = new Producto("Tostado", 220)
let producto4 = new Producto("Coca Zero", 80)
let producto5 = new Producto("Sprite", 80)

let orden2 = new Orden()
orden2.agregarProducto(producto3)
orden2.agregarProducto(producto4)
orden2.agregarProducto(producto5)

orden2.mostrarOrden()

let orden3 = new Orden()

orden3.agregarProducto(producto3)
orden3.agregarProducto(producto3)
orden3.agregarProducto(producto4)
orden3.agregarProducto(producto4)
orden3.agregarProducto(producto1)


orden3.mostrarOrden()