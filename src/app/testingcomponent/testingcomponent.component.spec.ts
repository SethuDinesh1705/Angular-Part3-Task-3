import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingcomponentComponent } from './testingcomponent.component';

describe('TestingcomponentComponent', () => {
  let component: TestingcomponentComponent;
  let fixture: ComponentFixture<TestingcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestingcomponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestingcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Testing Username', () => {
    expect(component.Username).toBe('Dineshkumar');
  });
  it('Testing function', () => {
    expect(component.needusername()).toBe('Dineshkumar');
  });
  it('Testing Html Element', () => {
    const data = fixture.nativeElement;
    expect(data.querySelector('.total').textContent).toContain(
      'Total Users are one'
    );
  });
});
