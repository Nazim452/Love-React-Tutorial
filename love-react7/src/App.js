import logo from './logo.svg';
import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className='w-full h-screen flex flex-col background relative overflow-x-hidden items-center' >
      <h1 className='rounded-sm absolute w-full text-center bg-white mt-[40px] w-11/12 text-3xl rounded-lg font-bold'>Random GIFS</h1>
      <div className='flex flex-col w-full items-center mt-[100px]'>

        <Random  />
        <Tag/>

      </div>

      


    </div>
  );
}

export default App;
