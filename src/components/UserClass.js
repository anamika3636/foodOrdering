import React from "react"
// import UserChild from "/"
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count: 0,
            // count:1,
        }
    }
    componentDidMount(){
        console.log("hello this is ")
    }
    componentWillUnmount(){
        console.log("will mount")
    }
    render(){
        // const {name}=this.props
        return(
            <div>
            <h1>name:{this.props.name}</h1>
            <h1>Classcount:{this.state.count}</h1>
            <button onClick={()=>{
              this.setState({
               count:this.state.count + 1,
              })
            }}>classButton</button>
            <h2>count:{this.props.count}</h2>
            {/* <UserChild/> */}
            </div>
        );      
    }
}
export default UserClass;