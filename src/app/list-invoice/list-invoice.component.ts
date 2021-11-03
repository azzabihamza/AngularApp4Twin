import { Component, OnInit } from '@angular/core';
import { Invoice } from '../models/Invoice';

@Component({
  selector: 'app-list-invoice',
  templateUrl: './list-invoice.component.html',
  styleUrls: ['./list-invoice.component.css']
})
export class ListInvoiceComponent implements OnInit {

  invoices : Invoice[];
  

  constructor() { }

  ngOnInit(): void {
    this.invoices =[
      { idInvoice: 1, discountAmount: 20, billAmount: 500, dateBill:
        new Date ("14/07/2021") , Status : true},
      { idInvoice: 2, discountAmount: 10, billAmount: 1000,dateBill:
        new Date ("02/10/2020") , Status : false},
      { idInvoice: 3, discountAmount: 50, billAmount: 200, dateBill:
        new Date ("15/12/2021") , Status : false},
      ]
  }

}
