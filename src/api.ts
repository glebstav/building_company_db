import axios from "axios";



export async function getNamesByTableNames(name: string){
    const res = await axios.get(`http://localhost:1337/names/?table=${name}`);
    return res.data;
}

export async function getTableByTableName(name: string){
    const res = await axios.get(`http://localhost:1337/?table=${name}`);
    return res.data;
}

export async function getQuery(num: number, name?: string){
    let res;
    if (name !== undefined){
        res = await axios.get(`http://localhost:1337/query/?id=${num}&name=${name}`);
    } else {
        res = await axios.get(`http://localhost:1337/query/?id=${num}`);
    }
    console.log(res.data);
    return res.data;
}