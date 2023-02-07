import './App.css'

const Item=(props)=>{
 const{list}=props
 //console.log(list)
 const{avatar,firstName,lastName,id,email}=list

    return(
         <li className="list-container">
            <img src={avatar} className="image"/>
            <p className="name">{firstName} {lastName}</p>
            <p>{email}</p>
         </li>
    )
}

export default Item