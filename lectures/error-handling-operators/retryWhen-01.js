// 3번째 error를 발생하는 observable
const query = interval(500)
  .pipe(
    map(v => {
      if (v == 2) throw -999;
      return v;
    }),
    timeline(`query`)
  );

return query
  .pipe(
    // 에러가 발생하면 observable (query)를 재실행한다
    retryWhen((errors, n) =>
      // errors는 에러만 따로 모인 observable이며, next로 전달된다
      // 이 observable을 변환해서 전달하면 해당 시점에 retry가 진행된다
      errors.pipe(
        tap(console(`errors`)),
        timeline('errors'),

        // errors observable을 1초 딜레이를 주어 retry를 한다
        delay(1000),
        timeline('delay')
      ),
    ),
    timeline('output'),
    take(10)
  )
  .subscribe(console('retryWhen'));
