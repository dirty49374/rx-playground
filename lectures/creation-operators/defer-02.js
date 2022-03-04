// defer는 subscribe될때까지 observerable의 생성을 지연한다.
const observable = defer(() => {
  // subscribe하지 않아 절대 호출되지 않는다
  console.log('of() observable created');
  return of(1, 2, 3);
})
console.log('defer() observable created');
