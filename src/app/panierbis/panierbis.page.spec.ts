import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PanierbisPage } from './panierbis.page';

describe('PanierbisPage', () => {
  let component: PanierbisPage;
  let fixture: ComponentFixture<PanierbisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierbisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
