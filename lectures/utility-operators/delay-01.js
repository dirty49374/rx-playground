timer(0, 500)
  .pipe(
    take(5),
    timeline('timer'),

    // delay는 입력 이벤트를 주어진 시간동안 지연시켜서 보낸다
    delay(100),
    timeline('after delay'),
  )
  .subscribe();
