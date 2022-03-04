const tick$ = interval(1000)
  .pipe(timeline('tick'));

timer(0, 300).pipe(take(10))
  .pipe(
    timeline('input'),

    // window는 boundary observable을 사용하여 window 경계를 제어한다.
    // boundary observable에 emit될때마다, window가 전환되어 새로운 observable을 넘겨준다.
    window(tick$),
    timeline('output')
  )
  // 결과는 high order observable들이다.
  .subscribe(v => console.log(v.constructor.name));
