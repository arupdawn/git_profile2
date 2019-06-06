import React, { Component } from 'react';

import './App.css';
import Repositories from './Components/Repositories';
import Profile_Info from './Components/Profile_Info';

class App extends Component {

  state = {
    repos:[],
    following_user:[],
    follower_user:[],
    user_pic_url:'',
    name:'',
    user_id:'',
    bio:'',
    company:'',
    location:'',
    email:'',
    value:'',
    ddlType:'all',
    ddlLang:'all',
  }


  componentDidMount(){
    this.getData();
  }

  change = (event) => {
      this.setState({
        value:event.target.value
      });
  }

  getSelectValue = (event) => {
    this.setState({
      ddlType:event.target.value
    });

  }

  getSelectLangValue = (event) => {
    this.setState({
      ddlLang:event.target.value
    });

  }


  getData = async (e) =>{
    //const RepoName = e.target.elements.RepoName.value;
    //e.preventDefault();
   
    const api_call = await fetch(`https://api.github.com/users/supreetsingh247`);
    const data= await api_call.json();

    const repo_api_call = await fetch(`https://api.github.com/users/supreetsingh247/repos`);
    const repo_data= await repo_api_call.json();

    const followers_api = await fetch(`https://api.github.com/users/supreetsingh247/followers`);
    const followers_data= await followers_api.json();

    const following_api = await fetch(`https://api.github.com/users/supreetsingh247/following`);
    const following_data= await following_api.json();

    

    this.setState({
    
        user_pic_url:data.avatar_url,
        name:data.name,
        user_id:data.login,
        company:data.company,
        bio:data.bio,
        location:data.location,
        email:data.email,
        repos:repo_data,
        follower_user:followers_data,
        following_user:following_data

    });
    
    console.log(this.state.following_user);
  }

  

  render() {
      return (
        <div className="App">
  
          <div className="">
          <div className="col-sm-4" >
          
          <Profile_Info user_pic_url={this.state.user_pic_url} name={this.state.name} user_id={this.state.user_id}
             bio={this.state.bio} company={this.state.company} location={this.state.location} email={this.state.email}/>
          
          </div>
  
          <div className="col-sm-8" >
  
          <Repositories repos={this.state.repos} value={this.state.value} change={this.change} ddlType={this.state.ddlType} 
          dllLang={this.state.ddlLang} getSelectValue={this.getSelectValue} getSelectLangValue={this.getSelectLangValue}
          follower_user={this.state.follower_user} following_user={this.state.following_user}/>
  
          </div>
          </div>
  
        </div>
      );
    
  }
}

export default App;
