import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChatClientDriverPage } from './chat-client-driver.page';

describe('ChatClientDriverPage', () => {
  let component: ChatClientDriverPage;
  let fixture: ComponentFixture<ChatClientDriverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatClientDriverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatClientDriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
