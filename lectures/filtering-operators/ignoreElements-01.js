of(1, 2, 3, 4)
  .pipe(
    tap(console('source1')),
    ignoreElements()
  )
  .subscribe(console('ignoreElements1'));

throwError(() => -999)
  .pipe(
    tap(console('source2')),
    ignoreElements()
  )
  .subscribe(console('ignoreElements2'));
