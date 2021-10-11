import React, { Component } from 'react'

class Displayitem extends Component { 

state = {transactions:[], tot:[], total:0}


// trackAns=(e, i)=>{
//     let {collate}= this.state;
//     let collect = collate;
//     collect[i]= e.target.value;
//     this.setState({collate: collect})
//     console.log(collect);
// }
componentDidMount(){
    if (localStorage.getItem("inventoryList")!== null) {
     let local = JSON.parse(localStorage.getItem("inventoryList"));
     let {tot} = this.state;
     let tt = tot;
     let val =local.map((value, i)=>{
         return tt.push("")
     })
     this.setState({total: tot})
     this.setState({transactions:local}) 
        
    }
} 
   deleteTransaction = (i)=>{
    let {transactions} = this.state;
    transactions = transactions.filter((_, ind)=>i!==ind);
     this.setState({transactions});
   }
// sumTotal(){
//     let {transactions, total}= this.state;
//     let sum = total
// } 
    render() {
        let {transactions, total} = this.state;
        return (
            <div >
            <table border="1px" cellPadding="10" cellSpacing="0">

                <thead>
                <tr>
                    <th>Date</th>
                    <th>Inventory No</th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Unit Cost</th>
                    <th>Total</th>
                    <th>Image</th>
                </tr>
                </thead>
            
            {transactions.map((transact, i)=>{

            return(
              
                <tbody>
                <tr key={i} >
                    <td>{transact.date}</td>
                    <td>{transact.invNo}</td>
                    <td>{transact.item}</td>
                    <td>{transact.quantity}</td>
                    <td>{transact.unitCost}</td>
                    <td>{transact.total}</td>
                    <td><a href={transact.img}>View</a></td>
                    <td><button onClick={()=>this.deleteTransaction()} >Delete</button></td>
                </tr>
                </tbody>
                
                )
            })}
            </table>
            </div>
        )
    }
}
export default Displayitem;