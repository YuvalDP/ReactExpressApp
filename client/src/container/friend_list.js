import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import { deleteFriends , editFriend , updateFriend } from '../actions';
import { bindActionCreators } from 'redux';
import { findDOMNode } from 'react-dom';
import {citylist} from './AddFriend'

class FriendList extends Component {
    constructor(props){
        super(props);
        this.state={edit_index :''};
    }

    getCity = (citi) => {

        return citylist.map((city) => {
            return  <option key={city} name={city}>{city}</option>
        })
    }
    UpdateFriend(event){
        event.preventDefault();
        this.props.updateFriend({
            firstname : findDOMNode(this.refs.firstname).value,
            lastname : findDOMNode(this.refs.lastname).value,
            city : findDOMNode(this.refs.city).value,
            email : findDOMNode(this.refs.email).value,
            mobileno : findDOMNode(this.refs.mobileno).value
        });
        this.props.editFriend('');
    }
    getRows(){

        console.log('edit_index',this.props.friends_list.edit_friend);
        return this.props.friends_list.friends_list.map((row) => {

            if(this.props.friends_list.edit_friend === row.firstname)
            {
               return(
                   <tr key={row.firstname}>
                    <td><input type="text" defaultValue={row.firstname} ref="firstname" className="form-control"/></td>
                    <td><input type="text" defaultValue={row.lastname} ref="lastname" className="form-control"/></td>
                    <td>
                        <select ref="city" className="form-control">
                            {this.getCity(row.city)}
                        </select>
                    </td>
                    <td><input type="text" defaultValue={row.email} ref="email" className="form-control"/></td>
                    <td> <input type="text" defaultValue={row.mobileno} ref="mobileno" className="form-control"/> </td>
                    <td><button className="btn btn-primary">save</button></td>
                    <td><button className="btn btn-block" onClick={() => this.props.editFriend('')}>cancel</button>
                    </td>

                </tr>
                   );

            }else{
                return (
                    <tr key={row.firstname}>
                        <td>{row.firstname}</td>
                        <td>{row.lastname}</td>
                        <td>{row.city}</td>
                        <td>{row.email}</td>
                        <td> {row.mobileno} </td>
                        <td><span className="btn btn-success" onClick={() => this.props.editFriend(row.firstname)}>edit</span></td>
                        <td><span className="btn btn-danger" onClick={() => this.props.deleteFriends(row.firstname)}>delete</span>
                        </td>
                    </tr>


                );
            }

        })
    }


    render(){

        if(this.props.friends_list.length<1)
        {
            return '';
        }
        return(

            <div>
                <form onSubmit={this.UpdateFriend.bind(this)}>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>firstName</th>
                            <th>lastName</th>
                            <th>city</th>
                            <th>email</th>
                            <th> mobileNo </th>
                            <th></th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                    {this.getRows()}
                    </tbody>



                </table>
                </form>

            </div>


        );
    }

}

function mapStateToProps(state) {
    return {
        friends_list : state.friendsListReducer,

    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({deleteFriends : deleteFriends,editFriend : editFriend, updateFriend}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(FriendList);