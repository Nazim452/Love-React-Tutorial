
import './App.css';
import Header from './components/Header';
import Blog from './components/Blog';
import Pagination from './components/Pagination';
import { useContext } from "react"
import { AppContext } from "./context/AppContext";
import { useEffect } from "react"

function App() {
  const { fetchBlogPosts } = useContext(AppContext)

  useEffect(() => {
    fetchBlogPosts();
  }, [])
  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center' >

     <Header/>
     <Blog/>
      <Pagination/>     

    </div>

  );
}

export default App;
