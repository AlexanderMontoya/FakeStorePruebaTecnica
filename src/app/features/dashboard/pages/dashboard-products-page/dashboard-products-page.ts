import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { IconFieldModule } from 'primeng/iconfield';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { LoadingService } from '../../../../shared/services/loading.service';
import { AuthService } from '../../../../core/services/auth.service';
import { ProductsManagement } from '../../services/products-management';
import { ProductModel } from '../../models/product.model';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-dashboard-products-page',
  imports: [TableModule, CommonModule, ButtonModule, FormsModule, InputTextModule, InputGroupModule, InputIconModule, IconFieldModule, RouterLink],
  templateUrl: './dashboard-products-page.html',
  styleUrl: './dashboard-products-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardProductsPage { 
  products = signal<ProductModel.Product[]>([]);

  //categories = signal<CategoryModel.Category[]>([]);

  search = signal('');

  ref: DynamicDialogRef | null = null;

  filteredProducts = computed(() => {

    const term = this.search().toLowerCase().trim();

    if(!term) return this.products();

    return this.products().filter(p => 
      p.id.toString().includes(term) ||
      p.title.toLowerCase().includes(term) ||
      p.category.toLowerCase().includes(term)
    );

  });

  constructor(
    private productsService:ProductsManagement,
    private loadingService:LoadingService,
    //private dialogService: DialogService,
    private userService: AuthService
  ){

  }

  ngOnInit(){
    this.getData()
  }

  getData(){
    this.loadingService.show();

    this.productsService.getListProducts().then((data)=>{
      this.products.set(data as ProductModel.Product[]);
      this.loadingService.hide();
    })
  }
}
