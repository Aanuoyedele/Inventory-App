import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Form extends Component {

  state= {question:"", choice1:"", choice2:"", choice3:"", choice4:"", key:""};

  submit =()=>{

    let {question, choice1, choice2, choice3, choice4, key}= this.state;
    
    if( question && choice1 && choice2 && choice3 && choice4 && key ){

    
    if(localStorage.getItem("testBank") === null){
      let test = [] 
      test.push(
        {question:question, choice1:choice1, choice2:choice2, choice3:choice3, choice4:choice4, key:key}
      )
      localStorage.setItem("testBank", JSON.stringify(test))
    }
    else {
      let local = JSON.parse(localStorage.getItem("testBank"));
      local.push(
        {question:question, choice1:choice1, choice2:choice2, choice3:choice3, choice4:choice4, key:key}
      )
      localStorage.setItem("testBank", JSON.stringify(local))
    }
    this.setState({question:"", choice1:"", choice2:"", choice3:"", choice4:"", key:""})
  } else{
    alert("Hello Admin, kindly fill in all required textboxes then click submit")
  }

  }
    // setStep(){
    // let {step} = this.props
    // }
    clearQuestion(){
     localStorage.removeItem("testBank")        
    }

   style={
     width: 500
   }

  render() {
    let {question, choice1, choice2, choice3, choice4, key}= this.state;
    let{width}= this.style;
    
    return (
      <div className="container">
        <h2> Hello, Admin, Kindly set your questions here.</h2>
        <input type="text" className="m-2" style={{width}} placeholder="Input Question" onChange={(e)=>this.setState({...this.state, question:e.target.value})} value={question}/>
        <br/>
        <input type="text" className="m-2" style={{width}} placeholder="Input Option 1" onChange={(e)=>this.setState({...this.state, choice1:e.target.value})} value={choice1} />
        <br/>
        <input type="text" className="m-2" style={{width}} placeholder="Input Option 2" onChange={(e)=>this.setState({...this.state, choice2:e.target.value})} value={choice2}/>
        <br/>
        <input type="text" className="m-2" style={{width}} placeholder="Input Option 3" onChange={(e)=>this.setState({...this.state, choice3:e.target.value})} value={choice3}/>
        <br/>
        <input type="text" className="m-2" style={{width}} placeholder="Input Option 4" onChange={(e)=>this.setState({...this.state, choice4:e.target.value})} value={choice4} />
        <br/>
        <input type="text" className="m-2" style={{width}} placeholder="Input Correct Answer" onChange={(e)=>this.setState({...this.state, key:e.target.value})} value={key} />
        <br/>
        <input type="submit" className=" btn btn-primary mt-2 m-2" onClick={this.submit} value="Save Question"/>
        {/* <input type="submit" onClick={this.setStep} value="start"/> */}
        <input type="submit" className=" btn btn-success mt-2 m-2" onClick={this.clearQuestion} value="Clear Question"/>
      </div>
    )
  }
}
export default Form
