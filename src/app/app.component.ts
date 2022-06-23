import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angular-24h-lemans';

  // HOOKS
  intervalSub;

  // this is a hook that's used on init. logs an interval.
  ngOnInit(){
    this.intervalSub = setInterval(() => {
      console.log('Hello from ngOnInit');
    }, 1000);
  }
// this is the hook that's used before destroying smth. We clear the interval.
  ngOnDestroy() {
    if (this.intervalSub) {
      clearInterval(this.intervalSub);
    }
  }

}
