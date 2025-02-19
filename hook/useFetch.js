import {useState, useEffect} from "react"
import axios from "axios"

import { isLoaded, isLoading } from "expo-font"

const useFetch = (endpoint, query) =>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        params: {
          ...query
        },
        headers: {
          'x-rapidapi-key': 'e69769c354msh0afca4a61bea695p1f23edjsnd55052b08838',
          'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
      };
      
    const fetchData = async () =>{
        setIsLoading(true);

        try{
            const response = await axios.request(options);

            setData(response.data.data)
            setIsLoading(false)
        }catch(error){
            setError(error)
            alert("there is an error")
        }finally{
            setIsLoading(false);
        }
    } 
    
    useEffect(() =>{
        fetchData()
    }, [])

    const refetch = () =>{
        setIsLoading(true);
        fetchData()
    }

    return {data, isLoading, error, refetch};
}

export default useFetch;