import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveInfoDataComponent } from './active-info-data.component';

describe('ActiveInfoDataComponent', () => {
  let component: ActiveInfoDataComponent;
  let fixture: ComponentFixture<ActiveInfoDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveInfoDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActiveInfoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
