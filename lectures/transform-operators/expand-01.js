const fakeFS = {
  'etc': { 'passwd': null },
  'bin': { 'ls': null, 'ps': null },
}

const dir = path => {
  const stat = path === '/'
    ? fakeFS
    : path.split('/').slice(1).reduce((acc, v) => acc[v], fakeFS);

  return stat != null
    ? Object.keys(stat).map(f => `${path}/${f}`.replaceAll('//', '/'))
    : [];
}

const dir$ = path =>
  from(dir(path)).pipe(
    concatMap(v => of(v).pipe(delay(500)))
  );

of('/')
  .pipe(
    // expand는 recursive한 mergeMap 이다.
    // 입력뿐만 아니라 출력도 다시 expand한다. 그래프 탐색같은 경우에 유용한듯
    expand(path => dir$(path)),
  )
  .subscribe(console('expand'));
