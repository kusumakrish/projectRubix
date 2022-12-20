import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
// import { useEffect } from 'react';
// import axios from "axios";


const Form =()=>{

let [formData, setFormData] = useState("");
const onSubmit =(data) => {
console.log(data);
  setFormData(data);
}
// useEffect(()=>{
//     axios.post("http://localhost:8090/api",formData).then(()=>console.log("data posted succusfully")).catch((err)=>{console.log(err)});
//     console.log(formData);
// },[formData]);

const schema = yup.object({
    name: yup.string().required(),
    email:yup.string().required().matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"It should be a proper email"),
    phone:yup.string().required().min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits')
  
  }).required();

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });





  return (
    <div>
        <div className='secondsection'>
            <div className='contentabout'>
                <h3 style={{color:"blue"}}>Who We Are</h3>
                Rubixe™ is a global technology company specializing in disruptive technologies – Artificial Intelligence (AI), Machine Learning, Robotic Process Automation (RPA), BlockChain and Internet of Things (IoT). Rubixe mission to enable businesses to leverage the full potential of disruptive technologies to stay competitive in the market.<br/>

                Started in 2008, providing technology solutions based in the Netherlands, founders of Rubixe™ have gained expertise in cutting-edge technology through delivering several smart city solutions for European Commission (EC) projects.<br/>
</div>
            <div>
                <img className='image' src='https://rubixe.com/assets/img/aboutus/about-us.jpg' alt="img"/>
            </div>

        </div>
        <div className='thirdsection'>
            <br/>
            <h3 style={{marginLeft:"140px", color:"white" , fontSize:"20px"}}>Where We Started</h3><br/>
            <div className='thirdconten'>
            Started in 2008, providing technology solutions based in the Netherlands, founders of Rubixe™ have gained expertise in cutting-edge technology through delivering several smart city solutions for European Commission (EC) projects.
            </div>
        </div>
        <p className='Tech'>TECH FOR TEENS - A RUBIX INITIATIVE</p><br/>
        <div className='foursection'>
               <div className='card'>
                <div style={{backgroundColor:"blue", height:"40px",borderRadius:"20px"}}></div>
                    <img className="cardimages" src='https://tse3.explicit.bing.net/th?id=OIP.HWL8Pdwo4TgdmeCU1ZnE5gHaE8&pid=Api&P=0'alt="img"/>
                    <span style={{color:"black",textAlign:"center" ,marginTop:"40px",fontWeight:"bold"}}>Introducing AI   to children in an age  appropriate   manner.</span>
               </div>
               <div className='card'>
                <div style={{backgroundColor:"blue", height:"40px", marginTop:"300px",borderRadius:"20px"}}></div>
                <span style={{color:"black",textAlign:"center" ,marginTop:"0px",fontWeight:"bold", position:"relative",bottom:"284px"}}>Gain awarness   on AI and build an interactive story around it</span>
                <img style={{marginTop:"-224px"}}className="cardimages" src='https://tse3.mm.bing.net/th?id=OIP.sBjipUfbQtANUbCDmpXX-wHaE8&pid=Api&P=0' alt="img"/>
               </div>
               <div className='card'>
                <div style={{backgroundColor:"blue", height:"40px",borderRadius:"20px"}}></div>
                <img className="cardimages" src='https://tse4.mm.bing.net/th?id=OIP.-M1rVyipgT4LLylu6XvMoQHaE8&pid=Api&P=0' alt="img"/>
                    <span style={{color:"black",textAlign:"center" ,marginTop:"40px",fontWeight:"bold"}}>Acquire proramming skills in a user-friendly format</span>
               </div>
               <div className='card'>
                <div style={{backgroundColor:"blue", height:"40px",marginTop:"300px",borderRadius:"20px"}}></div>
                <span style={{color:"black",textAlign:"center" ,marginTop:"0px",fontWeight:"bold", position:"relative",bottom:"284px"}}>Exposure to mini projects on diverse topics</span>
                <img style={{marginTop:"-224px"}}className="cardimages" src='https://tse4.mm.bing.net/th?id=OIP.HZ9w8YiyROitCGC910VXAQHaE7&pid=Api&P=0'alt="img"/>
               </div>
        </div><br/>
        <div className='Form'>
            <div>
                <span style={{position:"relative",top:"200px",left:"200px",fontSize:"26px",color:"green",fontWeight:"bold"}}>GET IN TOUCH</span><br/>
                <span style={{position:"relative",top:"200px",left:"120px" ,color:"orange"}}>please complete the form and will get back to you</span>
            </div>
            <div className='borderline'></div>
            
        <form onSubmit={handleSubmit(onSubmit)}>

            <b>Name :</b><input type={"text"}   {...register("name")}/> <br></br><br/>
            <p style={{color:"red"}}>{errors.name?.message}</p>
            
            <b>Email :</b><input type={"text"}  {...register("email")}/> <br></br><br/>
            <p style={{color:"red"}}>{errors.email?.message}</p>

            <b>Phone :</b><input type={"text"}  {...register("phone")}/> <br></br><br/>
            <p style={{color:"red"}}>{errors.phone?.message}</p>
            
            <button type='submit' style={{padding:"10px 40px ",backgroundColor:"green", borderRadius:"10px",marginLeft:"60px"}}>
                Submit 
            </button>
        </form>
        </div>

    </div>
  )
}

export default Form
