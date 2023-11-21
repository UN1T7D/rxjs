import { from, reduce, scan } from "rxjs";

const numbers = [1, 2, 3, 4, 5]

// const totalAcumulado = (acc, cur) => {
// return acc + cur
// }

const totalAcumulado = (acc, cur) => acc + cur

// Reduce
from(numbers).pipe(
    reduce(totalAcumulado, 0)
).subscribe(console.log)

// Scan
from(numbers).pipe(
    scan(totalAcumulado, 0)
).subscribe(console.log)

// Redux
interface Usuario {
    id: string;
}
