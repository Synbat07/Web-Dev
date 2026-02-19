import { Component } from '@angular/core';
import { PRODUCTS } from '../../data/products';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})

export class ProductListComponent {
  products: Product[] = PRODUCTS;

  //выбранное фото для каждого товара
  selectedIndex: Record<number, number> = {};

  getMainImage(p: Product): string {
    const idx = this.selectedIndex[p.id] ?? 0;
    return p.images[idx] || p.image;
  }

  selectImage(p: Product, index: number) {
    this.selectedIndex[p.id] = index;
  }

  whatsappShare(p: Product): string {
    const text = encodeURIComponent(`Check out this product: ${p.link}`);
    return `https://wa.me/?text=${text}`;
  }

  telegramShare(p: Product): string {
    const url = encodeURIComponent(p.link);
    const name = encodeURIComponent(p.name);
    return `https://t.me/share/url?url=${url}&text=${name}`;
  }
}
