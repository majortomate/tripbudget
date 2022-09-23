import React from 'react';
import { daysBetweenDates } from '../../pages/services/calculateBudgets';

function TableTrip({ currentTrip }) {
  return (
    <div className="overflow-x-auto rounded-lg relative shadow-md">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 bg-white rounded-lg border-collapse overflow-hidden">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
          <tr className="text-center">
            <th scope="col" className="py-3 px-3">
              Destination
            </th>
            <th scope="col" className="py-3 px-3">
              # Days
            </th>
            <th scope="col" className="py-3 px-3">
              Food
            </th>
            <th scope="col" className="py-3 px-3">
              Accomodation
            </th>
            <th scope="col" className="py-3 px-3">
              Transportation (arrive to destination)
            </th>
            <th scope="col" className="py-3 px-3">
              Local Transportation (Bus, taxi)
            </th>
            <th scope="col" className="py-3 px-3">
              Souvenirs
            </th>
            <th scope="col" className="py-3 px-3">
              Tours /Entrances
            </th>
            <th scope="col" className="py-3 px-3">
              Others
            </th>
          </tr>
        </thead>
        {currentTrip?.destinations?.map((destination) => (
          <tbody key={destination._id}>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
              <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {destination.cityName}
              </th>
              <td className="py-4 px-6">
                {daysBetweenDates(new Date(destination.stayDateFrom), new Date(destination.stayDateTo))}
              </td>
              <td className="py-4 px-6">
                $
                {destination.foodDailyBudget}
              </td>
              <td className="py-4 px-6">
                $
                {destination.accomodationDailyBudget}
              </td>
              <td className="py-4 px-6">
                $
                {destination.transportationDailyBudget}
              </td>
              <td className="py-4 px-6">
                $
                {destination.localTransportationBudget}
              </td>
              <td className="py-4 px-6">
                $
                {destination.souvenirsDailyBudget}
              </td>
              <td className="py-4 px-6">
                $
                {destination.toursAndEntrancesDailyBudget}
              </td>
              <td className="py-4 px-6">
                $
                {destination.othersDailyBudget}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default TableTrip;
