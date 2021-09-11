import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sect-six';

  oddNumbers: number[] = [];
  EvenNumbers: number[] = [];


  onIntervalFired(firedNumber: number){
    if(firedNumber%2 !== 0) {
      this.oddNumbers.push(firedNumber)
    } else {
      this.EvenNumbers.push(firedNumber)
    }
    
    console.log(firedNumber);
  }
}
