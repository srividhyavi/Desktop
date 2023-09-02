export class Product {
    constructor(_id='',name='',price='',quantity='',image=''){
        this._id = _id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.image = image;
    }
    _id: string;
    name: string;
    price: string;
    quantity: string;
    image: string;
}
