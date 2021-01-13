
import React, { Component } from 'react';

import  './comp/style.css';

class App extends Component{
constructor(){
  super()
  this.state={
    todo_Array:[],
    current_Todo:'',
    done:"",


  }
}

todoAdd=(e)=>{
  this.state.current_Todo=e.target.value;

this.setState({
  todo_Array:this.state.todo_Array
})

}

submit=()=>{

if (this.state.current_Todo=="") {
  alert("Enter something")
  
} else {
  this.state.todo_Array.push(this.state.current_Todo);
 
}


this.setState(()=>{
return this.state.todo_Array;

})
}
skip_All=()=>{
  
this.state.todo_Array=[];
this.setState({
 
  todo_Array:this.state.todo_Array
})
}
edit=(e,i)=>{
var ne="";
ne=prompt("Enter a new task ",e)
this.state.todo_Array[i]=ne;
this.setState({
 
  todo_Array:this.state.todo_Array
})
}



skip_one=(index)=>{

  this.state.todo_Array.splice(index,1) ;
  this.setState({
    todo_Array:this.state.todo_Array
  })
}


render(){
  
  return(
    <div>
<div className="todoList">
Todo-List
</div>
   
 <div className="desktop-flex">

 <div className="box">
   


   <input  placeholder="Enter todo" className="mainInput" onChange={this.todoAdd}></input>
  < br />
 
   <nav>
  <ul>
    <li onClick={this.submit}>
      Add-todo
      <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    </li>
  <li onClick={this.skip_All}>
      Skip-All
      <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
    </li>
  
  </ul>
</nav>
   
  </div>
 <div>

{this.state.todo_Array.map((e,i)=>{
return <li key={i}>
  {e}
  <br />
<button className="li-button" onClick={()=>this.edit(e,i)}>Edit</button>
<button className="li-button" onClick={()=>this.skip_one(i)}>Skip</button>

</li>


})}




 </div>





 

 








 </div>


  </div>
  )
}
  

  
    
  

 




}



export default App;
