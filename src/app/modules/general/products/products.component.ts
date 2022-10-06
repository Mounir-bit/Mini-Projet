import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  Products = [
    {
      id: "ABC8441189035",
      name: "Tshirt",
      description: ""
    },
    {
      id: "DEF6510463347",
      name: "Shoes",
      description: ""
    },
    {
      id: "GHI0831819467",
      name: "Handbags",
      description: ""
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
