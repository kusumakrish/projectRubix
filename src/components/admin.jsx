import axios from "axios"
import { useEffect } from "react"

const Admin = () =>{

    useEffect(()=>{
        axios.get("http://localhost:8090/api/getapi").then((data)=>{console.log(data)}).catch((err)=>{console.log(err)});
    })
    return(
        <div>
            <table>
                <tr>
                   <td>S.NO</td>
                   <td>Name</td>
                   <td>Mobile Number</td>
                   <td>image</td>
                   <td>Action</td>
                </tr>
            </table>
        </div>
    )
}

export default Admin;