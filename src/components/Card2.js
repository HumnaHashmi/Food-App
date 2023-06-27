import React from 'react'
import Cdata from './Cdata';
function Card2(props) {
  return (
    <>
        {/* categories */}


<div class="max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
style={{
    width:"263px",
    marginRight:"10px",
    marginBottom:"20px"
}}>

    <svg class="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    {props.image}
    </svg>
    <a href="#">
        <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white"></h5>
    </a>
    <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">{props.title2}</p>
    
</div>
    </>

  )
}

export default Card2;