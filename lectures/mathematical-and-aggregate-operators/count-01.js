of(1, 2, 3, 4, 5)
  .pipe(
    count()
  )
  .subscribe(console('count'));
