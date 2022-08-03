import { Component, OnInit } from '@angular/core';
import { faCloudShowersHeavy } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faSun= faSun;
  faCloudShowersHeavy = faCloudShowersHeavy;
  faGear = faGear;
  constructor() {}

  ngOnInit(): void {
  }

}
