import React from 'react'
//  function Title(){
//      return <h1>hello prince</h1>
//  }
export const Title= (props)=>{
console.log(props)
return (
    <div>
     <h1> Hello {props.name} a.k.a {props.sirname}</h1>
    {props.children}
    </div>
) 
}
    

// export default Greet