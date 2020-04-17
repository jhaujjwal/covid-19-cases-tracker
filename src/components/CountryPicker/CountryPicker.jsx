import React,{useState,useEffect} from 'react'
import {NativeSelect,FormControl} from '@material-ui/core'
import {countriesData} from '../../api'
import styles from './CountryPicker.module.css'
const CountryPicker = ({countryChanged}) => {
    const [fetchedCountriesData,setFetchCountriesData]=useState([]);

    useEffect(()=>{
        const fetchedData=async ()=>{
            setFetchCountriesData(await countriesData());
        }
        fetchedData();
    },[]);
    return (
        <FormControl className={styles.formControl}>
            <NativeSelect 
            defaultValue="" 
            onChange={(e)=>countryChanged(e.target.value)}>
                <option 
                 value="">
                     Global
                </option>
                {fetchedCountriesData.map((country,i)=>
                <option  
                key={i} 
                value={country}>{country}
                </option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
