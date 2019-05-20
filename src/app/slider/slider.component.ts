import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
 title = 'ngSlick';


  slides = [
    {
      text: 'Nouveau Texte Image',
      img: "https://freakyjolly.com/demo/jquery/PreloadJS/images/1.jpg"
    },
    {
      text: 'autre Texte Image',
      img: "https://freakyjolly.com/demo/jquery/PreloadJS/images/2.jpg"
    },
    {
      text: 'ajouter cette Image ',
      img: "https://freakyjolly.com/demo/jquery/PreloadJS/images/3.jpg"
    },
    {
      text: 'Montrer ce design',
      img: "https://freakyjolly.com/demo/jquery/PreloadJS/images/4.jpg"
    }
  ]

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "arrow": true,
    "dots":false,
    "infinite": true
  };

  // addSlide() {
  //   this.slides.push({img: "http://placehold.it/350x150/777777"})
  // }

  // removeSlide() {
  //   this.slides.length = this.slides.length - 1;
  // }

  // slickInit(e) {
  //   console.log('slick initialized');
  // }

  // breakpoint(e) {
  //   console.log('breakpoint');
  // }

  // afterChange(e) {
  //   console.log('afterChange');
  // }

  // beforeChange(e) {
  //   console.log('beforeChange');
  // }









  constructor() { }

  ngOnInit() {
  }

}



// ,
//     {

//       img: "https://freakyjolly.com/demo/jquery/PreloadJS/images/5.jpg"
//     },
//     {

//       img: "https://freakyjolly.com/demo/jquery/PreloadJS/images/7.jpg"
//     },
//     {

//       img: "https://freakyjolly.com/demo/jquery/PreloadJS/images/8.jpg"
//     },
//     {
//       img: "https://freakyjolly.com/demo/jquery/PreloadJS/images/9.jpg"
//     },
//     {
//       img: "https://freakyjolly.com/demo/jquery/PreloadJS/images/10.jpg"
//     }
