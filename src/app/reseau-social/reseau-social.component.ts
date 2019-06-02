import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reseau-social',
  templateUrl: './reseau-social.component.html',
  styleUrls: ['./reseau-social.component.scss']
})
export class ReseauSocialComponent implements OnInit {
  slides = [
    {img: 'http://www.lastmiracle.com/wp-content/uploads/10/The-engineering-in-Nature-200x200.jpg'},
    {img: 'https://i.pinimg.com/originals/35/a4/43/35a443c9ff20bc7b2f28172a91c31ce2.jpg'},
    {img: 'https://coachcampus.com/wp-content/uploads/2014/11/Nesrin_Everett_research_paper_1-200x200.jpg'},
    {img: 'https://cn.opendesktop.org/cache/200x200/img/8/8/c/5/7930d0915370b34ebd4d53dacd9a7af18746.jpg'},
    {img: 'https://www.dpaw.wa.gov.au/cache/preview/ee7e0093571ad6a0e5661876ea1f06c4.jpg'},
    {img: 'https://cn.opendesktop.org/cache/200x200/img//hive/content-pre1/136633-1.jpg'},
    {img: 'https://picturecorrect-wpengine.netdna-ssl.com/wp-content/uploads/2011/11/photograph-nature5-200x200.jpg'},
    {img: 'http://www.schiffnaturepreserve.org/images/monarch.jpg'},
    {img: 'https://cn.opendesktop.org/cache/200x200/img/8/8/c/5/7930d0915370b34ebd4d53dacd9a7af18746.jpg'}
  ]
  slideConfig = {
    'slidesToShow': 7,
    'slidesToScroll': 1,
    'arrow': false,
    'dots': false,
    'infinite': true,
    'centerPadding': '6rem',
    'centerMode': true,
    'responsive': [
      {
        'breakpoint': 1426,
        'settings': {
          'slidesToShow': 6,
        }
      },
      {
        'breakpoint': 926,
        'settings': {
          'slidesToShow': 5
        }
      },
      {
        'breakpoint': 776,
        'settings': {
          'slidesToShow': 4
        }
      },
      {
        'breakpoint': 576,
        'settings': {
          'slidesToShow': 3,
          'centerPadding': '4rem',
        }
      },
      {
        'breakpoint': 476,
        'settings': {
          'slidesToShow': 2,
          'centerPadding': '3rem',
        }
      }
    ]

  };
  constructor() { }

  ngOnInit() {
  }

}
