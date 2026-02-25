import { Component, effect, input, signal } from '@angular/core';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
  imports: [ProductItemComponent],
})
export class ProductListComponent {
  products = input.required<Product[]>();

  list = signal<Product[]>([]);

  constructor() {
    effect(() => {
      this.list.set([...this.products()]);
    });
  }

  removeProduct(id: number) {
    this.list.set(this.list().filter(p => p.id !== id));
  }
}