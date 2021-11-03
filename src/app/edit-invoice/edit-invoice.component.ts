import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Invoice } from '../models/Invoice';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.css']
})
export class EditInvoiceComponent implements OnInit {
  myFormEdit : FormGroup;
  @Input() invoiceToEdit : Invoice;
  constructor() { }

  ngOnInit(): void {
    this.myFormEdit=new FormGroup({
      idInvoice: new FormControl({"value":this.invoiceToEdit.idInvoice, "disabled":true}),
      discountAccount: new FormControl(this.invoiceToEdit.discountAmount),
      bill: new FormControl(this.invoiceToEdit.billAmount),
      dateBill: new FormControl(this.invoiceToEdit.dateBill),
      status: new FormControl(this.invoiceToEdit.Status)
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.invoiceToEdit.firstChange){
        this.myFormEdit.setControl('idInvoice', new FormControl(this.invoiceToEdit.idInvoice));
        this.myFormEdit.setControl('discountAccount', new FormControl(this.invoiceToEdit.discountAmount));
        this.myFormEdit.setControl('bill', new FormControl(this.invoiceToEdit.billAmount));
        this.myFormEdit.setControl('dateBill', new FormControl(this.invoiceToEdit.dateBill));
        this.myFormEdit.setControl('status', new FormControl(this.invoiceToEdit.Status));
    }
  }

}
