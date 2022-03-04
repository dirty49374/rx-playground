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
    // 각 group을 toArray()를 사용하여 끝까지 모아 array를 만들어,
    // merge하면 observable이 마지막에 groupBy된 결과를 볼 수 있다.
    mergeMap(group$ => group$.pipe(timeline('map'), toArray())),

    timeline('output')
  )
  .subscribe(console('groupBy and mergMap'));
