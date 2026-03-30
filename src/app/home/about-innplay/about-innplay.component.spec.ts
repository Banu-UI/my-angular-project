import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInnplayComponent } from './about-innplay.component';

describe('AboutInnplayComponent', () => {
  let component: AboutInnplayComponent;
  let fixture: ComponentFixture<AboutInnplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutInnplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutInnplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
