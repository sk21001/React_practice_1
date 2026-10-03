import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import DisplayTask from './DisplayTask'


const App = () => {
 
 const [uname,setUname]=useState('')
 const [password,setPassword]=useState('')
 const [submittedName,setSubmittedName]=useState('')
 const [submittedPassword,setSubmittedPassword]=useState('')
 
  
    function getTheInputValue(e){
     e.preventDefault();
     setSubmittedName(uname)
     setSubmittedPassword(password)
  
    }
   return (
    <>
    <form class="row g-3" onSubmit={getTheInputValue} >
    <div class="col-md-6">
    <label class="form-label">UserName</label>
    <input onChange={(e)=>setUname(e.target.value)} type="text" class="form-control" id="name"/>
    </div>
    <div class="col-md-6">
    <label class="form-label">Password</label>
    <input onChange={(e)=>{setPassword(e.target.value)}} type="password" class="form-control" id="pass"/>
    </div>
    <div class="col-12">
    <button type="submit" class="btn btn-primary w-50 d-block mx-auto" >Submit</button>
    </div>
    </form>
    <DisplayTask uname={submittedName} password={submittedPassword}/>
    </>
  )

}

export default App