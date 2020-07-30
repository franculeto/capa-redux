import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserData } from 'src/app/models/user-data.interface';
import { INavigationState } from 'src/app/root-store/navigation-store/navigation-store.reducer';
import { Store } from '@ngrx/store';
import { NavigateBack } from 'src/app/root-store/navigation-store/navigation-store.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Capa-Redux';

  userData: IUserData = {
    age: null,
    name: null,
    surname: null
  };

  constructor(
    private router: Router,
    private navigationStore: Store<INavigationState>
  ) { }

  ngOnInit(): void {
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
    // todo: dispatch guardando la info del usuario
    this.router.navigate(['/personal-data']);
  }
}
