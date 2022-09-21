export const getTotalTripDailyBudget = (destinations) => {
  const totalBudget = [];

  totalBudget.push(
    destinations.reduce((n, { accomodationDailyBudget }) => n + accomodationDailyBudget, 0),
    destinations.reduce((n, { foodDailyBudget }) => n + foodDailyBudget, 0),
    destinations.reduce((n, { transportationDailyBudget }) => n + transportationDailyBudget, 0),
    destinations.reduce((n, { localTransportationBudget }) => n + localTransportationBudget, 0),
    destinations.reduce((n, { souvenirsDailyBudget }) => n + souvenirsDailyBudget, 0),
    destinations.reduce((n, { toursAndEntrancesDailyBudget }) => n + toursAndEntrancesDailyBudget, 0),
    destinations.reduce((n, { othersDailyBudget }) => n + othersDailyBudget, 0),
  );

  return totalBudget.reduce((x, y) => x + y, 0);
};

export const getTotalSingleDestinationDailyBudget = (destination) => {
  const budgetItems = Object.fromEntries(
    Object.entries(destination).filter(([key]) => key.includes('Budget')),
  );
  const noEmptyValue = Object.values(budgetItems).map((value) => (!value ? 0 : value));

  return Object.values(noEmptyValue).reduce((accumulator, value) => accumulator + value, 0);
};
