import { HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ApiService } from './services/api.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [HttpClientModule],
      providers: [ApiService]
    }).compileComponents();
  });

  it('AppComponent is created', () => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('StartYear must be initialized', () => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.componentInstance;
    expect(app.startYear).toEqual(2005);
  });

  it('Should render title', () => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.nativeElement;
    expect(compiled.querySelector('.topNavTitle').textContent).toContain('Formula 1 Championships');
  });

  it('H1 tag should contain text', () => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    let compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Season: ');
  })

  it('Second H1 tag should read no data found', () => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.nativeElement;
    expect(compiled.querySelector('#data').textContent).toContain('No data found');
  })

  it('Array must not be null/empty', ()=> {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app.parsedArray).toBeDefined();
  })

  it('Check if we have values in our years array', () =>{
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    expect(app.years.length).toBeGreaterThan(1)
  })
});
