import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GetData } from '../Redux/AppReducer/action';

const SingleBlog = () => {
    const [Data,setSingleData] = useState({});
    const {id} = useParams();
    const {data} = useSelector((store)=> {return { data:store.AppReducer.blogs}});
    const dispatch = useDispatch();
    // console.log(data,id);
  useEffect(()=>{
    if(data.length===0){
        dispatch(GetData());
    }
  },[data,data.length])

    useEffect(()=>{
        if(data){
            const mydata = data.find((items)=>items._id==id);
            setSingleData(mydata);
        }
    },[])
    console.log(Data)

  return (

        <div>
        <main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900" >
        <div class="flex justify-between px-12 mx-auto max-w-screen-md  ">
      <article class="mx-auto w-full  format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header class="mb-4 lg:mb-6 not-format">
          <address class="flex items-center mb-6 not-italic">
          <div class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                      <img class="mr-4 w-16 h-16 rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Jese Leos" />
                      <div>
                      <a href="#" rel="author" class="text-xl font-bold text-gray-900 dark:text-white">{Data.creator}</a>
                      <p class="text-base font-light text-gray-500 dark:text-gray-400">{Data.tag}</p>
                          <p class="text-base font-light text-gray-500 dark:text-gray-400"><time >{Data.createdAt?.split("T")[0]}</time></p>
                      </div>
                  </div>
              </address>
              <h1 class="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{Data.heading}</h1>
              </header>
              
              <img className='w-full rounded-xl mb-3' src={Data?.secure_url} alt="" />
              
          <p>{Data.description}</p>
              </article>
              </div>
              
              {/* post section */}
              
              <section class="bg-white dark:bg-gray-900 py-8 lg:py-16">
  <div class="max-w-2xl mx-auto px-4">
  <div class="flex justify-between items-center mb-6">
  <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Discussion (1)</h2>
    </div>
    <form class="mb-6">
        <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <label for="comment" class="sr-only">Your comment</label>
        <textarea id="comment" rows="6"
        class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
        placeholder="Write a comment..." required></textarea>
        </div>
        <button type="submit"
        class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
            Post comment
        </button>
    </form>
    <article class="p-6 mb-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <footer class="flex justify-between items-center mb-2">
            <div class="flex items-center">
                <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
                        class="mr-2 w-6 h-6 rounded-full"
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        alt="" />Dummy</p>
                <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-03-12"
                title="March 12th, 2022">Mar. 12, 2022</time></p>
            </div>
            <button id="dropdownComment3Button" data-dropdown-toggle="dropdownComment3"
            class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-gray-200 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button">
                <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path
                d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                </path>
                </svg>
                <span class="sr-only">Comment settings</span>
            </button>
            {/* <!-- Dropdown menu --> */}
            <div id="dropdownComment3"
            class="hidden z-10 w-36 bg-gray-100 rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
            <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownMenuIconHorizontalButton">
                    <li>
                    <a href="#"
                    class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                    </li>
                    <li>
                        <a href="#"
                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                        </li>
                        <li>
                        <a href="#"
                        class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                        </li>
                        </ul>
                        </div>
                        </footer>
                        <p class="text-gray-500 dark:text-gray-400">This post Feature work is inProgress Thank you!</p>
                        <div class="flex items-center mt-4 space-x-4">
                        <button type="button"
                        class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
                        <svg aria-hidden="true" class="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                Reply
                </button>
        </div>
    </article>
    </div>
</section>
    </main>
    </div>
    )

}
export default SingleBlog;
