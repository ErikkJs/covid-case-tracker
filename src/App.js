import React from "react";
import { fetchData, fetchSummary } from "./api";
import styles from "./App.module.css";
import {
  Cards,
  Chart,
  CountryPicker,
  Header,
  ChangesSummary,
} from "./components";
import { Container, Grid } from "@material-ui/core";

class App extends React.Component {
  state = {
    data: {},
    country: "",
    summary: {},
  };
  async componentDidMount() {
    let fetechedData = fetchData();
    let fetechedSummary = fetchSummary();
    this.setState({
      data: await fetechedData,
      summary: await fetechedSummary,
    });
  }
  handleCountryChange = async (country) => {
    // fetch the needed data
    const fetchedData = await fetchData(country);
    // next lets set the state
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country, summary } = this.state;
    return (
      <div>
        <Container disableGutters={true} maxWidth={false}>
          <Grid container spacing={0}>
            <Grid item md={12} xs={12}>
              <Header></Header>
            </Grid>
            <Grid item md={12} xs={12}>
              <div className={styles.countrySelectorSection}>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
              </div>
            </Grid>
          </Grid>
        </Container>
        <Container maxWidth={false}>
          <Grid container spacing={4} alignItems="center" direction="row">
            <Grid item md={3} xs={12}>
              <Cards data={data} />
            </Grid>
            <Grid
              container
              md={6}
              xs={12}
              spacing={3}
              direction="column"
              alignItems="center"
              justify="space-between"
            >
                <ChangesSummary data={summary}></ChangesSummary>
                <Chart  data={data} country={country} />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}
export default App;
