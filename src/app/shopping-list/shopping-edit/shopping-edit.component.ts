import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {}

  onAdd(form: NgForm) {
    const value = form.value;
    this.shoppingListService.addIngredient({
      name: value.name,
      amount: value.amount,
    });
  }

  ngOnInit(): void {}
}
