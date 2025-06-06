import { Component } from '@angular/core';

@Component({
  selector: 'app-index-page',
  imports: [],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.css'
})
export class IndexPageComponent {
    categories = [
        {"name":"cereal"},
        {"name":"meat"},
        {"name":"pasta"},
        {"name":"legumes"}
    ];

    username = "geanluiz";

    selected_product = [];

    products = [];

    getCategories () {
        return this.categories;
    }
}
