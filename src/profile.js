
import React from 'react'
import him from "./him.jpg";

class profile extends React.Component{

constructor(){

    super()
    this.state={person:{fullName:"salah j",bio:"good professor", image:him , profession:"professor"}}   
}
 

render(){
      console.log(this.state.person)
      return (
        
          <div>
            
                 <h1>{this.state.person.fullName}</h1>
                 <h1>{this.state.person.bio}</h1>
                 <img  src={this.state.person.image} />
                 <h1>{this.state.person.profession}</h1>

          </div>
      )
  }

}

export default profile;
