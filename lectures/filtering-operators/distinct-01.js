of(1, 1, 2, 2, 2, 1, 2, 3, 4, 3, 2, 1)
  .pipe(
    distinct()
  )
  .subscribe(console('distinct'));
