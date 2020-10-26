import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ListPageComponent } from './view/page/list-page/list-page.component';
import { NavbarComponent } from './view/components/navbar/navbar.component';
import { NewItemPageComponent } from './view/page/new-item-page/new-item-page.component';
import { ListItemPageComponent } from './view/page/list-item-page/list-item-page.component';
import { NewListPageComponent } from './view/page/new-list-page/new-list-page.component';
import { ItemRepository } from './feature/item/data/repository/ItemRepository';
import { ItemService } from './feature/item/data/data_source/ItemService';
import { ListItem } from './feature/item/domain/use_case/ListItem';
import { CreateItem } from './feature/item/domain/use_case/CreateItem';
import { ListRepository } from './feature/list/data/repository/ListRepository';
import { ListService } from './feature/list/data/data_source/ListService';
import { GetList } from './feature/list/domain/use_case/GetList';
import { CreateList } from './feature/list/domain/use_case/CreateList';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListPageComponent,
    NewItemPageComponent,
    ListItemPageComponent,
    NewListPageComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  // {provide: 'IDadosServiceToken', useClass: DadosSQL}
  providers: [
    ItemRepository, ItemService,
    CreateItem, ListItem,
    ListRepository, ListService,
    GetList, CreateList
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
