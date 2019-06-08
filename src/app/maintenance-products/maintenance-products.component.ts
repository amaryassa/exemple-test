import { MaintenanceService } from './../../services/maintenance.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance-products',
  templateUrl: './maintenance-products.component.html',
  styleUrls: ['./maintenance-products.component.scss']
})
export class MaintenanceProductsComponent implements OnInit {
  public maintenance_products: any = [];
  constructor(private _maintenanceService: MaintenanceService) { }
  ngOnInit() {
    this._maintenanceService.getMaitenance().subscribe(data => {
      console.log('maintenance_products ', data);
      this.maintenance_products = data;
      });
  }

}
