import { Component, computed, signal } from '@angular/core';
import { CATEGORIES, PRODUCTS } from './data/products';
import { Product } from './models/product.model';
import { ProductListComponent } from './components/product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  categories = CATEGORIES;

  selectedCategoryId = signal<number | null>(null);

  filteredProducts = computed<Product[]>(() => {
    const id = this.selectedCategoryId();
    if (id === null) return [];
    return PRODUCTS.filter(p => p.categoryId === id);
  });

  selectCategory(id: number) {
    this.selectedCategoryId.set(id);
  }
}