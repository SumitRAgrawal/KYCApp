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
      '979d474e33424a6e83f410e2f72c3e81'
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
