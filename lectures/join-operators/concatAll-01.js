const highOrder = of(
  timer(300, 500).pipe(take(4), timeline('timer1')),
  timer(200, 700).pipe(take(3), timeline('timer2')),
  timer(500).pipe(map(p => { throw -999 }), timeline('error')),
  of(100)
);

highOrder
  .pipe(
    // 여러 observable을 순차적으로 읽어서 하나로 만든다
    // 에러가 나면 중단된다
    concatAll(),
    timeline('concatAll')
  )
  .subscribe(console('concatAll'));
