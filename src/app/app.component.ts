import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderTableComponent } from './order-table/order-table.component';

@Component({
  selector: 'app-root',
  standalone: true,  // ✅ Mark AppComponent as standalone
  imports: [CommonModule, OrderTableComponent],  // ✅ Import dependencies here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'order-management-ui';
}
