import React,{Component}from 'react'
class Homestate extends Component{
    constructor(){
        super()
        this.state={
            message:'welcome to tatvasoft'
        }

    }
    changeMessage(){
        this.setState({
            message:'It is s IT complany located at ahemedabad.'
        })
    }
    render(){
        return (
              <div>
              <h1>{this.state.message}
        </h1>
        <button onClick={() =>this.changeMessage()}>Desciption</button>


              </div>

        )
        
    }

}
export default Homestate