
import './App.css';
import { apiUrl, filterData } from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from './components/Cards';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Spinner from './components/Spinner';
function App() {

  const [courses, setCourse] = useState(null);
  const [loading, setLoading] = useState("true");
  const [catogery, setCatogery] = useState(filterData[0].title)



  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();
        // console.log(output);
        setCourse(output.data)

      }
      catch (error) {
        toast.error("Somrthing Went Wrong")

      }
      setLoading(false);
    }
    fetchData();


  }, []);

  return (
    <div className='min-h-screen flex flex-col bg-gray-800'>
      <div >
        <Navbar />
      </div>



      <div className=''>
        <Filter
          filterData={filterData}
          catogery ={catogery}
          setCatogery={setCatogery}

        />

        <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
          {
            loading ? (<Spinner />) : (<Cards courses={courses} catogery={catogery} />)
          }
        </div>
      </div>
    </div>

  );
}

export default App;
