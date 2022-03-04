let tries = 0;

const shareOption = {
  // connector: () => new Subject(),
  connector: () => new ReplaySubject(2),
  // connector: () => new BehaviorSubject(),
  resetOnError: true,
  // resetOnError: false,
  // resetOnComplete: true,
  resetOnComplete: false,
  resetOnRefCountZero: false
};

const source$ = timer(0, 1000)
  .pipe(
    take(3),
    tap(v => {
      if (v === 1) {
        if (++tries === 1) {
          throw -999;
        }
      }
    }),
    tap(console('source$')),

    // 위에서 옵션을 바꾸어가며 테스트해보자
    share(shareOption)
  );

async function test() {
  const ob1 = console('ob1');
  const ob2 = console('ob2');
  const ob3 = console('ob3');
  const ob4 = console('ob4');

  source$.subscribe(ob1);
  await ob1;
  console.log('--------------------- reset on error =', shareOption.resetOnError)

  source$.subscribe(ob2);
  await ob2;

  console.log('--------------------- connector =', shareOption.connector().constructor.name)
  console.log('--------------------- reset on complete =', shareOption.resetOnComplete)

  source$.subscribe(ob3);
  await ob3;

}

test();
