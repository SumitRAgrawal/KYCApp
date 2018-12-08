import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisionService {
  endpoint =
    'https://westcentralus.api.cognitive.microsoft.com/vision/v2.0/ocr';
  headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set(
      'Ocp-Apim-Subscription-Key',
      ''
    );
  }

  submitForProcessing(data: string): Observable<any> {
    console.log(data);

    return this.http.post(
      this.endpoint,
      { url: data },
      { headers: this.headers }
    );
  }
}
