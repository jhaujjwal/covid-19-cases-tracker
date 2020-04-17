import React from 'react';
// import Cards from './components/Cards/Cards'
// import Chart from './components/Chart/Chart'
// import CountryPicker from './components/CountryPicker/CountryPicker'
import {Cards,Chart,CountryPicker,Footer} from './components'
import {fetchData} from './api';
import styles from './App.module.css'
import coronaImage from './images/image.png'
class App extends React.Component{

    state={
        data:{},
        country:'',
    }

     async componentDidMount(){
        const fetchedData=await fetchData();
        this.setState({data:fetchedData})
        //console.log(fetchedData);
    }

    countryChangedHandler=async(country)=>{
        console.log(country)
        const fetchedData=await fetchData(country) 
        this.setState({data:fetchedData,country:country})
    }
    render(){
        const {data,country}=this.state  
        return(
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19"/> 
                <Cards data={data}/>
                <CountryPicker countryChanged={this.countryChangedHandler}/>
                <Chart data={data} country={country}/>
                <Footer />
            </div>
        )
    };
}
export default App