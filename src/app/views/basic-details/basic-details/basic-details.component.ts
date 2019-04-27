import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss']
})
export class BasicDetailsComponent implements OnInit {
  schoolName = '';
  regexp = new RegExp(/^[a-zA-Z0-9_]+$/);

  constructor() {
  }

  ngOnInit() {
  }

}
