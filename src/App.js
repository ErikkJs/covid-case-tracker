import React from "react";
import { fetchData } from "./api";
import styles from "./App.module.css";
import { Cards, Chart, CountryPicker } from "./components";

import coronaImage from './images/csGod.png'

class App extends React.Component {
  state = {
    data: {},
    country: '',
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    // fetch the needed data
    const fetchedData = await fetchData(country);
    // next lets set the state
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data = {data} country={country}/>
      </div>
    );
  }
}
export default App;
