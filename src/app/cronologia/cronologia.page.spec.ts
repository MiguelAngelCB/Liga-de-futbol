import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CronologiaPage } from './cronologia.page';

describe('CronologiaPage', () => {
  let component: CronologiaPage;
  let fixture: ComponentFixture<CronologiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CronologiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CronologiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
