import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  constructor(private shoppingListService: ShoppingListService) {}

  onAdd(form: NgForm) {
    const value = form.value;
    this.shoppingListService.addIngredient({
      name: value.name,
      amount: value.amount,
    });
  }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        console.log(index);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
