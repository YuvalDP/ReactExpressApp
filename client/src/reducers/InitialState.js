const   InitialState = {
    App : {
        name :'Chat'
    },
    friendsListReducer:{
        friends_list :[{
            firstname: 'yuval',
            lastname : 'prajapati',
            email : 'yuval@gmail.com',
            city : 'London',
            address : 'sarthee avanue',
            hobby : ['movies' , 'reading' , 'nothing  else'],
            gender : 'male',
            mobileno: '8460300207'
        }],
        edit_friend : '',
        unfriend_list :[]
    },
    reducer_user:{
        all_users :[],
        login_user_detail: {},
        Loaded:false,
    },
    googleDriveReducer   :{
        Files : [],
        VISIBILITY : true
    }
}
export default InitialState;