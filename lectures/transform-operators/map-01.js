of(1, 2, 3, 4)
  .pipe(
    map(v => v * 2)
  )
  .subscribe(console('map'));
