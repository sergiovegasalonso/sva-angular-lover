import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsNavigatorComponent } from './tabs-navigator.component';

describe('TabsNavigatorComponent', () => {
  let component: TabsNavigatorComponent;
  let fixture: ComponentFixture<TabsNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsNavigatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabsNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
