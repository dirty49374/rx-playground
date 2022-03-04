of(500, 1000, 2000, 2500)
  .pipe(
    map(v => timer(v)),
    mergeAll()
  )
  .pipe(
    // timeout 시간이 경과하면, TimeoutError를 발생한다
    timeout({ each: 800 })  // timeout(800)과 동일
  )
  .subscribe(console('timeout'));
