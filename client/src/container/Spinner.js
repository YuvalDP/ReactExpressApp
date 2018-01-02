import React, { Component } from 'react';
import MDSpinner from 'react-md-spinner';


class spinner extends Component {
    render(){

        return  <div> <MDSpinner size={50} className="spinner" style={{margin:'50%',marginTop:'10%'}}/> </div>;
    }
}
export default spinner;