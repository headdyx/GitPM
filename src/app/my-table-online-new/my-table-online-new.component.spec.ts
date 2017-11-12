import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTableOnlineNewComponent } from './my-table-online-new.component';

describe('MyTableOnlineNewComponent', () => {
  let component: MyTableOnlineNewComponent;
  let fixture: ComponentFixture<MyTableOnlineNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTableOnlineNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTableOnlineNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
