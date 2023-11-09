
import './App.css';
import {useSearchParams} from "react-router-dom"
function App() {
  const[searchParams, setSearchParams] =useSearchParams();
  console.warn(searchParams.get('age'));
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
