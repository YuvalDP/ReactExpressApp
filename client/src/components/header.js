import React, {Component} from 'react';
import { AppBar } from 'material-ui';
import { connect } from 'react-redux';
import { ChangeApp } from '../actions/actions_appChange';


class Header extends Component {
   constructor(props){
       super(props);
       this.state = { value:0};
   }

   handleChange(event, index, value){
      this.setState({value});
      this.props.ChangeApp(value);
   }

    render(){
       console.log(this.props);
        return(
            <div>
               <AppBar title={"Multi App Integration"} iconElementRight={<span>{this.props.login_user_detail.firstname?'Login '+this.props.login_user_detail.firstname:''}</span>}
                >

            {/*<DropDownMenu value={this.state.value} onChange={this.handleChange.bind(this)} openImmediately={false}>*/}
            {/*<MenuItem value={'GoogleDrive'} primaryText="Google Drive" />*/}
            {/*<MenuItem value={'Chat'} primaryText="Chat"/>*/}
            {/*<MenuItem value={'AnotherApp2'} primaryText="Another App2" />*/}
            {/*<MenuItem value={'AnotherApp3'} primaryText="Another App3" />*/}
            {/*<MenuItem value={'AnotherApp4'} primaryText="Another App4" />*/}
            {/*</DropDownMenu>*/}

               </AppBar>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state.reducer_user;
}


export default connect(mapStateToProps,({ ChangeApp }))(Header);