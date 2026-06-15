import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeavyContentComponent } from './heavy-content.component';

describe('HeavyContentComponent', () => {
  let component: HeavyContentComponent;
  let fixture: ComponentFixture<HeavyContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeavyContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeavyContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
