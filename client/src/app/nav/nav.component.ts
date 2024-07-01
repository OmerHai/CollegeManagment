import { Component, inject } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../_services/translation/translationService.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [BsDropdownModule, CommonModule, TranslateModule, RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  public translate = inject(TranslationService);
  currentLanguage: string;
  textDirection: 'ltr' | 'rtl';

  constructor() {
    this.currentLanguage = this.translate.getCurrentLanguage();
    this.textDirection = this.translate.getCurrentDirection();
  }
  
  switchLanguage(language: string) {
    this.translate.switchLanguage(language);
    this.currentLanguage = language;
    this.textDirection = this.translate.getCurrentDirection();
  }
}
