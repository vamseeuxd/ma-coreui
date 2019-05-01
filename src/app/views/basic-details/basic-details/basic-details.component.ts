import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss']
})
export class BasicDetailsComponent implements OnInit {
  basicInformation = {
    schoolName: '',
    schoolMoto: '',
    softwareStartingDate: null,
    affiliatedBy: '',
    registrationNo: '',
    affiliationNo: '',
    dateOfEstablishment: '',
    board: '',
  };

  constructor() {
  }

  ngOnInit() {
  }

}
