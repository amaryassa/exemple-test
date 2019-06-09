import { RsService } from './../../services/rs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reseau-social',
  templateUrl: './reseau-social.component.html',
  styleUrls: ['./reseau-social.component.scss']
})
export class ReseauSocialComponent implements OnInit {
  rs_big_image = '/assets/images/rs/rs_big_img.jpg';
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

  public images: any = [];
  constructor(private _rsService: RsService) { }
  ngOnInit() {
    this._rsService.getImages().subscribe(data => {
      this.images = data;
      });
  }

}
