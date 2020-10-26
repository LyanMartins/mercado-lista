import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ItemRepository } from '../../data/repository/ItemRepository';
import { Item } from '../entity/Item';
import { ListItemInterface } from './ListItemInterface';

@Injectable()
export class ListItem implements ListItemInterface{

    private itemRepository: ItemRepository;

    constructor(itemRepository: ItemRepository){
        this.itemRepository = itemRepository;
    }

    execute(token: string): Observable<Item[]> {
        return this.itemRepository.listItem(token);  
    }
    
}