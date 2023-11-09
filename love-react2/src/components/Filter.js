
import React from 'react'

const Filter = ({ filterData,catogery,setCatogery }) => {

    function filterHandler(title){
        setCatogery(title)
    }



    return (
        <div className='w-11/12 flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 mx-auto py-4 justify-center'>

            {filterData.map((data) => {
              return <button 
                className={`text-lg px-2 py-1 rounded-md font-medium text-white  bg-black hover:bg-opacity-70 border-2 transition-all duration-300${catogery==data.title ?"border-white": " border-transparent"} `}

            key={data.id}
            onClick={()=>filterHandler(data.title)}
           
            
            >

           {data.title}

           
                </button>
            })}

        </div>
    )
}

export default Filter































