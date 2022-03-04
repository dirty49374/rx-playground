of(1, 2, 3, 4, 5)
  .pipe(
    find(v => v > 3)
  )
  .subscribe(console('find > 3'));
