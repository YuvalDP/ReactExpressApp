import React , { Component } from 'react';
import {Add_Friend} from '../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {findDOMNode} from 'react-dom';
import { Well  , Panel } from 'react-bootstrap';

export const citylist = [
    "Spain",
    "London",
    "Licenster",
    "New York",
    "California",
    "Las vegas",
    "Los Angales",
    "Hollywood",
    "Romania"

];

class AddFriend extends Component{
    constructor(props){
        super(props);
        this.state = {open:false};

    }
    getCity(){
        return citylist.map((city) => {
          return  <option key={city} name={city}>{city}</option>
        })
    }

    onSubmit(event){
        event.preventDefault();
        const firstname = findDOMNode(this.refs.firstname);
        const lastname = findDOMNode(this.refs.lastname);
        const city =findDOMNode(this.refs.city);
        const email = findDOMNode(this.refs.email);
        const gender= findDOMNode(this.refs.gender);
        const hobbymusic = findDOMNode(this.refs.hobbymusic);
        const hobbymovie = findDOMNode(this.refs.hobbymovie);
        const hobbybook = findDOMNode(this.refs.hobbybook);
        const mobileno = findDOMNode(this.refs.mobileno);
        const address = findDOMNode(this.refs.address);

        const friend={
            firstname : firstname.value,
            lastname : lastname.value,
            city : city.value,
            email : email.value,
            hobby: [hobbymusic.checked ?hobbymusic.value:'',hobbybook.checked?hobbybook.value:'',hobbymovie.checked?hobbymovie.values:''],
            mobileno:mobileno.value,
            gender : gender.value,
            address : address.value

        }
        console.log(friend);
        this.props.Add_Friend(friend);
        firstname.value= '';
        lastname.value = '';
        city.selected = false;
        email.value= '';
        gender.checked = false;
        hobbybook.checked=false;
        hobbymusic.checked = false;
        hobbymovie.checked = false;
        address.value = '';
        mobileno.value= '';
    }

    render(){
        return(
            <div>
                <h1 className="alert alert-primary"> Registration </h1>
                <center>
                    <Well>
                        <Panel>
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <div className="form-group">
                                <input type="text" className="form-control" placeholder={"Enter FirstName"} id="firstname" name="firstname" ref="firstname" required/>
                        </div>
                        <div className="form-group">

                            <input type="text" className="form-control " placeholder={"Enter lastname"} id="lastname" required ref="lastname"/>
                        </div>
                        <div className="form-group">

                            <select className="form-control " ref="city">
                                <option default> -- select city -- </option>
                                {this.getCity()}
                            </select>

                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control " placeholder="Enter email" id="email" ref="email"/>
                        </div>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <input className="form-check-input" type="radio" name="gen" value="Male" ref="gender"/> Male <br />
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <input className="form-check-input" type="radio" name="gen" ref="gender" value="Female"/> Female <br />
                            </label>
                        </div> (Gender)
                        <br />
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" id="chkmusic" ref="hobbymusic" value="Music" /> Music
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" id="chkreading" ref="hobbybook" value="Book Reading" /> Books Reading
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox" id="chkmovies" ref="hobbymovie" value="Movies" /> Movies
                            </label>
                        </div> (Hobby)

                        <div className="form-group">

                            <input type="text" className="form-control " placeholder={"Enter mobileno"} ref="mobileno" id="mobileno"/>
                        </div>

                        <div className="form-group">
                            <textarea className="form-group "  rows="4" cols="50" placeholder="address" ref="address"/>
                        </div>
                        <div className="form-group">
                            <input type="submit" style={{'marginBottom':'50px'}} name="submit" value="Add Friend" className="btn btn-primary form-control"/>
                        </div>

                    </form>
                        </Panel>
                    </Well>
                </center>

            </div>
        );

    }


}

function mapToDispatchAction(dispatch) {
     return bindActionCreators({Add_Friend},dispatch)
}

export default connect(null,mapToDispatchAction)(AddFriend)



