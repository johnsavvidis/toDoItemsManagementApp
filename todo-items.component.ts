import { Component } from '@angular/core';
import { ItemsService } from './todo-items.service';

@Component({
    selector: 'todo-items',
    template: ``
})

export class toDoItemsComponent{

    constructor(service: ItemsService){
        service.getItems()
    }
}