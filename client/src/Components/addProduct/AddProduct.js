import React from 'react'
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
const AddProduct = () => {
  return (
<>
<Navbar/>
    <div className='container flex flex-wrap mb-16 mt-16 justify-center'>
 
<form>
    <div className="grid gap-6 mb-16 mt-16 md:grid-cols-2">
        <div>
            <label for="Product Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
            <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Eg: Watch" required />
        </div>
       
        <div>
            <label for="Category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
            <input type="text" id="Category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Category" required />
        </div>  
        <div>
            <label for="Prize" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prize</label>
            <input type="number" id="Prize" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Eg: ₹100 " pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        </div>
    </div>
    <div className="mb-6">
        <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Description</label>
        <input type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description" required />
    </div> 
    
   
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>


    </div>
    <Footer/>
    </>
  );
}

export default AddProduct
