import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {ProductService} from "../../../shared/services/product.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {tap} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productServices: ProductService,
              // private cartService: CartService,
              private router: Router,
              private http: HttpClient
  ) {
  }

  products: ProductType[] = [];
  loading: boolean = false;

  ngOnInit(): void {
    // this.products = this.productServices.getProducts();
    // this.http.get<{ data: ProductType[] }>('https://testologia,site/pizzas?extraField=1')

    this.loading = true;
    this.productServices.getProducts()
      .pipe(
        tap(() => {
          this.loading = false;
        })
      )
      .subscribe(
        {
          next: (data) => {
            this.products = data;
          },
          error: (error) => {
            // console.log(error);
            this.router.navigate(['/']);
          }
        }
      )
  }

  // public products: ProductType[] = [];

  // addToCart(title: string): void {
  //   // this.scrollTo(target);
  //   // this.formValues.productTitle = title;
  //   // this.cartService.count++;
  //   this.cartService.product = title;
  //   this.router.navigate(['/order'], {queryParams: {product: title}});
  //
  // }

}
