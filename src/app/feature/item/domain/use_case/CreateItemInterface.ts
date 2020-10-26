import { Observable } from 'rxjs';
import {Item} from "../entity/Item";

export interface CreateItemInterface {

    execute(item: Item, token: string): Observable<Item>;
}