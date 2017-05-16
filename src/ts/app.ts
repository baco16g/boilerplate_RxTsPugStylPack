import * as $ from 'jquery'
import * as Rx from 'rxjs'

import '../stylus/app.styl'

// $(() => {
//   $('body').html('Hello World!');
// });

console.log('RxJS Boiler Running...')

const button = $('button')
Rx.Observable
  .fromEvent(button, 'click')
  .subscribe(
    (event: MouseEvent) => {
      console.log(`${(event.target as HTMLButtonElement).textContent} is clicked!!`)
    }
  )
