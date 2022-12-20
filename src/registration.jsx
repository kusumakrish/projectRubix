const { useState } = require("react")
import axios from "axios"

const Registration = () => {
    const [data , setData] = useState({
        userName : "",
        password: "",
        confirmpassword : ""
    })
    const [response,setResponse] = useState("");

    const handleChange = (e) => {

        let newData = {...data}
        newData[e.target.name] = e.target.value;
        setData(newData);
        console.log(data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:9090/data/register",data).then((res)=>{setResponse(res.data)});
    }

    return(
        <div>
            <form>
                email<input type="text" name="userName" onChange={handleChange}/><br/>
                password<input type="text" name="password" onChange={handleChange}/><br/>
                confirmpassword<input type="text" name="confirmpassword" onChange={handleChange}/><br/>
                <button onClick={handleSubmit}>submit</button>
            </form>

            <div>
                <p>{data.userName}</p>
                <p>{data.password}</p>
                <p>{response}</p>
            </div>
        </div>
    )
}

export default Registration;