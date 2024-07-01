import { TestBed } from '@angular/core/testing';
import { TranslationService } from './translationService.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


/**
 * Tests list:
 * 1. Created.
 * 2. Default language is Hebrew.
 * 3. Switch language to English.
 * 4. Switch language to Hebrew.
 * 5. Return ltr direction for English language.
 * 6. Return rtl direction for Hebrew language.
 */
describe('TranslationService', () => {
  let service: TranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot()
      ],
      providers:[TranslateService]
    });
    service = TestBed.inject(TranslationService);
  });

  it('Created', () => {
    expect(service).toBeTruthy();
  });

  it('Default language is Hebrew', () => {
    const defaultLanguage = service.getCurrentLanguage();
    expect(defaultLanguage).toBe('he');
  });

  it('Switch language to English', () => {
    service.switchLanguage('en');
    const currentLanguage = service.getCurrentLanguage();
    expect(currentLanguage).toBe('en');
  });

  it('Switch language to Hebrew', () => {
    service.switchLanguage('he');
    const currentLanguage = service.getCurrentLanguage();
    expect(currentLanguage).toBe('he');
  });

  it('Return ltr direction for English language', () => {
    service.switchLanguage('en');
    const direction = service.getCurrentDirection();
    expect(direction).toBe('ltr');
  });

  it('Return rtl direction for Hebrew language', () => {
    service.switchLanguage('he');
    const direction = service.getCurrentDirection();
    expect(direction).toBe('rtl');
  });
});