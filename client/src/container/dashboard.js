import React, { Component } from 'react';
import MDSpinner from 'react-md-spinner';


class dashboard extends Component {
    constructor(props){
        super(props);
        this.state = { loading: true };
    }
    render(){

        setTimeout(() => {
                this.setState({ loading: false });
        } ,3000);

        if(this.state.loading){
            return <div> <center> <MDSpinner size={30}/> </center>   </div>;
        }
        else{
            return <div> <h1 align="center">Content Loaded...</h1> </div>;
        }




    }
}
export default dashboard;