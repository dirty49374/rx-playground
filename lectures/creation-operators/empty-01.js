// console는 rx-playground에서 제공되는 observer이며, console.log로 출력한다.
const testObserver = console('test')
testObserver.next(1);
testObserver.error(1);
testObserver.complete();

// empty()는 빈 observable이다.
empty().subscribe(console('empty'));

// deprecated되었고 EMPTY를 사용하자.
EMPTY.subscribe(console('EMPTY'));
