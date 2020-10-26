import { ItemModel } from '../../data/model/ItemModel';

export class Item {

    public title: string;
    public quantity: number;
    public checked: boolean;
    public price: number;
    public inActived: boolean = true;
    
    constructor(
        title: string,
        quantity: number,
        checked: boolean,
        price: number,
        inActived: boolean,
    ){
        this.title = title;
        this.quantity = quantity;
        this.checked = checked;
        this.price = price;
        this.inActived = inActived;
    }

}