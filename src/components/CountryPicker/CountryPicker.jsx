import React, { useState, useEffect } from "react";
import { FormControl, Select,  MenuItem } from "@material-ui/core";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api";


const CountryPicker = ({handleCountryChange}) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries( await fetchCountries());
    }
    fetchAPI();
  }, [setFetchedCountries]);
  
  return (
    <FormControl className={styles.formPosition} >
      <Select className={styles.formControl} defaultValue="Global" onChange={(e) => handleCountryChange(e.target.value)}>
      <MenuItem value="">Global</MenuItem>
        {fetchedCountries.map((country, i) => <MenuItem key={i} value={country}>{country}</MenuItem>)}
      </Select>
    </FormControl>
  );
};

export default CountryPicker;
