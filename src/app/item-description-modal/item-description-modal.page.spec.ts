import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemDescriptionModalPage } from './item-description-modal.page';

describe('ItemDescriptionModalPage', () => {
  let component: ItemDescriptionModalPage;
  let fixture: ComponentFixture<ItemDescriptionModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDescriptionModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
