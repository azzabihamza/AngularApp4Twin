import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product-td',
  templateUrl: './add-product-td.component.html',
  styleUrls: ['./add-product-td.component.css']
})
export class AddProductTDComponent implements OnInit {
  public show:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleNext(){
    this.show = !this.show;
  }

}
