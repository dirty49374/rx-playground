timer(0, 500)
  .pipe(
    take(5),
    timeline('timer'),

    // delayWhen은 delay 시간을 callback 함수를 호출한 결과 observable로 조절한다
    // 아래는 짝수이벤트는 딜레이없이, 홀수 이벤트는 100ms 지연시켜 전달한다.
    delayWhen(ev => timer(ev % 2 == 0 ? 0 : 100)),
    timeline('after delay'),
  )
  .subscribe();
