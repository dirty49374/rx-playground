const start$ = fromEvent(document, 'click')
  .pipe(
    mapTo('restart'),
    startWith('start'),
    tap(console('input'))
  );

// 이 예제는 5초 타이머를 구현하였고, 중간에 아무곳이나 클릭하면 처음부터 다시 시작된다.
const sub = start$
  .pipe(
    // switchMapTo()는 정해진 constant observable로 전환한다.
    switchMapTo(timer(0, 1000)),

    // 입력값이 5를 넘어가면 끝난다.
    takeWhile(p => p <= 5),
    map(p => `elapsed ${p} seconds`),
  )
  .subscribe(console('switchMapTo'));
