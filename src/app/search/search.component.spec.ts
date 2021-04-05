import { AppComponent } from '../app.component';
import { SearchComponent } from './search.component';

import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router, RouterModule } from '@angular/router';
import { NgModuleFactoryLoader, Component, NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { routes } from 'src/app/app-routing.module'
import { HttpClient } from '@angular/common/http';


describe('Search Component', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  let location: Location;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule.withRoutes(routes), BrowserAnimationsModule]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    let router = TestBed.get(Router);
  });
  @Component({ template: '' })
  class SearchComponent { }
  @NgModule({ declarations: [SearchComponent] ,providers:[HttpClient]})
  class LazyModule { }
  it('should navigate search Componenet', fakeAsync(() => {
    let router = TestBed.get(Router);
    router.initialNavigation();
    //Used to load ng module factories.
    let loader = TestBed.get(NgModuleFactoryLoader);
    let location = TestBed.get(Location);
    // sets up stubbedModules
    loader.stubbedModules = {
      '/search': LazyModule,
    };
    router.resetConfig([
      { path: 'search', loadChildren: () => import('./search.module').then(m => m.SearchModule)},
    ]);
    router.navigateByUrl('/search');
    tick();
    fixture.detectChanges();
    expect(location.path()).toBe('/search');
  }));
});
/*
describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/