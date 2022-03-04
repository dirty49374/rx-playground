of(1, 2, 3, 4, 5)
  .pipe(
    isEmpty()
  )
  .subscribe(console('isEmpty - not empty'));

of()
  .pipe(
    isEmpty()
  )
  .subscribe(console('isEmpty - empty'));


throwError(() => -999)
  .pipe(
    isEmpty()
  )
  .subscribe(console('isEmpty - error'));
