
class App extends React.Component{
render(){

  return(
    <h2 >the first classs</h2>

  );
}
}


ReactDOM.render(<App/>,document.getElementById("app"));

class NewClass extends React.Component{
  state={
    name:"Ram",
    age: 15
  }

  render(){
    return(
      <div>
                 <h1>{this.state.name}</h1>
                 <h2>{this.state.age}</h2>
                 <button onClick ={this.handleListner}>click me</button>

      </div>
    );
  }
  handleListner=(e)=>{
  
    this.setState({name:"hari",age:20})
  }

}

ReactDOM.render(<NewClass/>,document.getElementById("newClass"));

