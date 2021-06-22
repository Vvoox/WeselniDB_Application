import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatDriverClientPage } from './chat-driver-client.page';

describe('ChatDriverClientPage', () => {
  let component: ChatDriverClientPage;
  let fixture: ComponentFixture<ChatDriverClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDriverClientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatDriverClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
