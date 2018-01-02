import React, { Component } from 'react';
import { connect } from 'react-redux';

const footerStyle = {
    position: 'absolute',
    left: '0',
    marginBottom: '0',
    bottom: '0',
    height :'10%',
    width: '100%',
    backgroundColor: '#00ACC1',
    color: 'white',
    textAlign: 'center'
};


class Footer extends Component {

    render(){

        return(
        <div style={footerStyle}>
            @Copyright yuval DP
        </div>
        );
    }

}

function mapToStateProps(state) {
    return state.App;
}
export default connect(mapToStateProps,null,)(Footer);
