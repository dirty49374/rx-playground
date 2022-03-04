console.log(`identity(1) = ${identity(1)}`);
console.log(`identity(['A']) = ${identity(['A'])}`);

of(of(1, 2), of(3, 4))
  .pipe(
    mergeMap(identity)
  )
  .subscribe(console('identity'));
