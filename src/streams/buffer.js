import { Observable } from "rxjs";

Observable.timer(0, 50)
  .buffer(Observable.timer(500))
  .subscribe(val => console.log(`Data in buffer: [${val}]`));

