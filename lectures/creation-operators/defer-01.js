// defer는 subscribe될때까지 observerable의 생성을 지연한다.
const observable = defer(() => {
  console.log('of() observable created');
  return of(1, 2, 3);
})
console.log('defer() observable created');

setTimeout(() => {
  observable.subscribe(console('defer'));
}, 1000);
