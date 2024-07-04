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

  public getTranslateInstance() {
    return this.translate;
  }

  public switchLanguage(language: string) {
    this.translate.use(language);
  }

  public setCurrentDirectionByLanguage(currentLanguage: string): 'ltr' | 'rtl' {
    return currentLanguage == 'he' ? 'rtl' : 'ltr';
  }
}
