of(1, 2, 3, 4, 5)
  .pipe(
    takeLast(2)
  )
  .subscribe(console('takeLast 2'));
