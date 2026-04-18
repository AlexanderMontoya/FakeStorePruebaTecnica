import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { TagModule } from 'primeng/tag';
import { ProductModel } from '../../models/product.model';
import { ProductsManagement } from '../../services/products-management';
import { LoadingService } from '../../../../shared/services/loading.service';
import { TitleCasePipe } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-dashboard-product-single-page',
  imports: [CardModule, TagModule, TitleCasePipe, SkeletonModule, ButtonModule],
  templateUrl: './dashboard-product-single-page.html',
  styleUrl: './dashboard-product-single-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardProductSinglePage { 

  product = signal<ProductModel.Product | null>(null);
  loaded = signal<boolean>(false);

  constructor(
    private route: ActivatedRoute, 
    private productsService:ProductsManagement,
    private loadingService:LoadingService,
    private router: Router
  ) {}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id_product'));
      
      this.loadingService.show()

      this.productsService.getProduct(id).then((data)=>{
        this.loadingService.hide();
        if(data?.id){
          this.product.set(data as ProductModel.Product);
        }else{
          this.router.navigate(['dashboard']);
        }
      })
    });
  }

  isLoaded(){
    this.loaded.set(true)
    /* setTimeout(()=>{
      this.loaded.set(true)
    },250) */
  }
}
