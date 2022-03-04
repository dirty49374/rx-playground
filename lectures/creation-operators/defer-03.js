// defer는 observable의 종류도 바꿀 수 있다
const observable = defer(() => {
  return Math.random() < 0.5  
    ? of(1, 2, 3)
    : of('one', 'two', 'three');
})

observable.subscribe(console('defer'));
