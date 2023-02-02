import axios from 'axios'
import User from '../model/user'


export function GetUserPofile() {
const tokenAccess = JSON.parse(String(localStorage.getItem("token")))
  let config = {
      headers: {
        'Authorization': 'Bearer ' + tokenAccess
      }
    }
  return new Promise<{ data: User }>((resolve) => 
  axios.get("http://127.0.0.1:8000/api/users/profile/", config).then(res => resolve({ data: res.data }))
  )
}
