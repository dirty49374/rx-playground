of(
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'Parcel' },
  { id: 2, name: 'webpack' },
  { id: 1, name: 'TypeScript' },
  { id: 3, name: 'TSLint' }
)
  .pipe(
    concatMap(p => of(p).pipe(delay(500))),
    timeline('source')
  )
  .pipe(
    groupBy(p => p.id),

    timeline('groupBy'),

    // mergeMap / scan을 활용하면 combine된 결과를 볼 수 있다.
    mergeMap(group$ => group$.pipe(
      timeline('map'),
      scan((acc, v) => ({ id: acc.id, names: [...acc.names, v.name]}), { id: group$.key, names: [] }),
    )),
    timeline('merged'),

    scan((acc, v) => ({ ...acc, [v.id]: v.names }), {}),

    timeline('scanned')
  )
  .subscribe(console('groupBy and mergMap'));
