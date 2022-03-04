of(4, 5, 6)
  .pipe(
    // startWith은 앞에 붙인다
    startWith(1, 2, 3)
  )
  .subscribe(console('startWith'));
