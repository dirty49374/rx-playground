const highOrder = of(
  timer(300, 500).pipe(take(4), timeline('timer1')),
  timer(200, 700).pipe(take(3), timeline('timer2')),
);

highOrder
  .pipe(
    combineLatestAll(),
    timeline('combineLatestAll')
  )
  .subscribe(console('combineLatestAll'));
