import React from 'react'


const User = () => {
    return (
        <div>

            <div className='bg-white dark:bg-gray-800 h-170'>

                <div className='max-w-full h-160 rounded overflow-hidden shadow-2xl m-2'>

                    <div>
                        <div className='grid grid-cols text-white bg-[#191970] rounded-xl font-bold text-center m-8 p-4 md:text-sm sm:text-sm text-lg'>

                            <div className='flex flex-row justify-center space-x-8'>
                                <div className=''>
                                    <p className='md:text-xl sm:text-xl text-2xl dark:text-gray-400'>
                                        First_Name Last_Name
                                    </p>
                                </div>

                                <div className=''>
                                    <p className='text-lg dark:text-gray-400'>
                                        A/C NO : 9876543210
                                    </p>
                                </div>

                                <div className=''>
                                    <p className='text-lg dark:text-gray-400'>
                                        Account Type : Savings Account
                                    </p>
                                </div>
                            </div>

                            <div className=''>
                                <p className='text-lg dark:text-gray-400 mt-2'>
                                    Available Balance : 10,000/-
                                </p>
                            </div>




                        </div>

                        {/* Table */}
                        <div>


                            <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-4">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs space-x-2 text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

                                        <tr>
                                            {/* <th scope="col" className="p-4">
                                                 <div class="flex items-center">
                                                    <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                                </div> 
                                            </th> */}
                                            <th scope="col" className="px-2 py-2">
                                                Date
                                            </th>
                                            <th scope="col" className="px-2 py-2">
                                                Payment Type
                                            </th>
                                            <th scope="col" className="px-2 py-2">
                                                Detail
                                            </th>
                                            <th scope="col" className="px-2 py-2">
                                                Credit
                                            </th>
                                            <th scope="col" className="px-2 py-2">
                                                Debit
                                            </th>
                                            <th scope="col" className="px-2 py-2">
                                                Balance
                                            </th>
                                        </tr>

                                    </thead>
                                    <tbody>


                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                            {/* <td class="w-4 p-4">
                                                 <div class="flex items-center">
                                                    <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                                        <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                                                </div> 
                                            </td> */}
                                            {/* <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Online
                                            </th> */}
                                            <td class="px-2 py-2">
                                                18-03-2025
                                            </td>
                                            <td class="px-2 py-2">
                                                Online
                                            </td>
                                            <td class="px-2 py-2">
                                                from jon doe
                                            </td>
                                            <td class="px-2 py-2">
                                                10,000
                                            </td>
                                            <td class="px-2 py-2">
                                                0
                                            </td>
                                            <td class="px-2 py-2">
                                                25,000
                                            </td>
                                        </tr>



                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">

                                            <td class="px-2 py-2">
                                                18-03-2025
                                            </td>
                                            <td class="px-2 py-2">
                                                Online
                                            </td>
                                            <td class="px-2 py-2">
                                                from jon doe
                                            </td>
                                            <td class="px-2 py-2">
                                                10,000
                                            </td>
                                            <td class="px-2 py-2">
                                                0
                                            </td>
                                            <td class="px-2 py-2">
                                                25,000
                                            </td>
                                        </tr>



                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">

                                            <td class="px-2 py-2">
                                                18-03-2025
                                            </td>
                                            <td class="px-2 py-2">
                                                Online
                                            </td>
                                            <td class="px-2 py-2">
                                                from jon doe
                                            </td>
                                            <td class="px-2 py-2">
                                                10,000
                                            </td>
                                            <td class="px-2 py-2">
                                                0
                                            </td>
                                            <td class="px-2 py-2">
                                                25,000
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">

                                            <td class="px-2 py-2">
                                                18-03-2025
                                            </td>
                                            <td class="px-2 py-2">
                                                Online
                                            </td>
                                            <td class="px-2 py-2">
                                                from jon doe
                                            </td>
                                            <td class="px-2 py-2">
                                                10,000
                                            </td>
                                            <td class="px-2 py-2">
                                                0
                                            </td>
                                            <td class="px-2 py-2">
                                                25,000
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">

                                            <td class="px-2 py-2">
                                                18-03-2025
                                            </td>
                                            <td class="px-2 py-2">
                                                Online
                                            </td>
                                            <td class="px-2 py-2">
                                                from jon doe
                                            </td>
                                            <td class="px-2 py-2">
                                                10,000
                                            </td>
                                            <td class="px-2 py-2">
                                                0
                                            </td>
                                            <td class="px-2 py-2">
                                                25,000
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">

                                            <td class="px-2 py-2">
                                                18-03-2025
                                            </td>
                                            <td class="px-2 py-2">
                                                Online
                                            </td>
                                            <td class="px-2 py-2">
                                                from jon doe
                                            </td>
                                            <td class="px-2 py-2">
                                                10,000
                                            </td>
                                            <td class="px-2 py-2">
                                                0
                                            </td>
                                            <td class="px-2 py-2">
                                                25,000
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">

                                            <td class="px-2 py-2">
                                                18-03-2025
                                            </td>
                                            <td class="px-2 py-2">
                                                Online
                                            </td>
                                            <td class="px-2 py-2">
                                                from jon doe
                                            </td>
                                            <td class="px-2 py-2">
                                                10,000
                                            </td>
                                            <td class="px-2 py-2">
                                                0
                                            </td>
                                            <td class="px-2 py-2">
                                                25,000
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">

                                            <td class="px-2 py-2">
                                                18-03-2025
                                            </td>
                                            <td class="px-2 py-2">
                                                Online
                                            </td>
                                            <td class="px-2 py-2">
                                                from jon doe
                                            </td>
                                            <td class="px-2 py-2">
                                                10,000
                                            </td>
                                            <td class="px-2 py-2">
                                                0
                                            </td>
                                            <td class="px-2 py-2">
                                                25,000
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">

                                            <td class="px-2 py-2">
                                                18-03-2025
                                            </td>
                                            <td class="px-2 py-2">
                                                Online
                                            </td>
                                            <td class="px-2 py-2">
                                                from jon doe
                                            </td>
                                            <td class="px-2 py-2">
                                                10,000
                                            </td>
                                            <td class="px-2 py-2">
                                                0
                                            </td>
                                            <td class="px-2 py-2">
                                                25,000
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">

                                            <td class="px-2 py-2">
                                                18-03-2025
                                            </td>
                                            <td class="px-2 py-2">
                                                Online
                                            </td>
                                            <td class="px-2 py-2">
                                                from jon doe
                                            </td>
                                            <td class="px-2 py-2">
                                                10,000
                                            </td>
                                            <td class="px-2 py-2">
                                                0
                                            </td>
                                            <td class="px-2 py-2">
                                                25,000
                                            </td>
                                        </tr>







                                    </tbody>
                                </table>
                                <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
                                    <span class="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of <span class="font-semibold text-gray-900 dark:text-white">1000</span></span>
                                    <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                                        <li>
                                            <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                                        </li>
                                        <li>
                                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
                                        </li>
                                        <li>
                                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                                        </li>
                                        <li>
                                            <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
                                        </li>
                                        <li>
                                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                                        </li>
                                        <li>
                                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                                        </li>
                                        <li>
                                            <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>



                        </div>

                    </div>


                </div>

            </div>

        </div>
    )
}

export default User