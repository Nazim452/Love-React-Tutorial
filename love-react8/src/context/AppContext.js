import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();
{/* <AppContextProvider>
     <App />
   </AppContextProvider> */}
//   Children------       indexex .js me ye likha hai it means child of AppContextProvider is APP Hai


//Step-1
export default function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [post, setPost] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);


    //data-filling

    async function fetchBlogPosts(page=1,tag=null, catogery){
        setLoading(true);
        let url=`${baseUrl}?page=${page}`
        if(tag){
           url+=`&tag=${tag}`
        }
        if(catogery){
            url+=`&catogery=${catogery}`
        }
        console.log('FInal URL');
        console.log(url);
        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPost(data.posts)
            setTotalPages(data.totalPages)
            
        } catch (error) {
            console.log("Error Found - Failed fetching Data");
            setPage(1 );
            setPost([]);
            setTotalPages(null);
            
        }
        setLoading(false);
    }


    // Prev And next page

    function handlePageChanger(page){
        setPage(page)
        fetchBlogPosts(page)
    }



    const value = {
        post, setPost,
        loading, setLoading,
        page, setPage,
        totalPages, setTotalPages,
        fetchBlogPosts,
        handlePageChanger
    };


    // step2

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>  



}




