import React from "react";

const Profile_Info = (props)=>
(
    <div className="Right">
    <form className="prof_block">
        <img src={props.user_pic_url} className="image"/>
          <p className="name"><strong>{props.name}</strong></p>
          <p className="user_id">{props.user_id}</p>
          <p className="bio">{props.bio}</p>
          <p className="hrbar">
          <button type="button" className="button btn btn-success"><strong>Edit Bio</strong></button>
          <hr></hr>
          </p>

          
          <p className="company"><i class="fas fa-user-friends"></i>{' '}{props.company}</p>
          <p className="location"><i class="fas fa-map-marker-alt"></i>{' '}{props.location}</p>
          <p className="email">{props.email}</p>
        
    </form>
    </div>
);

export default Profile_Info;