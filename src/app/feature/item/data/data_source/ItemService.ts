import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable  } from 'rxjs';
import { Api } from 'src/app/common/service/api';
import { ItemModel } from '../model/ItemModel';
import { ItemServiceInterface } from './ItemServiceInterface';

@Injectable()
export class ItemService extends Api implements ItemServiceInterface {

    constructor(private httpClient: HttpClient){
        super();
        console.log("dentro do service");
    }
    listItem(token: string): Observable<ItemModel[]> {
        let item = this.httpClient
            .get<ItemModel[]>(`${this.url}item/${token}`,{headers: this.httpOptions})
        return item;
    }

    createItem(item: ItemModel, token: string): Observable<ItemModel> {
        let response = this.httpClient.post<ItemModel>(`${this.url}item/${token}`,item ,{headers: this.httpOptions});
        return response;
    }

}