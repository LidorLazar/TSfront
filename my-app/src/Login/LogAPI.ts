import axios from 'axios'

export function loginUser(detalis:any) {;
  return new Promise<{ data: any, status: number }>((resolve) =>
  axios.post("http://127.0.0.1:8000/api/users/login/", { username: detalis.user , password: detalis.password }).then((res) => resolve({ data: res.data, status: res.status })))

}


  export function RegisterUser(detalis:any) {;
    console.log(detalis)
    return new Promise<{ data: any }>((resolve) =>
    axios.post("http://127.0.0.1:8000/api/users/register/", { email: detalis.email , password: detalis.password, name: detalis.username }).then((res) => resolve({ data: res.data })))}
  
    
    export function logOutUser() {
      return new Promise<{ data: any }>((resolve) => resolve({ data: false }));
    }
  
    
    
   