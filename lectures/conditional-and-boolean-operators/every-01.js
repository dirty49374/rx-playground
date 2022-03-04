of(1, 2, 3, 4, 5)
  .pipe(
    every(v => v < 10)
  )
  .subscribe(console('every < 10'));

of(1, 2, 3, 4, 5)
  .pipe(
    every(v => v < 3)
  )
  .subscribe(console('every < 3'));
