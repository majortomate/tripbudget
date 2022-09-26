/* eslint-disable no-plusplus */
export const getTotalTripDailyBudget = (destinations) => {
  const totalBudget = [];

  totalBudget.push(
    destinations.reduce((n, { accomodationDailyBudget }) => n + Number(accomodationDailyBudget), 0),
    destinations.reduce((n, { foodDailyBudget }) => n + foodDailyBudget, 0),
    destinations.reduce((n, { transportationDailyBudget }) => n + Number(transportationDailyBudget), 0),
    destinations.reduce((n, { localTransportationBudget }) => n + Number(localTransportationBudget), 0),
    destinations.reduce((n, { souvenirsDailyBudget }) => n + Number(souvenirsDailyBudget), 0),
    destinations.reduce((n, { toursAndEntrancesDailyBudget }) => n + Number(toursAndEntrancesDailyBudget), 0),
    destinations.reduce((n, { othersDailyBudget }) => n + Number(othersDailyBudget), 0),
  );

  const noEmptyOnes = totalBudget.map((value) => (!value ? 0 : value));

  return noEmptyOnes.reduce((x, y) => x + y, 0);
};

export const getTotalSingleDestinationDailyBudget = (destination) => {
  const budgetItems = Object.entries(destination).filter(([key]) => key.includes('Budget'));

  const values = budgetItems.flat().filter((item) => typeof item === 'number');

  return values.reduce((accumulator, value) => accumulator + value, 0);
};

export const sumAllSingleDestBudget = (destination) => destination.accomodationDailyBudget + destination.foodDailyBudget + destination.localTransportationBudget + destination.othersDailyBudget + destination.souvenirsDailyBudget + destination.toursAndEntrancesDailyBudget + destination.transportationDailyBudget;

export const totalByDestination = (destination = {}) => {
  const total = destination.accomodationDailyBudget + destination.foodDailyBudget + destination.transportationDailyBudget + destination.localTransportationBudget + destination.souvenirsDailyBudget + destination.toursAndEntrancesDailyBudget + destination.othersDailyBudget;

  return total;
};

export const daysBetweenDates = (from, to) => {
  const difference = to.getTime() - from.getTime();
  const TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
  return TotalDays;
};
