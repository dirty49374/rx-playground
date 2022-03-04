of(1, 2, 3, 4, 5)
  .pipe(
    filter(v => v % 2 === 0)
  )
  .subscribe(console('evens'));
