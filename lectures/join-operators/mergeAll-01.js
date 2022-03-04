const highOrder = of(
  timer(300, 500).pipe(take(4), timeline('timer1')),
  timer(200, 700).pipe(take(3), timeline('timer2')),
  timer(500).pipe(map(p => { throw -999 }), timeline('error')),
  of(100)
);


highOrder
  .pipe(
    mergeAll(),
    timeline('mergeAll')
  )
  .subscribe(console('mergeAll'));
