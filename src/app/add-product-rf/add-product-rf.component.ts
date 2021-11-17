import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Product } from '../models/Product';

@Component({
  selector: 'app-add-product-rf',
  templateUrl: './add-product-rf.component.html',
  styleUrls: ['./add-product-rf.component.css']
})
export class AddProductRFComponent implements OnInit {
  productForm: FormGroup;
  product: Product;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      idProduct: new FormControl(),
      code: new FormControl(),
      libelle: new FormControl(),
      price:  new FormControl(),
      tauxTVA: new FormControl(),
    })
  }

}
