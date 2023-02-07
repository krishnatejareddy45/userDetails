import {Component} from "react"
import Item from './Item'
import './App.css'

import Loader from "react-loader-spinner"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class App extends Component{
  state={newList:[],status:true}



update=(updatedData)=>{
const{newList}=this.state
this.setState({newList:updatedData,status:true})
}  

getUserList=async()=>{
  this.setState({status:false})
  const url="https://reqres.in/api/users?page=1"
  const options={
    method:"GET"
  }

  const response=await fetch(url,options)
  const fetchedData=await response.json()
  const {data}=fetchedData

  const updatedData=data.map(each=>({
    avatar:each.avatar,
    email:each.email,
    firstName:each.first_name,
    id:each.id,
    lastName:each.last_name
  }))


  // console.log(updatedData)
   this.update(updatedData)

 // this.setState({newList:updatedData,status:true})

}

 loading=()=>{
  return(
    <div className="loader">
    <Loader type="ThreeDots" color="#0669FF" height={50} width={50} />
    </div>
  )
 }


 renderContent=()=>{
  const{newList}=this.state
  return(
      <ul className="wrap-container">
      {newList.map(each=>(
        <Item list={each} key={each.id} />
      ))}
      </ul>
  )
 }


  render(){
    const {newList,status}=this.state
    console.log(newList)
    return (
       <>
       <nav className="nav-container">
      <h1 className="heading">Social Network</h1>
      <button onClick={this.getUserList} className="button">Get Users</button>
    </nav>
    <div className="container">
       {status ? this.renderContent() : this.loading()}
       </div>
       </>
    )
  }
}

export default App