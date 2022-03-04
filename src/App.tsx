import { Sample } from './Sample';
import {
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import { Lecture } from './Lecture';

function App() {
  const test = false;

  if (test)
    return <Sample />;

  return (
    <Routes>
      <Route path="/:chapter/:section" element={<Lecture />} />
      <Route path="*" element={<Navigate to="/01-observable/basics-01" />} />
    </Routes>
  );
}

export default App;
