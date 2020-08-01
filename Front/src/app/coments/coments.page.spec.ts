import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComentsPage } from './coments.page';

describe('ComentsPage', () => {
  let component: ComentsPage;
  let fixture: ComponentFixture<ComentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
