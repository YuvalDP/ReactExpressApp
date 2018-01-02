import React , { Component } from 'react';
import { connect } from 'react-redux';
import { getFiles, addFiles } from '../actions/actions_gdrive';

class ListFiles extends Component {
    componentDidMount(){
        //this.props.getFiles();
        this.props.addFiles('./nothing..');
    }
    render(){

            return(
            <div>
                  ListFiles..
            </div>

        );

    }

}


export default connect(null,({getFiles , addFiles }))(ListFiles);