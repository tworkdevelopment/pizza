import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ProductService} from "../../../shared/services/product.service";
import {ProductType} from "../../../../types/product.type";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: ProductType;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService, private router: Router) {
    this.product = {
      id: 0,
      image: '',
      title: '',
      description: '',
      dateTime: ''
    }

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      if (params['id']) {

        this.productService.getProduct(+params['id'])
        .subscribe({
          next: (data) => {
            this.product = data;
          },
          error: (error) => {
            this.router.navigate(['/']);
          }
        })
        // if (product) {
        //   this.product = product;
        // } else {
        //   this.router.navigate(['/']);
        // }
        // const product = this.productService.getProduct(+params['id']);
        // if (product) {
        //   this.product = product;
        // } else {
        //   this.router.navigate(['/']);
        // }

              }
    })

  }


}
