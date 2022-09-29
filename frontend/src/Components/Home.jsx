import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import {useDispatch, useSelector} from "react-redux";
import { GetData } from '../Redux/AppReducer/action';
const Home = () => {
    const {data} = useSelector((store)=> {
      return { data:store.AppReducer.blogs}});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleBlog = (id)=>{
      navigate(`/blog/${id}`);
    }

      useEffect(()=>{
        if(data.length===0){
          dispatch(GetData())
        }
      },[data.length])

       useEffect(()=>{
          dispatch(GetData())
          console.log(data)
       },[])
  
    
  return (
    <>
    <div>
       <section className="bg-white dark:bg-gray-900">
     <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Blog</h2>
            <p className="text-gray-500 sm:text-xl font-semibold  dark:text-gray-400 capitalize">"stop being afraid of what could go wrong and think of what could go right"</p>
        </div> 
      <div className="flex flex-row lg:grid-cols-4 mx-auto gap-y-6 justify-center">
    {/* 1 */}

    {
      data && data.map((items,i)=>(

      <div key={i} className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-screen-md mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-contain w-full h-36 rounded-t-lg  md:h-fit md:w-56  md:rounded-none md:rounded-l-lg" src={items.secure_url} alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
            <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-md text-gray-900 dark:text-white">
                  <img
                        className="mr-2 w-10 h-10 rounded-full"
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                        alt={items.creator} />{items.creator}</p>
                <p className="text-md text-gray-600 dark:text-gray-400 "><time>{items.createdAt.split("T")[0]}</time></p>
            </div>
        <h5 className="h-28 overflow-hidden mb-2 mt-2 text-lg  tracking-tight text-gray-900 dark:text-white">{items.description}</h5>

        <button onClick={()=>handleBlog(items._id)} type="button" className="w-40 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-4 py-2 text-center mx-auto  md:mr-2  ">Read more</button>
    </div>
      </div>  

      ))
      }
  
      </div>  
  </div>
</section>
    </div>
<Footer/>
    </>
  )
}

export default Home;
