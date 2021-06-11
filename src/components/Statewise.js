import React from 'react'
import {useState,useEffect} from 'react'
import getCovidData from "../services/Coviddata";

function Statewise() {
    const [regional,setRegional]=useState(null);
    useEffect(() => {
        getCovidData((data)=>{
            console.log(data);
            setRegional(data.data.data.regional)
        })
        console.log(regional)
        // return () => {
        //     cleanup
        // }
    }, [])
    return (
        <div>
            <h1>this is statewise page</h1>
        </div>
        
    )
}

export default Statewise
