import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockHerosComponent } from './mock-heros.component';

describe('MockHerosComponent', () => {
  let component: MockHerosComponent;
  let fixture: ComponentFixture<MockHerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockHerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
