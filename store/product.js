/*const producto1 = {
    nombre: "celular",
    precio: 100000,
    stock: 2
    };
    producto1.id = "id123";
    producto1[foto] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";*/

//Actividad: Creación de un producto
 /*   const producto1 = {
        nombre: "celular",
        precio: 100000,
        stock: 2
    };
    producto1.id = "id123";
    producto1["foto"] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";
    
    console.log(producto1);
    console.log(producto1.nombre);*/


//Actividad: Creación de un producto
    /*class Product {
        constructor(id, title, price, stock, images, onsale) {
            this.id = String(id);
            this.title = String(title);
            this.price = Number(price);
            this.stock = Number(stock);
            this.images = [];
            this.onsale = false;
        }
    }
    
    // Ejemplo de creación de un objeto Product
    const prod1 = new Product("id123", "Celular", 100000, 2);    
    const prod2 = new Product("id456", "Laptop", 1500000);
    const prod3 = new Product("id789", "Tablet", 500000, 5);

    console.log("prod1:", prod1);
    console.log("prod2:", prod2);
    console.log("prod3:", prod3);

    onsole.log("Title de prod2:", prod2.title);
    console.log("Onsale de prod3:", prod3.onsale);*/
    
//Actividad:  Obtención y modificación de propiedades de una instancia "id012", "",120000, 3, [], "in stock", 
/*
class Product {
    constructor(id, title, price, stock, images, onsale, supplier) {
        this.id = String(id);
        this.title = String(title);
        this.price = Number(price);
        this.stock = Number(stock);
        this.images = [];
        this.onsale = Boolean(onsale);
        this._supplier = supplier;
    }
    get supplier() {
        return this._supplier;
        }
    set supplier(newName) {
        this._supplier = newName;
        }
}
// Ejemplo de creación de un objeto Product
const prod1 = new Product("id123", "Celular", 100000, 2);    
const prod2 = new Product("id456", "Laptop", 1500000);
const prod3 = new Product("id789", "Tablet", 500000, 5);
const prod4 = new Product("id101", "Smartwatch", 50000, 10, [], false, "ProveedorX");
// Modificar el proveedor usando el setter
prod4.supplier = "ProveedorY";

console.log("prod1:", prod1);
console.log("prod2:", prod2);
console.log("prod3:", prod3);
console.log("prod4:", prod4);

console.log("Title de prod2:", prod2.title);
console.log("Onsale de prod3:", prod3.onsale);
console.log("Proveedor de prod4:", prod4.supplier);*/
/*
//Actividad: Venta de productos
class Product {
    constructor(id, title, price, stock, images, onsale, supplier) {
        this.id = String(id);
        this.title = String(title);
        this.price = Number(price);
        this.stock = Number(stock);
        this.images = [];
        this.onsale = Boolean(onsale);
        this._supplier = supplier;
    }
    get supplier() {
        return this._supplier;
        }
    set supplier(newName) {
        this._supplier = newName;
        }
    
sellUnits(units) {
    if (this.stock >= units) {
        this.stock -= units;
        console.log(units + " unidades vendidas de " + this.title);
        if (this.stock === 0) {
            this.onsale = "sold out";
        } else {
            this.onsale = "in stock";
                    }
        } else {
            console.log("No hay suficiente stock de " + this.title + " para vender " + units + " unidades.");
        }        
        }
}
// Ejemplo de creación de un objeto Product
const prod1 = new Product("id123", "Celular", 100000, 2);    
const prod2 = new Product("id456", "Laptop", 1500000);
const prod3 = new Product("id789", "Tablet", 500000, 5);
const prod4 = new Product("id101", "Smartwatch", 50000, 10, [], false, "ProveedorX");
const prod5 = new Product("id202", "Auriculares", 50000, 12, [], false, "ProveedorZ");
// Modificar el proveedor usando el setter
prod4.supplier = "ProveedorY";
//metodo sellunits
prod5.sellUnits(10); // Se venden 10 unidades
prod5.sellUnits(5);  // No se pueden vender 5 unidades porque solo quedan 2 en stock

console.log("prod1:", prod1);
console.log("prod2:", prod2);
console.log("prod3:", prod3);
console.log("prod4:", prod4);
console.log("prod5:", prod5);

console.log("Title de prod2:", prod2.title);
console.log("Onsale de prod3:", prod3.onsale);
console.log("Proveedor de prod4:", prod4.supplier);*/
class Product {
    constructor(id, title, price, stock, images = [], onsale, supplier, colors, description) {
        this.id = String(id);
        this.title = String(title);
        this.price = Number(price);
        this.stock = Number(stock);
        this.images = images;
        this.onsale = Boolean(onsale);
        this._supplier = supplier;
        this.colors = String(colors);
        this.description = String(description);
    }
}
// Ejemplo de creación de un objeto Product
const prod1 = new Product("id123", "Celular", 100000, 2, ["img1.jpg", "img2.jpg", "img3.jpg"], false, "ProveedorX", ["Negro", "Blanco"], "Un teléfono celular avanzado con excelentes características.");
const prod2 = new Product("id456", "Laptop", 1500000, 5, ["img1.jpg", "img2.jpg", "img3.jpg"], true, "ProveedorY", ["Gris", "Plateado"], "Una laptop potente para uso profesional.");
const prod3 = new Product("id789", "Tablet", 500000, 3, ["img1.jpg", "img2.jpg"], false, "ProveedorZ", ["Negro"], "Una tablet ligera y versátil.");
const prod4 = new Product("id101", "Smartwatch", 50000, 10, ["img1.jpg", "img2.jpg"], false, "ProveedorX", ["Negro", "Blanco"], "Un smartwatch elegante con múltiples funciones.");
const prod5 = new Product("id202", "Auriculares", 50000, 12, ["img1.jpg", "img2.jpg"], false, "ProveedorZ", ["Negro"], "Auriculares inalámbricos con excelente calidad de sonido.");
const prod6 = new Product("id303", "Teclado", 5000, 8, ["img1.jpg", "img2.jpg"], false, "ProveedorY", ["Negro", "Blanco"], "Un teclado ergonómico y duradero.");

const products = [prod1, prod2, prod3, prod4];

console.log(products);

/*
//Agrega prod5 al inicio del array utilizando el método unshift.
products.unshift(prod5);
console.log(products);

//Agrega prod6 al final del array utilizando el método push.
products.push(prod6);
console.log(products);

//quita el primer elemento del array utilizando el método shift. 
products.shift(prod1);
console.log(products);

//Quita el último elemento del array utilizando el método pop. 
products.pop(prod4);
console.log(products);

console.log(products);
console.log(products[1]);
console.log(products[products.length - 1].title);*/





