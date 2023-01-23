import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (url) => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
            .get(url)
            // .then((response) => {
            //     if (!response.ok) {
            //         throw new Error ('HTTP error' + response.status)
            //     }
            //     if(response.headers.get("content-type").indexof("application/json")!==-1) {
            //         return response.json()
            //     } else {
            //         throw new Error('Response not JSON')
            //     }
            // })
            .then((data) => {
                setData(data.data)})
            .catch((error) => {
                console.log(error)
            })
    }, [url])

    return data
}

export default useRequestData