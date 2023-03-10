import Axios from 'axios';

export const getApi = (from) =>{
        return Axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
           .then((res) => res.data[from])
}