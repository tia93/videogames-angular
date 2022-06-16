import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogameListElementComponent } from './videogame-list-element.component';

describe('VideogameListElementComponent', () => {
  let component: VideogameListElementComponent;
  let fixture: ComponentFixture<VideogameListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideogameListElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideogameListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
