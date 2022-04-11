
import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { DetailOrder } from './interfaces/detail.interface';
import { DetailOrderService } from './service/detail.service';

@Component({
  selector: 'detail-order',
  templateUrl: './detailOrder.component.html',
  styleUrls: ['./detailOrder.component.scss']
})
export class DetailComponent implements OnInit {
  details!: DetailOrder[];

  constructor(private detailOrderSvc: DetailOrderService) { }

  ngOnInit(): void {
    this.detailOrderSvc.getDetailOrder()
    .pipe(
      tap((details: DetailOrder[]) => this.details = details)
    )
    .subscribe()
  }

}