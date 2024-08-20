import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResumeApiResponse, ResumeData } from '../models/resume.model';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  http = inject(HttpClient);
  // baseUrl = 'https://ehsan-resume.liara.run/api';
  baseUrl = 'http://localhost:1337/api';
  resume = signal<ResumeData | null>(null);
  constructor() {}

  getResume(): Observable<ResumeApiResponse> {
    return this.http.get<ResumeApiResponse>(
      this.baseUrl +
        '/resume?populate[aboutMe][populate]=*&populate[projects][populate]=*&populate[skills][populate]=*&populate[experience][populate]=*&populate[socialMedia][populate]=*'
    );
  }
}
