import { Component, OnInit } from '@angular/core';
import { personinfo } from '../shared/models/personinfo.model'
import { PersonInfoService } from '../shared/services/personinfo-service.services';

@Component({
  selector: 'app-personinfo',
  templateUrl: './personinfo.component.html',
  styleUrls: ['./personinfo.component.css']
})
export class PersoninfoComponent implements OnInit {
  localPersonInfo: personinfo[];

  constructor(private myPersonInfoService: PersonInfoService) {
    this.localPersonInfo = this.myPersonInfoService.persons;
  }

  ngOnInit() {
  }
}


