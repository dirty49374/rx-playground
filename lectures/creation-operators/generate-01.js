// generate는 for와 동일하다
generate(0, i => i < 10, i => i + 1)
  .subscribe(console('generate'));
