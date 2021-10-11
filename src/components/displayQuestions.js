import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import Modal from './modal.js'

class Display extends Component {
    state = {questions:[], collate:[], score:0}


    trackAns=(e, i)=>{
        let {collate}= this.state;
        let collect = collate;
        collect[i]= e.target.value;
        this.setState({collate: collect})
        console.log(collect);
    }
    componentDidMount(){
        if (localStorage.getItem("testBank")!== null) {
         let local = JSON.parse(localStorage.getItem("testBank"));
         let {collate}= this.state;
         let total = collate
         let val =local.map((value, i)=>{
             return total.push("")
         })
         this.setState({collate: total})
         this.setState({questions:local}) 
            
        }
    }  
    submit=()=>{
        let {score, collate, questions} = this.state
        let myScore = score
        let computation = questions.map((val, i)=>{
            if (val.key === collate[i]) {
                return myScore +=1
            }
        })
        this.setState({score:myScore})
        
        
        alert(`Hello user, you scored ${myScore} out of ${questions.length} questions`)
    }
   
  
    render() {
     let {questions} = this.state;
        return (
            <div  className="container">
                {questions !== 0 && questions.map((question, i)=>
                 {
                    return(
                    <div key={i}>
                    <div className="m-2"><h2>{question.question}</h2></div>
                    <label > <input type="radio" className="m-2" value={question.choice1} name={i} onChange={(e)=>this.trackAns(e,i)}/>{question.choice1}</label> <br/>

                    <label> <input type="radio" className="m-2" value={question.choice2} name={i} onChange={(e)=>this.trackAns(e,i)}/>{question.choice2}</label> <br/>

                   <label> <input type="radio" className="m-2" value={question.choice3} name={i} onChange={(e)=>this.trackAns(e, i)}/>{question.choice3}</label> <br/>

                   <label> <input type="radio" className="m-2"  value={question.choice4} name={i} onChange={(e)=>this.trackAns(e,i)}/>{question.choice4}</label>
                    <hr/>
                    </div>
                    )
                })}
                    <input type="submit" className=" btn btn-success" onClick={this.submit} value="Submit"/>
                    <Modal/>
    
            </div>
        )
    }
}

export default Display