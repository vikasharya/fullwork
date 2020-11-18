import React, { Component } from 'react';
import './User.css';
import UserList from './UserList';

class User extends Component {

    userData;

    constructor(props) {
        super(props);
        this.state={

            items:[],
              name:'',
              age:'',
              email:'',
              address:'',
              key:'',
              errors:{
                name:false,
                age:false,
                email:false,
                address:false
             } 
                          
        };
        this.addItem = this.addItem.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.updateitem = this.updateitem.bind(this);
        this.deleteitem = this.deleteitem.bind(this);
    }

    onChangeName(e){
        this.setState(
        {
            name:e.target.value
        })
      }
      onChangeAge(e){
        this.setState(
        {
            age:e.target.value
        })
      }
      onChangeEmail(e){
        this.setState(
        {
            email:e.target.value
        })
      }
      onChangeAddress(e){
        this.setState(
        {
           address:e.target.value 
        })
      }
    addItem(e){
        e.preventDefault();

        const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
       
        if(this.state.name===''){
            this.setState({
                errors:{
                    name:true
                }
            })
        }
        else if(this.state.age===''){
            this.setState({
                errors:{
                    age:true
                }
            })
        }
        else if(this.state.email===''  ){
            this.setState({
                errors:{
                    email:true
                }
            })
        }
        
        else if( !validEmailRegex.test(this.state.email) ){
            this.setState({
                errors:{
                    email:true
                }
            })
        }

        else if(this.state.address===''){
            this.setState({
                errors:{
                    address:true
                }
            })
        }
        else{   
            this.setState({
                errors:{
                    name:false,
                    age:false,
                    email:false,
                    address:false
                }
            })

            var data = {
                name: this.state.name,
                age: this.state.age,
                email: this.state.email,
                address: this.state.address,
                key:Date.now()
            };
            const newItem = data;
            const newItems= [newItem,...this.state.items];         
            this.setState({
                items:newItems,
                name:'',
                age:'',
                email:'',
                address:'',
                key:''
            });  

        }
    }
    updateitem(value, key, names){
        
        const items = this.state.items;
        
       
        
        const updatelist = items.map(item=>{
            if(item.key === key){
            
                if(names==='name'){
                    item.name = value
                }
                if(names==='age'){
                    item.age = value
                }
                if(names==='email'){
                    item.email = value
                }
                if(names==='address'){
                    item.address = value
                }
            }
        })
        this.setState({
          items:items
        })
      }

      deleteitem(key){
        const filterItem = this.state.items.filter(item => item.key!==key);
        this.setState({
          items:filterItem
        })

       
      }


    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                email: this.userData.email,
                age: this.userData.age,
                address:this.userData.address
            })
        } else {
            this.setState({
                name: '',
                email: '',
                age: '',
                address: ''
            })
        }
    }
    componentWillUpdate(nextProps, nextState) {

       
            localStorage.setItem('user', JSON.stringify(nextState));
        

    }
    render() {
        return (
            <div className="Users">
                <div className="container">
                <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <h1 className="heading">Add New List</h1>
                            <div>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" className="form-control" placeholder="Enter Name" id="name" value={this.state.name} onChange={this.onChangeName} />
                                    <span className="error">{this.state.errors.name?'Please enter the Name':null}</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="age">Age:</label>
                                    <input type="text" className="form-control" placeholder="Enter Age" id="age" value={this.state.age} onChange={this.onChangeAge}/>
                                    <span className="error">{this.state.errors.age?'Please enter the age':null}</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email ID:</label>
                                    <input type="email" className="form-control" placeholder="Enter email" id="email" value={this.state.email} onChange={this.onChangeEmail} />
                                    <span className="error">{this.state.errors.email?'Please enter the email':null}</span>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Address:</label>
                                    <input type="text" className="form-control" placeholder="Enter Address" id="address" value={this.state.address} onChange={this.onChangeAddress} />
                                    <span className="error">{this.state.errors.address?'Please enter the address':null}</span>
                                </div>
                                <div className="form-group">
                                    
                                </div>
                                <button onClick={this.addItem} className="btn btn-primary">Save</button>
                            </form>

                            </div>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12">
                        <h1 className="heading">Update/Delete List</h1>
                        <div>
                        

                 

                              
                    <UserList items={this.state.items} deleteitem={this.deleteitem} updateitem={this.updateitem} ></UserList>
               
                   
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default User;