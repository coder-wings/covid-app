import axios from 'axios'
import React from 'react'


async function getCovidData(callBack){
    try{
        const response=await axios.get('https://api.rootnet.in/covid19-in/stats/latest')
        //console.log(response);
        if(response.status===200){
            callBack(response);
        }
    }catch(error){
        console.log(error);
    }
}

export default getCovidData;
