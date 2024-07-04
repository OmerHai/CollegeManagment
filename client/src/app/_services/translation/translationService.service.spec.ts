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
  let translate: TranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot()
      ],
      providers:[TranslateService]
    });

    service = TestBed.inject(TranslationService);
    translate =  service.getTranslateInstance();
  });

  it('Created', () => {
    expect(service).toBeTruthy();
  });

  it('Default language is Hebrew', () => {
    expect(translate.defaultLang).toBe('he');
  });

  it('Switch language to English', () => {
    service.switchLanguage('en');
    expect(translate.currentLang).toBe('en');
  });

  it('Switch language to Hebrew', () => {
    service.switchLanguage('he');
    expect(translate.currentLang).toBe('he');
  });

  it('Return ltr direction for English language', () => {
    service.switchLanguage('en');
    const direction = service.setCurrentDirectionByLanguage('en');
    expect(direction).toBe('ltr');
  });

  it('Return rtl direction for Hebrew language', () => {
    service.switchLanguage('he');
    const direction = service.setCurrentDirectionByLanguage('he');
    expect(direction).toBe('rtl');
  });
});
