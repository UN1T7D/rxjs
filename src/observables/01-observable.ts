import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
    next: value => console.log('Siguiente [next]: ', value),
    error: error => console.warn('Error [obs]: ', error),
    complete: () => console.info('Completado [obs]')
}

const obs$ = new Observable<string>(subscriber => {
    subscriber.next('Hola antes del complete')

    // Forzar error
    // const a = undefined
    // a.nombre = 'Kevin Aquino'

    subscriber.complete();
    subscriber.next('Hola después del complete')
});

// obs$.subscribe(console.log)

// obs$.subscribe(
//     valor => console.log('Next: ', valor),
//     error => console.warn('Error: ', error),
//     () => console.info('Completado')
// )

obs$.subscribe(observer)