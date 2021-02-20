import { Component, OnInit } from '@angular/core';
import { AnnouncementSlide, AnnouncementSlideModel } from '@app/announcement/models';

@Component({
  selector: 'app-image-slide',
  templateUrl: './image-slide.component.html',
  styleUrls: ['./image-slide.component.scss'],
})
export class ImageSlideComponent implements OnInit {
  public ImageData: string[] = [
    '/assets/slide/audiA6.jpg',
    '/assets/slide/subaruSTI.jpg',
    '/assets/slide/porsche911.jpg',
  ];

  public slideData: AnnouncementSlide[] = [];

  startIndex = 0;
  constructor() {}

  ngOnInit(): void {
    this.initSlideData();
    this.repeat();
  }

  initSlideData() {
    this.slideData = [
      new AnnouncementSlideModel(49900, 'лв.', 22000, true, 'Impreza WRX STI', 'Subaru', '/assets/slide/subaruSTI.jpg'),
      new AnnouncementSlideModel(78800, 'лв.', 36000, false, 'A6 Sedan S line', 'Audi', '/assets/slide/audiA6.jpg'),
      new AnnouncementSlideModel(380000, 'лв.', 1300, false, '911 Turbo S', 'Porsche', '/assets/slide/porsche911.jpg'),
    ];
  }
  repeat() {
    setTimeout(() => {
      this.slide();
      this.repeat();
    }, 5000);
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
    return 'none';
  }

  select(index: number) {
    for (const slide of this.slideData) {
      slide.isSelected = false;
    }
    this.startIndex = index;
    this.slideData[this.startIndex].isSelected = true;
  }
}
