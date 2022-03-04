/* -------------------------------------------------------------

  subject의 특징

  - subject는 Observable이자 Observer이다.

  - subject는 multicasting 된다.
      Observable은 중복해서 subscribe하면 각자 다른 source가 생성되지만,
      Subject는 하나의 source가 공유된다.

  - subject는 Subject, BehaviorSubject, ReplaySubject, AsyncSubject가 있다.

   ------------------------------------------------------------  */
