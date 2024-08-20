import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResumeApiResponse, ResumeData } from '../models/resume.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);
  baseUrl = environment.apiBaseUrl + '/api';
  resume = signal<ResumeData | null>(null);
  constructor() {}

  getResume(): Observable<ResumeApiResponse> {
    return this.http.get<ResumeApiResponse>(
      this.baseUrl +
        '/resume?populate[aboutMe][populate]=*&populate[projects][populate]=*&populate[skills][populate]=*&populate[experience][populate]=*&populate[socialMedia][populate]=*'
    );
  }
}
