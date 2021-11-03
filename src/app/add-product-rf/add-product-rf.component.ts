import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-product-rf',
  templateUrl: './add-product-rf.component.html',
  styleUrls: ['./add-product-rf.component.css']
})
export class AddProductRFComponent implements OnInit {
  /*productForm = this.formBuilder.group({

  })*/

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
