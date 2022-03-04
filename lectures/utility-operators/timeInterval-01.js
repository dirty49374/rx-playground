of(500, 1000, 2000)
  .pipe(
    delayWhen(e => timer(e)),
    // 이전 이벤트와의 시간 간격을 계산하여, { value, interval } 형식으로 전달한다
    timeInterval(),
  )
  .subscribe(console('timeInterval'));
