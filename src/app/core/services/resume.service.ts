import { Injectable, signal } from '@angular/core';
import { ResumeData } from '../models/resume.model';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  resume = signal<ResumeData | null>(null);
}
