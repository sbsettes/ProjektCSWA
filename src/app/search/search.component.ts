import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/apiResponse.model';
import { ApiRequesterService } from '../services/apiRequester.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private apiRequester: ApiRequesterService,
    private fb: FormBuilder
  ) { }

  searchForm = this.fb.group({
    keyword: [""],
  }
  )

  results: ApiResponse[] = []

  ngOnInit(): void {
    this.apiRequester.search("search?q=Ottstedt%20am%20Berge&wt=json").subscribe(
      (res: HttpResponse<any[]>)=>{
        this.results = res["response"]["docs"]
        console.log("responses in componenent:" + JSON.stringify(res["response"]["docs"]))
      }
    )
    
  }

  search(): void{
    this.apiRequester.search("search?q=" + this.searchForm.get("keyword").value).subscribe(
      (res: HttpResponse<ApiResponse[]>) => {
        this.results = res.body
      }
    )
    console.log("responses in componenent:" + this.results)
  }

}
