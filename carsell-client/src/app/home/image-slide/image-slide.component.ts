import { Component, OnInit } from '@angular/core';
import { AnnouncementSlide, AnnouncementSlideModel } from '@app/announcement/models';

@Component({
  selector: 'app-image-slide',
  templateUrl: './image-slide.component.html',
  styleUrls: ['./image-slide.component.scss']
})
export class ImageSlideComponent implements OnInit {
  public ImageData: string[] = [
    '/assets/slide/audiA6.jpg',
    '/assets/slide/subaruSTI.jpg',
    '/assets/slide/porsche911.jpg'];

  public slideData: AnnouncementSlide[] = [];
  public currentSlide: AnnouncementSlide | undefined = undefined;

  startIndex = 0;
  constructor() { }

  ngOnInit(): void {
    this.initSlideData();
    this.repeat();
  }

  initSlideData() {
    this.slideData = [
      new AnnouncementSlideModel(1, 23000, 'лв.', 120000, true, 'Impreza WRX STI', 'Subaru', '/assets/slide/subaruSTI.jpg'),
      new AnnouncementSlideModel(2, 33000, 'лв.', 20000, false, 'A6', 'Audi', '/assets/slide/audiA6.jpg'),
      new AnnouncementSlideModel(3, 53000, 'лв.', 125000, false, '911', 'Porsche', '/assets/slide/porsche911.jpg'),
    ]
    // this.currentSlide = this.slideData[0];
  }
  repeat() {
    setTimeout(() => {
      this.slide();
      this.repeat();
    }, 10000);
  }

  slide() {
    if (this.slideData === []) {
      this.repeat();
    }
    for (const slide of this.slideData) {
      slide.isSelected = false;
    }
    if (this.startIndex > this.slideData.length - 1) {
      this.startIndex = 0;
    }
    this.slideData[this.startIndex].isSelected = true;
    this.startIndex++;
  }

  getDisplayStyle(isSelected: boolean) {
    if (isSelected) {
      return 'block';
    }
    return 'none'
  }


  // Repeat() {
  //   setTimeout(() => {
  //     this.__FunctionSlide();
  //     this.Repeat();
  //   }, 30000);
  // }

  // __FunctionSlide() {
  //   const slides = Array.from(document.getElementsByClassName('mall-show-slide'));
  //   if (slides === []) {
  //     this.Repeat();
  //   }
  //   for (const x of slides) {
  //     const y = x as HTMLElement;
  //     y.style.display = 'none';
  //   }
  //   if (this.startIndex > slides.length - 1) {
  //     this.startIndex = 0;
  //   }
  //   const slide = slides[this.startIndex] as HTMLElement;
  //   slide.style.display = 'block';
  //   this.startIndex++;

  // }

}
