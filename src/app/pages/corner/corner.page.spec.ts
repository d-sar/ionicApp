import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CornerPage } from './corner.page';

describe('CornerPage', () => {
  let component: CornerPage;
  let fixture: ComponentFixture<CornerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CornerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
