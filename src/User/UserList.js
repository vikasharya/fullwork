import React, { Component } from 'react';



class UserList extends Component{
    constructor(props){
        super(props);

        this.state={
            isactive:false
        };

        this.toggleClass = this.toggleClass.bind(this);

    }
   
    toggleClass = () => {
        this.setState({
            isactive:!(this.state.isactive)
        })

        console.log(this.state.isactive);
    };


    render(){

        const item = this.props.items;
        const list = item.map(itemobj => {
            return <tr className="rowhover" key={itemobj.key}>
                        <td>
                            <input id={itemobj.key + 'name'} name="name" className={this.state.isactive? 'textbox-edit':'textbox'} type="text" value={itemobj.name} 
                                onChange={
                                    (e)=>{
                                        this.props.updateitem(e.target.value, itemobj.key, e.target.name)
                                    }
                                }
                            />
                        </td>
                        <td>
                            <input id={itemobj.key + 'age'} name="age" className={this.state.isactive? 'textbox-edit':'textbox'} type="text" value={itemobj.age} 
                                onChange={
                                    (e)=>{
                                        this.props.updateitem(e.target.value, itemobj.key, e.target.name)
                                    }
                                }
                            />
                        </td>
                        <td>
                            <input id={itemobj.key + 'email'} name="email" className={this.state.isactive? 'textbox-edit':'textbox'} type="text" value={itemobj.email} 
                                onChange={
                                    (e)=>{
                                        this.props.updateitem(e.target.value, itemobj.key, e.target.name)
                                    }
                                }
                            />
                        </td>
                        <td>
                            <input id={itemobj.key + 'address'} name="address" className={this.state.isactive? 'textbox-edit':'textbox'} type="text" value={itemobj.address} 
                                onChange={
                                    (e)=>{
                                        this.props.updateitem(e.target.value, itemobj.key , e.target.name)
                                    }
                                }
                            />
                        </td>
                        <td>
                            <div className="hideFields">
                                <button className="btn btn-info btn-sm" onClick={this.toggleClass}>{this.state.isactive? 'Done':'Update'}</button>
                                &nbsp;<button className="btn btn-info btn-sm" onClick={()=> this.props.deleteitem(itemobj.key)}>Delete</button>
                            </div>
                        </td>
                    </tr>        
            
        }) 
        return(
            <div>
                <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th width="15%">Name</th>
                        <th width="5%">Age</th>
                        <th width="20%">Email</th>
                        <th width="20%">Address</th>
                        <th width="20%">Actions</th>
                    </tr>
                </thead>
                <tbody> 
                    {list}
                </tbody>
                </table>
            </div>
        );
    }
}

export default UserList;