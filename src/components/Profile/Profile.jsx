
    import React from "react";
    import classes from'./Profile.module.css';

    const Profile = () => {
        return <div className= {classes.content}>
          <div>
            <img src='https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80' />
          </div>
          <div>
            ava + description
          </div>
        <div>
          My post
          <div>New post</div>
        </div>
        <div className={classes.posts}>
          <div className={classes.item}>
            Post 1
            </div>
          <div className='item'>Post 2
          </div>
        </div>
        </div>
      
          
    }

    export default Profile;