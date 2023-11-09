import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from "./Spinner"
import "./Blogs.css"
const Blog = () => {

    //consume USeContext

    const { post, loading } = useContext(AppContext);
    console.log("Printiting inside Blog");
    console.log(post);


    return (
        <div className='w-11/12 max-w-[480px] py-3 flex flex-col gap-y-7 mt-[70px] mb-[70px] justify-center items-center h-screen'>

            {
                loading ?
                    (<Spinner />) :


                    (
                        post.length === 0 ?
                            (
                                <div>
                                    <p>No Post Found</p>
                                </div>

                            ) :

                            (
                                post.map((post) => (
                                    <div key={post.id}>
                                        <p className='title text-xl font-bold' > 
                                            {post.title}</p>
                                            <p className='text-[15px]'>
                                                By <span className='italic'>{post.author}</span> on <span className='underline font-bold' >{post.category}</span>
                                            </p>

                                              <p className='text-[12px]'>Posted on {post.date}</p>
                                            <p className='text-[13px] mt-[10px]'>{post.content}</p>
                                            {/* if k ey not available then passed index */}
                                            <div className='flex gap-x-3 '>
                                                {post.tags.map((tag, index) => {
                                                    return <span key={index} className='text-blue-500 font-bold underline text-[14px]'>{`#${tag}`}</span>
                                                })}
                                            </div>
                                       
                                    </div>
                                ))
                            )

                    )


            }


        </div>
    )
}

export default Blog