import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ProductType} from "../../../../types/product.type";
import {ProductService} from "../../../shared/services/product.service";
import {CartService} from "../../../shared/services/cart.service";
import {from, map, Observable, Subject, Subscription} from "rxjs";
import {NgModel} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PopupComponent} from "../../../shared/components/popup/popup.component";
import {environment} from "../../../../environments/environment";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {

  // public products: ProductType[] = [];
  //   {
  //     image: 'Layer2.png',
  //     title: 'Мясная Делюкс',
  //     description: 'Пепперони, лук, бекон, томатная паста, колбаски, перец, грибы, соус чили, ананасы',
  //     dateTime: '2022-12-10 15:00:00'
  //   },
  //   {
  //     image: '',
  //     title: 'Морская Премиум',
  //     description: 'Перец, сыр, креветки, кальмары, мидии, лосось',
  //     dateTime: '2022-12-31 18:00:00'
  //   },
  //   {
  //     image: 'Layer4.png',
  //     title: 'Бекон и Сосиски',
  //     description: 'Бекон, сыр, сосиски, ананас, томатная паста',
  //     dateTime: '2022-12-01 15:00:00'
  //   },
  //   {
  //     image: 'Layer5.png',
  //     title: 'Куриная Делюкс',
  //     description: 'Курица, ананас, сыр Пепперони, соус для пиццы, томатная паста'.toString(),
  //     dateTime: '2022-12-31 15:00:00'
  //   },
  //   {
  //     image: 'Layer6.png',
  //     title: 'Барбекю Премиум',
  //     description: 'Свинина BBQ, соус Барбeкю, сыр, курица, соус для пиццы, соус чили',
  //     dateTime: '2022-12-31 15:00:00'
  //   },
  //   {
  //     image: 'Layer7.png',
  //     title: 'Пепперони Дабл',
  //     description: 'Пепперони, сыр, колбаса 2 видов: обжаренная и вареная',
  //     dateTime: '2022-12-31 15:00:00'
  //   },
  //   {
  //     image: 'Layer8.png',
  //     title: 'Куриное трио',
  //     description: 'Жареная курица, Тушеная курица, Куриные наггетсы, перец, сыр, грибы, соус для пиццы',
  //     dateTime: '2022-12-31 15:00:00'
  //   },
  //   {
  //     image: 'Layer9.png',
  //     title: 'Сырная',
  //     description: 'Сыр Джугас, Сыр с плесенью, Сыр Моцарелла, Сыр секретный',
  //     dateTime: '2022-12-31 15:00:00'
  //   },
  // ];
  //
  // public formValues = {
  //   productTitle: '',
  //   address: '',
  //   phone: '',
  // }
  //
  // lateDate: Promise<string> | null = null;
  //
  // private observable: Observable<number>;
  private subject: Subject<number>;

  // private promise: Promise<string>;

  constructor(private productServices: ProductService,
              public cartService: CartService,
              private modalService: NgbModal) {

    this.subject = new Subject<number>();
    let count = 0;
    const interval = setInterval(() => {
      this.subject.next(count++);
    }, 1000);
    const timeout1 = setTimeout(() => {
      this.subject.complete()
    }, 4000);

    // this.observable = from([1,2,3,4,5])
    //
    // this.promise = new Promise<string>(resolve => {
    //   setTimeout(() => {
    //     resolve('hello');
    //   }, 2000)
    // })
    //
    // this.observable = new Observable((observer) => {
    //   let count = 0;
    //   const interval = setInterval(() => {
    //     observer.next(count++);
    //   }, 1000);
    //   const timeout1 = setTimeout(() => {
    //     observer.complete()
    //   }, 4000);
    //   const timeout2 = setTimeout(() => {
    //     observer.error('world')
    //   }, 5000);
    //
    //   return {
    //     unsubscribe() {
    //       clearInterval(interval);
    //       clearTimeout(timeout1);
    //       clearTimeout(timeout2);
    //     }
    //   }
    // })
  }

  private subscription: Subscription | null = null;

  // @ViewChild('popup')
  // popup!: TemplateRef<ElementRef>;

  ngOnInit() {

    console.log('environment.production')
    console.log(environment.production)

    // const myModalAlternative = new bootstrap.Modal('#myModal', {})
    // myModalAlternative.show();
    this.subscription = this.subject
      .subscribe(
        {
          next: (param: number) => {
            console.log('subscriber 1: ', param);
          },
          error: (error: string) => {
            console.log('ERROR!!!' + error);
          }
        }
      )

    // this.subscription = this.observable
    //   // .pipe(
    //   //   map((number) => {
    //   //     return number * 10;
    //   //   })
    //   // )
    //   .subscribe(
    //   {
    //     next: (param: number) => {
    //       console.log('subscriber 1: ', param);
    //     },
    //     error: (error: string) => {
    //       console.log('ERROR!!!' + error);
    //     }
    //   }
    // )
    //
    // this.promise.then((param:string) => {
    //   console.log(param);
    // })
    //
    // this.lateDate = new Promise<string>(function (resolve) {
    //   setTimeout(() => {
    //     resolve('Hello');
    //   }, 3000);
    // });
    //
    // this.products = this.productServices.getProducts();
  }

  test() {
    this.subject
      .pipe(
        map(number => {
          return 'Число: ' + number
        })
      )
      .subscribe((param: string) => {
        console.log('subscriber 2: ', param);
      })
  }

  //   this.observable
  //     .pipe(
  //       map(number => {
  //         return 'Число: ' + number
  //       })
  //     )
  //     .subscribe((param: string) => {
  //     console.log('subscriber 2: ', param);
  //   })
  // }

  @ViewChild(PopupComponent)
  private popupComponent!: PopupComponent;

  ngAfterViewInit() {
    // this.popupComponent.open();
    const modalRef = this.modalService.open(PopupComponent);
    modalRef.componentInstance.data = 'My component';

    // this.modalService.open(this.popup, {});
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

// scrollTo(target: HTMLElement): void {
//   target.scrollIntoView({behavior: "smooth"});
// }

// addToCart(title: string, target: HTMLElement): void {
//   this.scrollTo(target);
//   this.formValues.productTitle = title;
//   this.cartService.count++;
// }

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
