import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const loadDocument: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public _http: HttpClient;
  public _baseUrl: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._http = http;
    this._baseUrl = baseUrl;
  }

  async onClickLoadDocument(documentName: string) {
    // get a document from the Web API endpoint 'LoadDocument'
    this._http.get<any>(this._baseUrl + 'api/textcontrol/loaddocument?documentName=' + documentName).subscribe(result => {
      loadDocument(result);
    }, error => console.error(error));
  }
}
