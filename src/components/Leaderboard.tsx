import Image from 'next/image';
import React from 'react';

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
    
  ];

  function formatNumber(number: number): string {
    const countFormatted = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return countFormatted;
  }

  const sortedData = data.sort((a, b) => b.count - a.count);

  return (
    <div className="md:w-1/2 w-full">
      <div className="relative overflow-x-auto shadow-md rounded-lg bg-white  h-96 overflow-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white">
            Leaderboard
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 sticky top-0">
                      <tr>
                                        <th scope="col" className="px-6 py-3">
                Place
              </th>
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
  {sortedData.map((row, index) => (
      <tr key={index}>
          <td className="px-6 py-4 whitespace-nowrap">
                        <p>{index+1}</p>
          </td>
          
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10 flex justify-center items-center gap-2">
            <Image
              width={22}
              height={22}
              src={`https://flagcdn.com/16x12/${row.countryCode}.webp`}
              alt={row.country}
            />
          </div>
          <div className="ml-4">
            <div className="text-sm font-medium text-gray-900">{row.country}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{formatNumber(row.participants)}</div>
      </td>
      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
        {formatNumber(row.count)}
      </td>
    </tr>
  ))}
</tbody>

        </table>
      </div>
    </div>
  );
}

export default Leaderboard;
