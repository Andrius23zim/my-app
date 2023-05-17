import React from "react";
import classes from'./Navbar.module.css';

/*let classes = {
  'nav': 'Navbar_nav__sc78w',
  'item':'Navbar_item__h8I5D'
}
*/

const Navbar = () => {
    return <nav className = {classes.nav}>
    <div className = {classes.item}>
      <a>Profile</a></div>
    <div className = {`${classes.item} ${classes.active}`}>
      <a>Messages</a></div>
    <div  className = {classes.item}>
      <a>News</a></div>
    <div className = {classes.item}>
      <a>Music</a></div>
    <div className = {classes.item}>
      <a>Settings</a></div>
  </nav>
}

export default Navbar;