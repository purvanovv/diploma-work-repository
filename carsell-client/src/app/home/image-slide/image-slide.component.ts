import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slide',
  templateUrl: './image-slide.component.html',
  styleUrls: ['./image-slide.component.scss']
})
export class ImageSlideComponent implements OnInit {
  public ImageData: string[] = [
    'https://bringatrailer.com/wp-content/uploads/2019/02/2017_bmw_m2_1560182860d93c1c474674751PCLW2528.jpg?fit=940%2C602',
    'https://s3-prod-europe.autonews.com/s3fs-public/Ferrari%20812%20GTS_web.jpg'];

startIndex = 0;    
constructor() { }

ngOnInit(): void {
  this.Repeat();
}

Repeat() {
  setTimeout(() => {
    this.__FunctionSlide();
    this.Repeat();
  }, 10000);
}

__FunctionSlide() {
  const slides = Array.from(document.getElementsByClassName('mall-show-slide'));
  if (slides === []) {
    this.Repeat();
  }
  for (const x of slides) {
    const y = x as HTMLElement;
    y.style.display = 'none';
  }
  if (this.startIndex > slides.length - 1) {
    this.startIndex = 0;
    const slide = slides[this.startIndex] as HTMLElement;
    slide.style.display = 'block';
    this.startIndex++;
  } else {

    const slide = slides[this.startIndex] as HTMLElement;
    slide.style.display = 'block';
    this.startIndex++;
  }
}

}
