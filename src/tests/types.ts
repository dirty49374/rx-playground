import { Observable } from "rxjs";

export type ObservableItem = {
  name: string;
  observable: Observable<any>;
};

export type TestFunction = () => ObservableItem[];

export type Test = {
  name: string;
  code: string;
  // test: TestFunction;
}

