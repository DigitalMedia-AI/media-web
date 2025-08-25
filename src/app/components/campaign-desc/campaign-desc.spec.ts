import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignDesc } from './campaign-desc';

describe('CampaignDesc', () => {
  let component: CampaignDesc;
  let fixture: ComponentFixture<CampaignDesc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignDesc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignDesc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
