import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackDetailsDialogComponent } from './track-details-dialog.component';

describe('TrackDetailsDialogComponent', () => {
  let component: TrackDetailsDialogComponent;
  let fixture: ComponentFixture<TrackDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackDetailsDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
