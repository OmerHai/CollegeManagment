import { Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private translate = inject(TranslateService);
  
  constructor() {
    this.initializeTranslation();
  }

  private initializeTranslation() {
    this.translate.addLangs(['en', 'he']);
    this.translate.setDefaultLang('he');
  }

  public switchLanguage(language: string) {
    this.translate.use(language);
  }

  public getCurrentLanguage(): string {
    return this.translate.currentLang || this.translate.defaultLang;
  }

  public getCurrentDirection(): 'ltr' | 'rtl' {
    const currentLanguage = this.getCurrentLanguage();
    return currentLanguage == 'he' ? 'rtl' : 'ltr';
  }
}
