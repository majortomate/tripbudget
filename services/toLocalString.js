const setTime = (timestamp) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };

  const dateSet = new Date(timestamp);

  return dateSet.toLocaleDateString('en-US', options);
};

export default setTime;
