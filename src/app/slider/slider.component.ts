import { Component, OnInit } from '@angular/core';
import { SliderService } from '../../services/slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "arrow": true,
    "dots":false,
    "infinite": true
  };

  // addSlide() {this.slides.push({img: "http://placehold.it/350x150/777777"})}
  // removeSlide() {this.slides.length = this.slides.length - 1; }
  // slickInit(e) {
  // breakpoint(e) { }
  // afterChange(e) {}
  // beforeChange(e) { }

  public slides: any = [];
  constructor(private _sliderService: SliderService) { }
  ngOnInit() {
    this._sliderService.getImages().subscribe(data => {
      this.slides = data;
      });
  }

}
