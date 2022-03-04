of(1, 2, 3, 4, 5)
  .pipe(
    skip(2),
    take(2)
  )
  .subscribe(console('skip2 and take2'));
