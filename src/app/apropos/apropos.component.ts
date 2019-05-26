import { Component, OnInit } from '@angular/core';
import { AproposService } from '../../services/apropos.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.scss']
})
export class AproposComponent implements OnInit {
  // public defaultValue = {
  //   "title": "titre",
  //    "description": `il faut écrire un descriptif de votre site/ entreprise `,
  //   "button": "nom bouton",
  //   "image1" :"https://www.decofinder.com/i/une/Promotion/28693956.jpg",
  //   "image2" :"https://www.decofinder.com/i/une/CoupDeCoeur/28693955.jpg"
  // };

  public about: any = [];
  constructor(private _proposService: AproposService) { }
  ngOnInit() {
    this._proposService.getApropos().subscribe(data => {
      this.about = data;
      console.log(this.about)
      });
  }

}
