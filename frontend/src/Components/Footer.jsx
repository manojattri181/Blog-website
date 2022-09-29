import React from 'react'

const Footer = () => {
  return (
<footer class="w-7/12  bottom-0 left-[18%] p-4 bg-white rounded-lg hidden md:flex mx-auto md:items-center md:justify-between md:p-6 mt-5 dark:bg-gray-800">
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://manojattri.vercel.app/" class="hover:underline">BlogBank™</a>. All Rights Reserved.
    </span>
    <ul class="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="" class="mr-4 hover:underline md:mr-6 ">About</a>
        </li>
        <li>
            <a href="" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
        </li>
        <li>
            <a href="" class="mr-4 hover:underline md:mr-6">Licensing</a>
        </li>
        <li>
            <a href="" class="hover:underline">Contact</a>
        </li>
    </ul>
</footer>

  )
}

export default Footer