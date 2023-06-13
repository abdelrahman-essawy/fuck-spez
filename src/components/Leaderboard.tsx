import Image from 'next/image'
import React from 'react'

function Leaderboard() {

    const data = [
        {
            country: 'Egypt',
            participants: 123,
            count: 14231,
            countryCode: 'eg',
        },
        {
            country: 'United States',
            participants: 231,
            count: 23424,
            countryCode: 'us',
        },
        {
            country: 'Canada',
            participants: 234,
            count: 2435234,
            countryCode: 'ca',
        },
    ]
  return (
      <div>
          


<div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
  <table className="w-full text-sm text-left text-gray-500">
    <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white">
      Leaderboard
      {/* <p className="mt-1 text-sm font-normal text-gray-500">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p> */}
    </caption>
    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
      <tr>
        <th scope="col" className="px-6 py-3">
          Country
        </th>
        <th scope="col" className="px-6 py-3">
          Participants
        </th>
        <th scope="col" className="px-6 py-3">
          Count
        </th>
      </tr>
    </thead>
    <tbody>
                      {data.map((row, index) => ( 
                          <tr key={index} className="bg-white">

                              <td className="px-6 py-4 whitespace-nowrap">
                                  
                                    <div className="flex items-center">
                                      <div className="flex-shrink-0 w-10 h-10">
                                          <Image
                                              width={22}
                                              height={22}
                                              src={`https://flagcdn.com/16x12/${row.countryCode}.webp`}
                                              alt={row.country}
                                          />
                                          
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">{row.country}</div>
                                            {/* <div className="text-sm text-gray-500">Optimization</div> */}
                                        </div>
                                  </div>
                              </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{row.participants}</div>
                                  {/* <div className="text-sm text-gray-500">Admin</div> */}
                              </td>
                              <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">{row.count}</td>
                          </tr>
                      ))}
                      
    </tbody>
  </table>
</div>


    </div>
  )
}

export default Leaderboard