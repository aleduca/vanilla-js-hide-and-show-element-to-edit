import http from '../http';

export default async function getUsers(){
    try{
        const { data } = await http.get('/list');
        return data;
    }catch(error){
        throw new Error(error);
        // console.log(error);
    }
}