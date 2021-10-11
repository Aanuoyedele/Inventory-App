import React, {Component} from 'react'


 class Inventory extends Component {
     state={date:"", invNo:"",item:"",unitCost:"",quantity:"", img:[]};

     sumTotal=()=>{
      let {date, invNo,item, unitCost, quantity, }= this.state;
      let sum = Number(unitCost) * Number(quantity);
      let tot = sum;
      this.setState({tot:sum});
      console.log(sum)
      console.log(tot)

     }

     submit =()=>{

        let {date, invNo,item, unitCost, quantity, img }= this.state;
        
        if( date && invNo && item && unitCost && quantity && img ){
    
        
        if(localStorage.getItem("inventoryList") === null){
          let inventory = [] 
          inventory.push(
            {date:date, invNo:invNo, item:item, unitCost:unitCost, quantity:quantity, img:img}
          )
          localStorage.setItem("inventoryList", JSON.stringify(inventory))
        }
        else {
          let local = JSON.parse(localStorage.getItem("inventoryList"));
          local.push(
            {date:date, invNo:invNo, item:item, unitCost:unitCost, quantity:quantity, img:img}
          )
          localStorage.setItem("inventoryList", JSON.stringify(local))
        }
        this.setState({date:"", invNo:"",item:"",unitCost:"",quantity:"", img:[]})
      } else{
        alert("Hello, kindly input the necessary details.")
      }
    
      }
     
    render() {
        let {date, invNo,item, unitCost, quantity, img}= this.state;
        return (
            <div>
                <input type="date" placeholder="Enter Date"  onChange={(e)=>this.setState({...this.state, date:e.target.value})} value={date}/>
                <br/>
                <input type="number" placeholder="Enter Inventory Number"  onChange={(e)=>this.setState({...this.state, invNo:e.target.value})} value={invNo}/>
                <br/>
                <input type="text" placeholder="Enter Product Name"  onChange={(e)=>this.setState({...this.state, item:e.target.value})} value={item}/>
                <br/>
                <input type="text" placeholder="Enter Unit Cost" onChange={(e)=>this.setState({...this.state, unitCost:e.target.value})} value={unitCost}/>
                <br/>
                <input type="text" placeholder="Enter Quantity Bought"  onChange={(e)=>this.setState({...this.state, quantity:e.target.value})} value={quantity}/>
                <br/>
                <input type="file" placeholder="Enter Product Picture"  onChange={(e)=>this.setState({...this.state, img:e.target.value})} value={img}/>
                <br/>
                <input type="submit" value="Add Item" onClick={this.submit}/>
            </div>
        )
    }
}


export default Inventory