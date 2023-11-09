import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const {page,handlePageChanger,totalPages}  =useContext(AppContext)
  return (
    <div className='w-full flex items-center justify-center border py-2 bottom-0 fixed bg-white'>
      <div className='flex justify-between w-11/12 max-w-[480px] '>
       <div className='flex gap-x-2'>
       { page>1&&
          <button 
          className='rounded-md border px-4 py-2'
          onClick={()=>handlePageChanger(page-1)}>
            Previous
          </button>
        }


        { page<totalPages&&
          <button 
          className='rounded-md border px-4 py-2'
          onClick={()=>handlePageChanger(page+1)}>
              Next
          </button>
        }

       </div>
        <p>Page {page} of {totalPages}</p>
      </div>
    </div>
  )
}

export default Pagination