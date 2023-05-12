import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu';

  menuItems: MenuItem[] = [
    { Name: "Margherita Pizza", Category: "Pizza", Price: 12.99 },
    { Name: "Burger", Category: "Burgers", Price: 10.99 },
    { Name: "Caesar Salad", Category: "Salads", Price: 8.99 },
    { Name: "Spaghetti Bolognese", Category: "Pasta", Price: 14.99 },
    { Name: "Fried Chicken Sandwich", Category: "Sandwiches", Price: 11.99 },
    { Name: "Taco Salad", Category: "Salads", Price: 9.99 }
];

getByCategory(Cat: string): MenuItem[] {
  return this.menuItems.filter(item => item.Category === Cat);
}

getCategories(): string[] {
  const categories = this.menuItems.map(item => item.Category);
  console.log(categories);
  // return Array.from(new Set(categories));

  return [...new Set(categories)];
}


}
