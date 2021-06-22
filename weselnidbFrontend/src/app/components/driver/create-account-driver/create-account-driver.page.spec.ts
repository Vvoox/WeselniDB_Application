import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateAccountDriverPage } from './create-account-driver.page';

describe('CreateAccountDriverPage', () => {
  let component: CreateAccountDriverPage;
  let fixture: ComponentFixture<CreateAccountDriverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAccountDriverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateAccountDriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
