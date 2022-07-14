/*
 * Title: wishlist.component.ts
 * Author: David Rachwalik
 * Date: 2022/07/03
 * Description: Wishlist component
 */

import { Component, OnInit } from '@angular/core';
import { IWishlistItem } from '../wishlist-item.interface';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
})
export class WishlistComponent implements OnInit {
  items: Array<IWishlistItem> = [];

  constructor() {}

  ngOnInit(): void {}

  updateItemsHandler(item: IWishlistItem): void {
    this.items.push(item);
  }
}
