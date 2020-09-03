import axios from "axios";

const url = "https://covid19.mathdro.id/api";
const summaryUrlWorldwide =  'https://api.covid19api.com/summary'


export const fetchData = async (country) => {
  let changeableUrl = url;
  if(country){
    changeableUrl = `${url}/countries/${country}`
  }
  try {
    // destructing to get data
    const {data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(changeableUrl);
    return { confirmed, recovered, deaths, lastUpdate};
  } catch (e) {
    console.log(e)
  }
};

/*

fetches the summary globally 

*/
export const fetchSummary = async () => {
      // destructing to get data
  const { data: { Global: { NewConfirmed, NewDeaths, NewRecovered } } } = await axios.get(summaryUrlWorldwide)
  return { NewConfirmed, NewDeaths, NewRecovered };
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const dataToReturn = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      recovered: dailyData.recovered.total,
      date: dailyData.reportDate,
    }));
    return dataToReturn;
  } catch (e) {}
};

export const fetchCountries = async () => {
  try{
    const { data: {countries} } = await axios.get(`${url}/countries`)
    return countries.map((country) => country.name)
  }catch(e){
    console.log(e)
    return []
  }
}