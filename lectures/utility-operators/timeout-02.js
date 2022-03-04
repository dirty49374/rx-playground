of(500, 1000, 2000, 2500)
  .pipe(
    map(v => timer(v)),
    mergeAll()
  )
  .pipe(
    // with 옵션으로 에러 종류를 변경한다
    timeout({
      each: 800,
      with: () => throwError(-999)
    })
  )
  .subscribe(console('timeout'));
