import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavComponent } from './nav.component';
import { TranslationService } from '../_services/translation/translationService.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

/**
 * Tests list:
 * 1. Created.
 * 2. Switch language to English.
 * 3. Switch language to Hebrew.
 * 4. Render language options correctly in Hebrew.
 * 5. Render language options correctly in Engish.
 * 6. Render user options correctly in Hebrew.
 * 7. Render user options correctly in English.
 */

describe('NavComponent', () => {
  let component: NavComponent;
  let fixture: ComponentFixture<NavComponent>;
  let translationService: TranslationService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        NavComponent,
        BsDropdownModule.forRoot(),
        TranslateModule.forRoot()
      ],
      providers: [TranslateService, TranslationService, { provide: ActivatedRoute, useValue: { params: of({}) } }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavComponent);
    component = fixture.componentInstance;
    translationService = TestBed.inject(TranslationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Switch language to English', () => {
    component.switchLanguage('en');
    fixture.detectChanges();

    expect(component.currentLanguage).toBe('en');
    expect(component.textDirection).toBe('ltr');
  });

  it('Switch language to Hebrew', () => {
    component.switchLanguage('he');
    fixture.detectChanges();

    expect(component.currentLanguage).toBe('he');
    expect(component.textDirection).toBe('rtl');
  });

  it('Render language options correctly in Hebrew.', async () => {
    const languageDropdown = fixture.debugElement.queryAll(By.css('.nav-item.dropdown'))[0];
    languageDropdown.query(By.css('.nav-link')).triggerEventHandler('click', null);
    fixture.detectChanges();
    
    await fixture.whenStable();
    fixture.detectChanges();
  
    const dropdownMenu = languageDropdown.query(By.css('.dropdown-menu'));
    expect(dropdownMenu).toBeTruthy('Dropdown menu should be rendered');
  
    if (dropdownMenu) 
    {
      const dropdownItems = dropdownMenu.queryAll(By.css('.dropdown-item'));
      expect(dropdownItems.length).toEqual(2, 'Dropdown menu should contain 2 items');
    }
  });

  it('Render language options correctly in English.', async () => {
    component.switchLanguage('en');
    fixture.detectChanges();

    const languageDropdown = fixture.debugElement.queryAll(By.css('.nav-item.dropdown'))[0];
    languageDropdown.query(By.css('.nav-link')).triggerEventHandler('click', null);
    fixture.detectChanges();

    await fixture.whenStable();
    fixture.detectChanges();

    const dropdownMenu = languageDropdown.query(By.css('.dropdown-menu'));
    expect(dropdownMenu).toBeTruthy('Dropdown menu should be rendered');
    
    if (dropdownMenu) 
    {
      const dropdownItems = dropdownMenu.queryAll(By.css('.dropdown-item'));
      expect(dropdownItems.length).toEqual(2, 'Dropdown menu should contain 2 items');
    }

  });

  it('Render user options correctly in Hebrew.', async () => {
    const languageDropdown = fixture.debugElement.queryAll(By.css('.nav-item.dropdown'))[1];
    languageDropdown.query(By.css('.nav-link')).triggerEventHandler('click', null);
    await fixture.whenStable();
    fixture.detectChanges();
  
  
    const dropdownMenu = languageDropdown.query(By.css('.dropdown-menu'));
    expect(dropdownMenu).toBeTruthy('Dropdown menu should be rendered');
  
    if (dropdownMenu) 
    {
      const dropdownItems = dropdownMenu.queryAll(By.css('.dropdown-item'));
      expect(dropdownItems.length).toEqual(1, 'Dropdown menu should contain 2 items');
    }
  });

  it('Render language options correctly in English.', async () => {
    component.switchLanguage('en');
    fixture.detectChanges();

    const languageDropdown = fixture.debugElement.queryAll(By.css('.nav-item.dropdown'))[1];
    languageDropdown.query(By.css('.nav-link')).triggerEventHandler('click', null);
    await fixture.whenStable();
    fixture.detectChanges();

    const dropdownMenu = languageDropdown.query(By.css('.dropdown-menu'));
    expect(dropdownMenu).toBeTruthy('Dropdown menu should be rendered');
    
    if (dropdownMenu) 
    {
      const dropdownItems = dropdownMenu.queryAll(By.css('.dropdown-item'));
      expect(dropdownItems.length).toEqual(1, 'Dropdown menu should contain 2 items');
    }
  });
});
