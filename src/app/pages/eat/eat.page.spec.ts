import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EatPage } from './eat.page';

describe('EatPage', () => {
  let component: EatPage;
  let fixture: ComponentFixture<EatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
