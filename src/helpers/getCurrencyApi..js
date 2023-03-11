import Axios from 'axios';

export const getApi = (from,info,setInfo) =>{
        
        try{
            Axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`)
                .then((res) => setInfo(res.data[from]))
        }
        catch(e){
            console.log(e);
        }
 
        return {info};
}
