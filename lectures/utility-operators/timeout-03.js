of(500, 1000, 2000, 2500)
  .pipe(
    map(v => timer(v)),
    mergeAll()
  )
  .pipe(
    // first 옵션을 사용하면 최초에만 timeout이 적용된다
    timeout({
      first: 800,
    })
  )
  .subscribe(console('timeout'));
