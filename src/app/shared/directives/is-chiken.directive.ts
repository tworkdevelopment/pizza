import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[isChicken]'
})
export class IsChikenDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef<any>, //соДержит нашего template (внутри ngIf)
    private viewContainer: ViewContainerRef //ссылается на весь ngIf
  ) {
  }

  @Input()
  isChicken: string = '';

  ngOnInit() {
    if (this.isChicken.toLowerCase().includes('кур')) {
      this.viewContainer.createEmbeddedView(this.templateRef)
    } else {
      this.viewContainer.clear();
    }

  }

  // set isChicken(description: string) {
  //   if (description.toLowerCase().includes('кур')) {
  //     this.viewContainer.createEmbeddedView(this.templateRef)
  //   } else {
  //     this.viewContainer.clear();
  //   }
  // }


}
