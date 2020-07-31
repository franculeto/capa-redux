import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { IUserData } from 'src/app/models/user-data.interface';
import { Store, select } from '@ngrx/store';
import { HomeService } from './services/home.service';
import { IHomeStore } from './home-store/home-store.reducer';
import { FetchPendingGetCourses } from './home-store/home-store.actions';
import { takeUntil, take, filter } from 'rxjs/operators';
import * as fromHomeStore from '../home/home-store/home-store.selectors';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  title = 'Capa-Redux';

  userData: IUserData = {
    age: null,
    name: null,
    surname: null
  };

  destroy$ = new Subject();
  coursesList: string[];

  constructor(
    private router: Router,

    private homeStore: Store<IHomeStore>
  ) { }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  ngOnInit(): void {
    this.getCourses();
  }

  onKeyName(name) {
    this.userData.name = name;
  }

  onKeySurname(surname) {
    this.userData.surname = surname;
  }

  onKeyAge(age) {
    this.userData.age = age;
  }

  goToPersonalData() {
    this.router.navigate(['/personal-data']);
  }

  savePersonalData() {

  }

  dispatchFetchPendingCourses() {
    this.homeStore.dispatch(new FetchPendingGetCourses());
  }

  getCourses() {
   const subs = this.homeStore.pipe(
      select(fromHomeStore.selectState),
      filter(val => !val.pending && val.typeRequest === 'get'),
      takeUntil(this.destroy$))
      .subscribe((homeStore: any) => {

        if (homeStore.pending) {
          return;
        }

        if (homeStore.error) {
          subs.unsubscribe();
          console.log(homeStore.errorInfo.error);
        }

        if (homeStore.isFetchCompleted) {

          this.coursesList = homeStore.data.curses;

        }

      });
  }


}
