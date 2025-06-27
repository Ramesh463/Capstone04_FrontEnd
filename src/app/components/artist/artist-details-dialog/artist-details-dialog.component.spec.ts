import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistDetailsDialogComponent } from './artist-details-dialog.component';

describe('ArtistDetailsDialogComponent', () => {
  let component: ArtistDetailsDialogComponent;
  let fixture: ComponentFixture<ArtistDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistDetailsDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
