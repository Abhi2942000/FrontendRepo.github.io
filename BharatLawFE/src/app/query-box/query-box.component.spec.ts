import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryBoxComponent } from './query-box.component';

describe('QueryBoxComponent', () => {
  let component: QueryBoxComponent;
  let fixture: ComponentFixture<QueryBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QueryBoxComponent]
    });
    fixture = TestBed.createComponent(QueryBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
