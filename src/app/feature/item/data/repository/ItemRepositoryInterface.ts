import { Observable } from 'rxjs';
import {Item} from "../../domain/entity/Item";

export interface ItemRepositoryInterface {

    createItem(item: Item, token: string): Observable<Item>;

    listItem(token: string): Observable<Item[]>;
}