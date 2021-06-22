import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DriverChatPage } from './driver-chat.page';

describe('DriverChatPage', () => {
  let component: DriverChatPage;
  let fixture: ComponentFixture<DriverChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverChatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DriverChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
