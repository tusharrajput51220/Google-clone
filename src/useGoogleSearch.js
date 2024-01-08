import { useEffect, useState } from 'react'
import API_KEY from './keys'

const useGoogleSearch = (term) => {
    const CONTEXT_KEY="a6e3c05a521c54cd6"
    const [data, setData]=useState(null)
    useEffect(() =>{
        const fetchData = async() => {
            try {
                const response = await fetch(
                  `https://www.googleapis.com/customsearch/v1/?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
                );
                const result = await response.json();
                console.log("Result: ", result);
                setData(result);
              } catch (error) {
                console.error('Error fetching data:', error);
              }
            };
        
            if (term) {
              fetchData();
            }
    },[term])

  return { data }
}

export default useGoogleSearch
// https://www.googleapis.com/customsearch/v1/?key=AIzaSyBteFoH_lI0ySjmxQZL0zDENc_uk7xRMoM&cx=a6e3c05a521c54cd6&q=cars