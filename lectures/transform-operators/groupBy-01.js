of(
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'Parcel' },
  { id: 2, name: 'webpack' },
  { id: 1, name: 'TypeScript' },
  { id: 3, name: 'TSLint' }
)
  .pipe(
    // groupBy는 같은 값을 가진 필드들로 group하여 observable을 생성한다
    groupBy(p => p.id),
  )
  .subscribe(p => console.log(p.constructor.name, p));
