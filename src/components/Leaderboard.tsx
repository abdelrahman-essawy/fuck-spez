import React from 'react'

function Leaderboard() {
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
      <tr className="bg-white border-b">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
          Egypt
        </th>
        <td className="px-6 py-4">
          123
        </td>
        <td className="px-6 py-4">
          14231
        </td>
      </tr>
      <tr className="bg-white border-b">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            United States
        </th>
        <td className="px-6 py-4">
          231
        </td>
        <td className="px-6 py-4">
          23424
        </td>
      </tr>
      <tr className="bg-white">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            Canada
        </th>
        <td className="px-6 py-4">
          234
        </td>
        <td className="px-6 py-4">
          2435234
        </td>
      </tr>
    </tbody>
  </table>
</div>


    </div>
  )
}

export default Leaderboard