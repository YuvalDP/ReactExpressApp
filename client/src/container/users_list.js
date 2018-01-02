import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get_users } from '../actions/action_users';
class users_list extends Component {
    constructor(props){
        super(props);
        this.props.get_users();
    }
    tbodySync(){

        if(this.props.reducer_user){
            return this.props.reducer_user.map((user) => {
                var tmp = '<tr>';
                var keys = Object.keys(user);
                keys.map((field)=>{
                   return tmp += '<td>'+user[field]+'</td>';
                });
                return tmp+'</tr>';
            });
        }else{
            return(
               <tr>
                   <td>Loading..</td>
                   <td>Loading..</td>
                   <td>Loading..</td>
                   <td>Loading..</td>
               </tr>
            );

        }

    }


    render(){
        return(
          <div style={{margin:'30%'}}>
              <h1> Users List </h1>
              <hr />
              <table className="table tab-content">
                  <thead className="thead-dark">
                        <tr>
                            <th> firstName</th>
                            <th> lastName</th>
                            <th> email</th>
                            <th> dob </th>
                            <th> Action </th>
                        </tr>
                  </thead>
                  <tbody dangerouslySetInnerHTML={{__html:this.tbodySync()}}>
                  </tbody>
              </table>
          </div>

        );
    }
}

function mapDispatchToProps(state) {
    console.log(state.reducer_user);
    return {
            reducer_user:state.reducer_user.all_users
        };
}

export default connect(mapDispatchToProps,({ get_users }))(users_list);

