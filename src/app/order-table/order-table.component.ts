import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { OrderService } from '../services/order.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-order-table',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, MatSortModule], // ✅ Add MatPaginatorModule here
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {
  displayedColumns: string[] = ['orderId', 'customerName', 'orderItem', 'deliveryDate', 'deliveryPrice', 'status'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private orderService: OrderService) {}

  ngOnInit() {
    this.loadOrders();
  }

  loadOrders() {
    this.orderService.getOrders().subscribe(
      data => {
        this.dataSource = new MatTableDataSource(data);
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
      },
      error => console.error("❌ API Error:", error)
    );
  }
}
