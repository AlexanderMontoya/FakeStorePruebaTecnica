import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsManagement {

  url: string;

  constructor(private http: HttpClient, @Inject('BASE_API_URL') baseUrl: string) {
    this.url = baseUrl + 'products';
  }

  async getListProducts(): Promise<ProductModel.Product[] | undefined>{
    const urlEndPoint = `${this.url}`;

    try {

      const res = await this.http.get<ProductModel.Product[] | undefined>(`${urlEndPoint}`).toPromise();

      return res;

    } catch (error) {
      console.error(error);
      return undefined
    }
  }

  async getProduct(id:number): Promise<ProductModel.Product | undefined>{
    const urlEndPoint = `${this.url}/${id}`;

    try {

      const res = await this.http.get<ProductModel.Product | undefined>(`${urlEndPoint}`).toPromise();

      return res;

    } catch (error) {
      console.error(error);
      return undefined
    }
  }
}
