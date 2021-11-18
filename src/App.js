import './App.css';
// eslint-disable-next-line no-unused-vars
import React from "react"
import Profile from "./profile"


class App extends React.Component {

 
 
  state={toggle: false,date:new Date()  }
  handletoggle=()=>{  this.setState({ toggle: !this.state.toggle  })   }


  componentDidMount() {
    this.timerID = setInterval(() => this.tick(),1000 );}

      tick() {
        this.setState({
          date: new Date()
        });
      }

 

   render(){

    return (
      <div>
  
        <button   onClick={this.handletoggle} >    { this.state.toggle ? "hide" :"show" }    </button>
        {this.state.toggle  ?  <Profile/>  :null}

      </div>
    )
  }

 
}

export default App;
