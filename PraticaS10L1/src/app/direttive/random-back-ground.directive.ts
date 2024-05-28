import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRandomBackGround]'
})
export class RandomBackGroundDirective {

  constructor(private ref:ElementRef) { }

  ngOnInit() {
    this.ref.nativeElement.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
  }

}
