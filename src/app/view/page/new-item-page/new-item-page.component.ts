import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from 'src/app/feature/item/domain/entity/Item';
import { CreateItem } from 'src/app/feature/item/domain/use_case/CreateItem';
import { ListItem } from 'src/app/feature/item/domain/use_case/ListItem';


@Component({
  selector: 'app-new-item-page',
  templateUrl: './new-item-page.component.html',
  styleUrls: ['./new-item-page.component.css']
})
export class NewItemPageComponent implements OnInit {



  public form: FormGroup;
  public token: string;

  public config: any= {
    'title':'Adicionar Item',
    'type':'new_page',
    'token': this.activatedRoute.snapshot.params.token
  }

  @Output() responseEmitter = new EventEmitter();

  constructor(
    private createItem: CreateItem,
    private listItem: ListItem,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) {
    this.form = this.fb.group({
      name: ['',Validators.required],
      quantity: [''],
      price: ['']
    });
  }

  ngOnInit(): void {
    this.token = this.getUrlToken();
  }

  createNewItem(token){
    let form = this.form.value;
    let item = new Item(
      form.name,
      parseInt(form.quantity),
      true,
      parseFloat(form.price),
      true
    );
    let data = this.createItem.execute(item, token);
    data.subscribe((value) => {
      if(value){
        this.responseEmitter.emit(this.getList());
        this.router.navigate([`list/${token}`]);
      }
    })
   
  }
  
  getList(){
    return this.listItem.execute(this.token);
  }

  getUrlToken() {
    return this.activatedRoute.snapshot.params.token;  

  }
}
