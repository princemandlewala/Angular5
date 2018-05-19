import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
//Best way to share data between components is to use RX-JS behavior library. 
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private goals = new BehaviorSubject<any>(['The initial goal','Another silly goal']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal){
    this.goals.next(goal);
  }
}
