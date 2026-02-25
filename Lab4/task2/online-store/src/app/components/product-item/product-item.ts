import { Component, input, output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItemComponent {
  product = input.required<Product>();
  delete = output<number>();

  // галерея
  selectedIndex = 0;

  get mainImage(): string {
    const p = this.product();
    return p.images[this.selectedIndex] || p.image;
  }

  selectImage(i: number) {
    this.selectedIndex = i;
  }

  like() {
    this.product().likes++;
  }

  onDelete() {
    this.delete.emit(this.product().id);
  }

  whatsappShare(): string {
    const p = this.product();
    const text = encodeURIComponent(`Check out this product: ${p.link}`);
    return `https://wa.me/?text=${text}`;
  }

  telegramShare(): string {
    const p = this.product();
    const url = encodeURIComponent(p.link);
    const name = encodeURIComponent(p.name);
    return `https://t.me/share/url?url=${url}&text=${name}`;
  }
}