import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMain } from './portfolio-main';

describe('PortfolioMain', () => {
  let component: PortfolioMain;
  let fixture: ComponentFixture<PortfolioMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
