import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TestdirectiveDirective } from './testdirective.directive';

describe('test on testdirective', () => {
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let titleE1: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestdirectiveDirective, AppComponent],
    });
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    titleE1 = fixture.debugElement.query(By.css('.highlight'));
  });
  it('OnHover Background must be Yellow', () => {
    titleE1.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(titleE1.nativeElement.style.backgroundColor).toBe('yellow');
  });
  it('OnHoverout Background must be normal', () => {
    titleE1.triggerEventHandler('mouseout', null);
    fixture.detectChanges();
    expect(titleE1.nativeElement.style.backgroundColor).toBe('inherit');
  });
  it('OnHover font color must be green', () => {
    titleE1.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(titleE1.nativeElement.style.color).toBe('green');
  });
  it('OnHoverout font color  must be normal', () => {
    titleE1.triggerEventHandler('mouseout', null);
    fixture.detectChanges();
    expect(titleE1.nativeElement.style.color).toBe('inherit');
  });
});
