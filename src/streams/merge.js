import { Observable } from "rxjs";

const sourceOne$ = Observable.interval(3000)
  .map(x => `Source 1 ${x}`)
  .take(3);

const sourceTwo$ = Observable.interval(2000)
  .map(y => `Source 2 ${y}`)
  .take(3);

const combined$ = Observable.merge(sourceOne$, sourceTwo$);

const subscription = combined$.subscribe(console.log);
