import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.serivce';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private searchService: SearchService) { }

  private results = []

  ngOnInit(): void {

  }

}
