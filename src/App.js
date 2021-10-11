
import React, { Component } from 'react';
import Inventory from './components/Inventory';
import Displayitem from './components/Displayitem'
import {Route, Switch, Link} from 'react-router-dom';
import Checkout from './components/Checkout';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import './App.css'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Display from './components/displayQuestions'
// import AddStudent from './components/addstudent';
// import Button from './components/button';
// import DisplayStudent from './components/displaystudents';
// import Input from './components/input'



// class App extends Component {
//   state = { students: [{name: "Taiwo",dept: "software", school: "SQI"},
//   {name: "Kenny",dept: "hardware", school: "SQI"},
//   {name: "Idowu",dept: "CSE", school: "LAUTECH"}], input:{firstname:"", lastname:"", department:"", school:""}, };
 
 
//   deleteStudent = i=>{
//     let {students} = this.state;
//     students = students.filter((_, ind)=>ind!==i);
//     this.setState({students});
//   }
//   addStudent = student=>{
//     let {students} = this.state;
//     this.setState({students: [...students, student]})
//   }
//   setInfo=(e)=>{
//     this.setState({[e.target.name]: e.target.value});
//     }
//   render() { 
//     let {students}= this.state;
//     let {input}= this.state;
//     return <>

//     {students.length>0?
//          students.map((student, i)=>(
//            <DisplayStudent key={i} std={student} delStudent={()=>this.deleteStudent(i)}/>
//            ))
//            :
//            <div>No student present</div>
//          }
//       {/* {input.map((input,i)=>(
//         <Input key={i} inp={input} inpStd={()=>this.setInfo(i)}/>
//       ))}     */}
//        <AddStudent addStd={this.addStudent}/>
   
//     </>
//   }
// }

// export default App





 class App extends Component {
  //  state = {step:0}

  //  setStep(){
  //    let {step} = this.state
  //    let current = step
  //    current = 1
  //    this.setState({step: current})
  //  }
  styles={
    fontFamily: 'Poppins'
    
  }
  render() {
    // let {step} = this.state
    return (
      <div style={this.styles} className="div" >
        <Login/>
       <Navbar className="App-header"/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/About" component={About}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/Admin" exact component={Inventory + Displayitem}/>
        {/* <Route path="/User" exact component={Displayitem}/> */}
        <Route path="/Checkout" component={Checkout}/>

      </Switch>
        { <Inventory/> }
        <br/>
        <br/>
        <br/>
        <hr/>
        <Displayitem/>
        <br/>
        {/* <Checkout/> */}
      </div>
    )
  }
}
export default App
{/* {step === 0 && <Form step={this.setStep}/>}
{step === 1 && <Display/> } */}