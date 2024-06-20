import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatTypeaheadComponent } from './ngx-mat-typeahead.component';

describe('NgxMatTypeaheadComponent', () => {
  let component: NgxMatTypeaheadComponent;
  let fixture: ComponentFixture<NgxMatTypeaheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxMatTypeaheadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxMatTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
