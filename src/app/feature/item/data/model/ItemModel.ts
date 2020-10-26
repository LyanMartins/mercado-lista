import { Model } from 'src/app/common/model/model';
import { Item } from '../../domain/entity/Item';

export class ItemModel {
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

    public toEntity(): Item{
        return new Item(
            this.title,
            this.quantity,
            this.checked,
            this.price,
            this.inActived
        );
    }
}