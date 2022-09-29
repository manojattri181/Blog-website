import React, { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { getLocalData } from '../utils/localStorage';

let token = getLocalData("token");

const schema ={
    "heading":"",
    "tag":"",
    "secure_url":"",
    "public_id":"",
    "description":""
}

let config = {
    headers: {
      'Authorization': 'Bearer ' + token
    }
  }

const CreatePost = () => {
       const navigate  = useNavigate();
        const [data,setData] = useState(schema);
        const  [files,setFiles] = useState("");
        const [url,setUrl] = useState({});  
        // * loading image takes time so include a dealy function
        
         const postData = (data)=>{
            axios.post("https://thawing-ravine-68761.herokuapp.com/blog/createblog/" , data, config).then((res) => {
                    console.log(res.data);
                    navigate("/");
                }).catch = ((er) => {
                    console.log(er)
                })
         }


        const handleFormData = (e)=>{
            const {name,value} = e.target;
            setData({...data,[name]:value});
        }

         const handleImage = async (e)=>{
            setFiles(e.target.files[0]);

            let formdata = new FormData()
            formdata.append("image", files);

               axios.post("http://localhost:8080/user/uploadImage", formdata).then((res) => {
                    let {secure_url,public_id} =  res.data;
                    console.log({secure_url:secure_url,public_id:public_id})
                    setData({...data,secure_url:secure_url,public_id:public_id});
                    setUrl({secure_url:secure_url,public_id:public_id});
                }).catch = ((er) => {
                    console.log(er)
                })
                console.log(url);
            }
    
    const HandlePost = (e)=>{
        e.preventDefault();
        postData(data);
        console.log(data);
    }

  return (
<form onSubmit={HandlePost} className='max-w-screen-lg bg-gray-100 mx-auto border border-solid border-gray-200 p-4 rounded-xl mt-10 shadow-xl shadow-gray-300'>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="heading" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Header</label>
            <input type="text"  name="heading"  onChange={handleFormData} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="This is my Heading..." required="true"/>
        </div>
        
    </div>
    <div class="mb-6">
        <label for="tag" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tag</label>
        <input type="tag" name="tag" id="email"  onChange={handleFormData} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Html" required="true"/>
    </div> 

    <div className='mb-6'>
    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="file_input">Upload file</label>
    <input name="image" onChange={handleImage} class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"  />
    </div>

   <div className='mb-6'>
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Description</label>
    <textarea id="message" name="description" onChange={handleFormData}  rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark  :placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..." required="true"></textarea>
   </div>
    
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Post Blog</button>

</form>


  )
}

export default CreatePost