// deprecated 되었다.
//
// fluck('foo', 'bar')는 map(x => x?.foo?.bar)와 같다

of({ foo: { bar: 100 } }, {})
  .pipe(
    pluck('foo', 'bar')
  )
  .subscribe(console('pluck'));


of({ foo: { bar: 100 } }, {})
  .pipe(
    map(x => x?.foo?.bar)
  )
  .subscribe(console('map'));
