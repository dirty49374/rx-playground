of(1, 2, 3, 4)
  .pipe(
    materialize(),
    // materialized 형태를 원래대로 되돌린다
    dematerialize(),
  )
  .subscribe(console('dematerialize'));
