import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('[next]: ', value),
    error: error => console.warn('[error]: ', error),
    complete: () => console.info('[complete]')
}


const interval$ = new Observable<number>(subs => {
    const interval = setInterval(
        () => subs.next(Math.random()),
        1000)

    return () => {
        clearInterval(interval)
        console.log('Intervalo destruido')
    }
})


const subject$ = new Subject()
const subscription = interval$.subscribe(subject$);

// const subs1 = interval$.subscribe(value => console.log('[subs 1] : ',value))
// const subs2 = interval$.subscribe(value => console.log('[subs 2] : ',value))

const subs1 = subject$.subscribe(observer)
const subs2 = subject$.subscribe(observer)


setTimeout(() => {
    subject$.next(10)
    subject$.complete()
    subscription.unsubscribe();
}, 3500);