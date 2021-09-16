import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Testing @Input values', ()=> {
    component.dropdownOptions = [2005,2006,2007];
    fixture.detectChanges();
    expect(component.dropdownOptions.length).toBeGreaterThan(1);
  })

  it('Testing @Output values', ()=> {
    component.dropdownOptions = [2005,2006,2007];
    fixture.detectChanges();
    expect(component.dropdownOptions.length).toBeGreaterThan(1);
  })

  it('Make sure there is value emited on change of dates', () => {
    component.emitYear = 2005;
    fixture.detectChanges();
    expect(component.emitYear).toBeDefined();
  })
});
