const source$ = of(1, 2, 3, 4, 5)
  .pipe(
    tap(console('source$'))
  );

source$.pipe(
  // connect()를 사용하면, source observable을 multicasting하여 사용할 수 있다.

  // 아래 예제는 source$ observable이 multicasting가능한 shared$ observable로
  // 변환되어 3개의 pipe를 거치고, merge를 통해 하나로 다시 합쳐지는 과정이다.
  connect((shared$) => merge(
    shared$.pipe(map(n => `all ${n}`)),
    shared$.pipe(filter(n => n % 2 === 0), map(n => `even ${n}`)),
    shared$.pipe(filter(n => n % 2 === 1), map(n => `odd ${n}`)),
  ))
)
  .subscribe(console('connect'));
