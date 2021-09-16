import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Headers must contain atleast 1 column', ()=> {
    component.tableHeaders = ['Number', 'Name', 'Age'];
    fixture.detectChanges();
    expect(component.tableHeaders.length).toBeGreaterThan(0);
  })

  it('Table must contain atleast 1 row of data', ()=> {
    component.wonMultipleArray = [{no: 1, Name: 'Mpho', age: 99 }];
    fixture.detectChanges();
    expect(component.wonMultipleArray.length).toBeGreaterThan(0);
  })
});
