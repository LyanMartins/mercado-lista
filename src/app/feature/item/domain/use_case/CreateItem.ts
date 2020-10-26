import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ItemRepository } from '../../data/repository/ItemRepository';
import { Item } from '../entity/Item';
import { CreateItemInterface } from './CreateItemInterface';


@Injectable()
export class CreateItem implements CreateItemInterface{

    private itemRepository: ItemRepository;

    constructor(itemRepository: ItemRepository){
        this.itemRepository = itemRepository;
        console.log("entrou no use_case");
    }

    execute(item: Item, token: string): Observable<Item>{
        let data = this.itemRepository.createItem(item, token);
        return data;
    }
    
}