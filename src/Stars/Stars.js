import React, { Component } from 'react';
import './Stars.css';
class Stars extends Component {

    constructor(props) {
        super(props);
        this.myfunction = this.myfunction.bind(this);
    }
    
    myfunction(){

        let i, k;
        for(i=1; i<=7; i++){
            for(k=i; k<=7; k++){
                document.write('&nbsp;&nbsp;');
            }   
            for(k=1; k<=i; k++){
                document.write('&nbsp;&nbsp;*&nbsp;');
            }
            document.writeln('<br/>');
        }


    }

    render() {
        
        return (
            <div className="Stars">
                <div className="container">
                    <div className="row">
                       <div className="col-md-12">
                       {this.myfunction()}

                        

                       </div>
                    </div>
                </div>
            </div>
        )
    }

}


export default Stars;