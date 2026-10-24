// mpm i axios

import type { AxiosResponse } from "axios";
import axios = require("axios");

axios.get("https://example.com/data")
.then(res =>{
    console.log(res.data)
})


/* url : https://jsonplaceholder.typicode.com/todos/1
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
} */


interface Todo {
  userId: number,
  id: number,
  title: string,
  completed: boolean
}

const fetchData = async () =>{
    try {
        const response:AxiosResponse<Todo> = await axios
        .get("https://jsonplaceholder.typicode.com/todos/1");

        console.log("Todo : ", response.data);
    } catch (error : any) {
        if(axios.isAxiosError(error)){
            console.log("Axios Error", error.message);
            if(error.response){
                console.log(error.response.status);
            }
        }
    }
}