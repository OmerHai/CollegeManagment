import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

/**
 * Tests list:
 * 1. Created.
 * 2. Render correct classes.
 * 3. Render correct label.
 * 4. Render correct icon.
 * 5. Emit click event.
 */

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;
  let buttonElement: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    buttonElement = fixture.nativeElement.querySelector('button');
    fixture.detectChanges();
  });

  it('Created', () => {
    expect(component).toBeTruthy();
  });

  it('Render correct classes', () => {
    component.buttonClassType = 'btn-secondry';
    component.buttonClassSize = 'btn-lg';

    fixture.detectChanges();

    expect(buttonElement.classList).toContain('btn');
    expect(buttonElement.classList).toContain('btn-secondry');
    expect(buttonElement.classList).toContain('btn-lg');
  });

  it('Render correct label', () => {
    component.label = 'Add user';
    
    fixture.detectChanges();

    expect(buttonElement.textContent.trim()).toBe('Add user');
  });

  it('Render correct icon', () => {
    component.icon = 'fa-user-plus';

    fixture.detectChanges();

    const iconElement = fixture.nativeElement.querySelector('i');

    expect(iconElement).toBeTruthy();
    expect(iconElement.classList).toContain('fa');
    expect(iconElement.classList).toContain('fa-user-plus');
    expect(iconElement.classList).toContain('me-2');
  });

  it('Emit click event', () => {
    spyOn(component.clicked, 'emit');
    buttonElement.click();

    expect(component.clicked.emit).toHaveBeenCalled();
  });
  
});
