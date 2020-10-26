import { Observable } from 'rxjs';
import { ItemModel } from '../model/ItemModel';

export interface ItemServiceInterface {

    createItem(item: ItemModel, token: string): Observable<ItemModel>;

     listItem(token: string): Observable<ItemModel[]> ;

}