import { RxPlayground } from "./components/rxPlayground";
import { NavBar } from "./components/navBar";

export const Lecture: React.FC<{}> = () => {
  return (
    <div className='flex flex-col h-screen app'>
      <NavBar className='flex-none' />
      <RxPlayground />
    </div>
  );
}
