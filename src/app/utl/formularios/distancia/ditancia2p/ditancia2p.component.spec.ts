import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ditancia2pComponent } from './ditancia2p.component';

describe('Ditancia2pComponent', () => {
  let component: Ditancia2pComponent;
  let fixture: ComponentFixture<Ditancia2pComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ditancia2pComponent]
    });
    fixture = TestBed.createComponent(Ditancia2pComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
