/*

class ReplaySubject<T> extends Subject {
  constructor(
    _bufferSize: number = Infinity,
    _windowTime: number = Infinity,
    _timestampProvider: TimestampProvider = dateTimestampProvider);
  ...
}

  - ReplaySubject는 windowTime 동안의 최대 bufferSize만큼의 개수를 기억하고 있다가,
    subscribe시에 바로 보내주고 시작한다. 값을 지정하지 않으면 무한대로 기억한다.
*/

const subject = new ReplaySubject(2);
subject.next(1);
subject.next(2);
subject.next(3);

console.log('ob1 subscribe -------------------------');
subject.subscribe(console('ob1'));  // 2, 3을 먼저 받는다.
console.log('ob1 subscribed ------------------------');
subject.next(4);  // ob1에 전달된다

console.log('ob2 subscribe -------------------------');
subject.subscribe(console('ob2'));  // 3, 4를 먼저 받는다.
console.log('ob2 subscribed ------------------------');

subject.next(5);    // ob1, ob2에 전달된다
subject.complete(); // ob1, ob2에 전달된다
console.log('subject completed =====================');

console.log('ob3 subscribe -------------------------');
subject.subscribe(console('ob3'));  // 4, 5를 받고 끝난다.
console.log('ob3 subscribed ------------------------');

