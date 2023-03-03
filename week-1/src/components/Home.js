import React,{Component}from 'react'
class Home extends Component{
    render(){
        return <h1>props concept..{this.props.name} a.k.a{this.props.sirname}
        </h1>
    }

}
export default Home