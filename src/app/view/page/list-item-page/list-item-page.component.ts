import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from 'src/app/feature/item/domain/entity/Item';
import { ListItem } from 'src/app/feature/item/domain/use_case/ListItem';

@Component({
  selector: 'app-list-item-page',
  templateUrl: './list-item-page.component.html',
  styleUrls: ['./list-item-page.component.css']
})
export class ListItemPageComponent implements OnInit {

  public config: any= {
    'title':'Lista de Items',
    'type':'item_page'
  }
  
  public token: string;

  @Input() name;
  @Input() item: Item[];

  constructor(
    private route: ActivatedRoute,
    private listItem: ListItem
  ) {
    this.listItem = listItem;
  }

  ngOnInit(): void {
    this.token = this.getUrlToken();
  }
  ngAfterViewInit(){
    
    this.getList(this.token).subscribe(value => {
      console.log(value)
      this.item = value;
    });
  }
  
  getList(token){
    return this.listItem.execute(token);
  }

  reciverFeedback($event){
    this.item = $event
  }

  getUrlToken() {
    return this.route.snapshot.params.token;  

  }

  
}
