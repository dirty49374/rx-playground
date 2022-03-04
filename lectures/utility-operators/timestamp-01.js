of(500, 1000, 2000)
  .pipe(
    delayWhen(e => timer(e)),
    // timestamp(Date.now)를 넣어서, { value, timestamp } 형식으로 전달한다
    timestamp(),
  )
  .subscribe(console('timestamp'));
