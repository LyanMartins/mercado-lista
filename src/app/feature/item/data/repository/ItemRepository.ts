import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Item } from '../../domain/entity/Item';
import { ItemRepositoryInterface } from './ItemRepositoryInterface';
import { ItemService } from '../data_source/ItemService';
import { ItemModel } from '../model/ItemModel';

@Injectable()
export class ItemRepository implements ItemRepositoryInterface{

    private itemService: ItemService;

    constructor(itemService: ItemService){
        this.itemService = itemService;
        console.log("entrou no repository");
    }
    listItem(token: string): Observable<Item[]> {
        let list = this.itemService.listItem(token);
        return list;
    }

    createItem(item: Item, token: string): Observable<Item> {
        let itemModel = new ItemModel(item.title, item.quantity, item.checked, item.price, item.inActived)
        let response = this.itemService.createItem(itemModel, token);
        return response;
    }
    
}