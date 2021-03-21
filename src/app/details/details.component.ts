import { Component, Input, OnInit } from '@angular/core';
import { ApiResponse } from '../models/apiResponse.model';
import { Doc } from '../models/doc.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  @Input()
  card: any

  ngOnInit(): void {
  }

}
