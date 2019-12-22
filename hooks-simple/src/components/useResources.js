import { useState, useEffect } from 'react';
import axios from 'axios';

export const useResources = list => {
    const [resources, setResources] = useState([]);

    // const fetchResource = async () => {
    //     const response = await axios.get(`https://jsonplaceholder.typicode.com/${list}`);
    //     setResources(response.data); 
    // }

    // useEffect(()=> {
    //     fetchResource(list);
    // }, [list])
      //Or we can used Iffe (immediately invoked function expression) way
    useEffect(
    () => {
        (async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/${list}`);
            setResources(response.data); 
        })(list);
    },
    [list]
    );

    return resources;
}


