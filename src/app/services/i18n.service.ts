import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  current = new BehaviorSubject<string>('mr');
  data: any = {};

  constructor(private http: HttpClient) {
    this.setLang('mr');
  }

  setLang(lang: string) {
    this.http.get(`/assets/i18n/${lang}.json`).subscribe(res => {
      this.data = res;
      this.current.next(lang);
    });
  }

  t(key: string): string {
    return this.data?.[key] ?? key;
  }
}
