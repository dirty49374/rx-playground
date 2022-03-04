/*
class BehaviorSubject<T> extends Subject {
  constructor(_value: T)  ; _value는 초기값
  ...
}

 Subject와 유사하나 subscribe시 무조건 가장 최신값을 먼저 받고 시작한다.
*/

// 초기값을 지정하지 않으면, undefined가 들어간다.
const subject = new BehaviorSubject(0);

subject.subscribe(console('ob1'));  // 초기값인 0를 받는다
subject.next(1);  // ob1에 전달된다
subject.next(2);  // ob1에 전달된다

subject.subscribe(console('ob2'));  // 최신값인 2를 먼저 받는다

subject.next(3);  // ob1, ob2에 전달된다
