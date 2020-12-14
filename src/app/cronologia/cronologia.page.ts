import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Partido} from '../core/model/Partido';
@Component({
  selector: 'app-cronologia',
  templateUrl: './cronologia.page.html',
  styleUrls: ['./cronologia.page.scss'],
})
export class CronologiaPage implements OnInit {
  partido:Partido;
  constructor(public route: Router, private rutaActivada: ActivatedRoute) {
    this.rutaActivada.queryParams.subscribe((params) => {
      this.partido = this.route.getCurrentNavigation().extras.state.partido;
    });

  }
  ngOnInit() {
  }

}
