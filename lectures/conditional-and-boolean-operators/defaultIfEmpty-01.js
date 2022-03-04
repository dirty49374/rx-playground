of(1, 2, 3)
  .pipe(
    defaultIfEmpty(null)
  )
  .subscribe(console('defaultIfEmpty - not empty'));

of()
  .pipe(
    defaultIfEmpty(null)
  )
  .subscribe(console('defaultIfEmpty - empty'));
