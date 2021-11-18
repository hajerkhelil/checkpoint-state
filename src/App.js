import './App.css';
// eslint-disable-next-line no-unused-vars
import React from "react"
import Profile from "./profile"


class App extends React.Component {

 
 
  state={toggle: false,count:0 }
  handletoggle=()=>{  this.setState({ toggle: !this.state.toggle  })   }


  componentDidMount() {
    this.timerID = setInterval(() =>     this.setState({count: this.state.count+1 })    ,1000 );}

    

   render(){

    return (
      <div>
  
        <button   onClick={this.handletoggle} >    { this.state.toggle ? "hide" :"show" }    </button>
        {this.state.toggle  ? 
        
        <>
        <Profile/>   
        <h1>{this.state.count} </h1>
        </>
        :null}

      </div>
    )
  }

 
}

export default App;
