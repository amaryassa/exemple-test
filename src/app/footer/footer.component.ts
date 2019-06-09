import { FooterService } from './../../services/footer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  dateNow: Date = new Date();



  public footer: any = [];
  constructor(private _footerService: FooterService) { }
  ngOnInit() {
    this._footerService.getListFooter().subscribe(data => {
      // console.log('footer_liste ', data);
      this.footer = data;
      });
  }

}
