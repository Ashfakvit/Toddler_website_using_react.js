import React from "react";
import StartFriebase from '../friebaseConfig/index'
import { ref, set, } from "firebase/database";
 
export class Curd extends React.Component{
constructor(props){
    super(props);
    this.state={
        db:'',
        name:'',
        address:'',
        state:'',
        city:'',
        zipcode:'',
        phonenumber:'',
        
    }
    this.interface=this.interface.bind(this)
}
   componentDidMount(){
    this.setState({
        db:StartFriebase()
    });
   }

   render(){
    return(
        <>

            <label>Enter name</label>
            <input type='text' id="userbox" value={this.state.name} onChange={e =>{this.setState({name: e.target.value});}}/>
            <br/><br/>
            
            <label>Enter address</label>
            <input type='text' id="namebox" value={this.state.address} onChange={e =>{this.setState({address: e.target.value});}}/>
            <br/><br/>
            <label>City</label>
            <input type='text' id="city" value={this.state.city} onChange={e =>{this.setState({city: e.target.value});}}/>
            <br/><br/>
            <label>state</label>
            <input type='text' id="statebox" value={this.state.state} onChange={e =>{this.setState({state: e.target.value});}}/>
            <br/><br/>
            <label>zipcode</label>
            <input type='number' id="zipbox" value={this.state.zipcode} onChange={e =>{this.setState({zipcode: e.target.value});}}/>
            <br/><br/>
            <label>Enter Phonenumber</label>
            <input type='number' id="numberbox" value={this.state.phonenumber} onChange={e =>{this.setState({phonenumber: e.target.value});}}/>
            <br/><br/>

            <button id='addBtn' onClick={this.interface}>Order</button>
           
            
        </>
    )
   }
   interface(event){
    const id =event.target.id;

    if(id=='addBtn'){
        this.insertData();
    }

}
    getAllInputs(){
        return{
            name: this.state.name,
            address:this.state.address,
            city:this.state.city,
            state:this.state.state,
            zipcode:Number(this.state.zipcode),
            phone:Number(this.state.phonenumber)
        }
    }
    insertData(){
        const db=this.state.db;
        const data =this.getAllInputs();

        set(ref(db, 'Customer/'+data.name),
        {
            address: data.address,
            state: data.state,
            city:data.city,
            zipcode:data.zipcode,
            phonenumber: data.phone,
           

        })
        .then(()=>{alert('data added Succesfully')})
        .catch((error)=>{alert('error'+error)});

    }
   }
