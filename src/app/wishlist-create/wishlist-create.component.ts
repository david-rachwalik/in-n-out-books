/*
 * Title: wishlist-create.component.ts
 * Author: David Rachwalik
 * Date: 2022/07/03
 * Description: Wishlist-create component
 */

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IWishlistItem } from './../wishlist-item.interface';

@Component({
  selector: 'app-wishlist-create',
  templateUrl: './wishlist-create.component.html',
  styleUrls: ['./wishlist-create.component.scss'],
})
export class WishlistCreateComponent implements OnInit {
  @Output() addItemEmitter = new EventEmitter<IWishlistItem>();

  item: IWishlistItem;

  constructor() {
    this.item = {} as IWishlistItem;
  }

  ngOnInit(): void {}

  addItem(): void {
    this.addItemEmitter.emit({
      title: this.item.title,
      authors: this.item.authors,
    });
    // Reset the item
    this.item = {} as IWishlistItem;
  }
}
