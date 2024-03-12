import {Component} from '@angular/core';
// import {ProductType} from "./types/product.type";
// import {ProductService} from "./services/product.service";
// import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [ProductService]
})
export class AppComponent{
  // public products: ProductType[] = [];
  // //   {
  // //     image: 'Layer2.png',
  // //     title: 'Мясная Делюкс',
  // //     description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
  // //     dateTime: '2022-12-10 15:00:00'
  // //   },
  // //   {
  // //     image: '',
  // //     title: 'Морская Премиум',
  // //     description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
  // //     dateTime: '2022-12-31 18:00:00'
  // //   },
  // //   {
  // //     image: 'Layer4.png',
  // //     title: 'Бекон и Сосиски',
  // //     description: 'Бекон, сыр, сосиски, ананас, томатная паста',
  // //     dateTime: '2022-12-01 15:00:00'
  // //   },
  // //   {
  // //     image: 'Layer5.png',
  // //     title: 'Куриная Делюкс',
  // //     description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста'.toString(),
  // //     dateTime: '2022-12-31 15:00:00'
  // //   },
  // //   {
  // //     image: 'Layer6.png',
  // //     title: 'Барбекю Премиум',
  // //     description: 'Свинина BBQ, соус Барбeкю, сыр, курица, соус для пиццы, соус чили',
  // //     dateTime: '2022-12-31 15:00:00'
  // //   },
  // //   {
  // //     image: 'Layer7.png',
  // //     title: 'Пепперони Дабл',
  // //     description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
  // //     dateTime: '2022-12-31 15:00:00'
  // //   },
  // //   {
  // //     image: 'Layer8.png',
  // //     title: 'Куриное трио',
  // //     description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
  // //     dateTime: '2022-12-31 15:00:00'
  // //   },
  // //   {
  // //     image: 'Layer9.png',
  // //     title: 'Сырная',
  // //     description: 'Сыр Джугас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
  // //     dateTime: '2022-12-31 15:00:00'
  // //   },
  // // ];
  //
  //
  // public formValues = {
  //   productTitle: '',
  //   address: '',
  //   phone: '',
  // }
  //
  // lateDate: Promise<string> | null = null;
  //
  // constructor(private productServices: ProductService,
  //             public cartService: CartService) {
  //
  // }
  //
  // ngOnInit() {
  //   this.lateDate = new Promise<string>(function (resolve) {
  //     setTimeout(() => {
  //       resolve('Hello');
  //     }, 3000);
  //   });
  //
  //   this.products = this.productServices.getProducts();
  //
  // }
  //
  //
  // scrollTo(target: HTMLElement): void {
  //   target.scrollIntoView({behavior: "smooth"});
  // }
  //
  //
  // addToCart(title: string, target: HTMLElement): void {
  //   this.scrollTo(target);
  //   this.formValues.productTitle = title;
  //   this.cartService.count++;
  // }
  //
  // public createOrder() {
  //   if (!this.formValues.productTitle) {
  //     alert('Заполните пиццу');
  //     return;
  //   }
  //   if (!this.formValues.address) {
  //     alert('Заполните адрес');
  //     return;
  //   }
  //   if (!this.formValues.phone) {
  //     alert('Заполните телефон');
  //     return;
  //   }
  //
  //   //ajax
  //   alert('Спасибо за заказ');
  //
  //   this.formValues = {
  //     productTitle: '',
  //     address: '',
  //     phone: '',
  //   }
  //
  // }


}
