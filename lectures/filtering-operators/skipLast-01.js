of(1, 2, 3, 4, 5)
  .pipe(
    skipLast(2)
  )
  .subscribe(console('skipLast 2'));
