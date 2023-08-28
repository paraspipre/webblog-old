import React, { useState } from "react";
import { APP_NAME } from "../config";
import Link from "next/link";
import { signout, isAuth } from '../actions/auth'
import Router from 'next/router'
import NProgress from "nprogress";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import '.././node_modules/nprogress/nprogress.css'
import Search from './blog/Search'

Router.onRouteChangeStart = url => NProgress.start()
Router.onRouteChangeComplete = url => NProgress.done()
Router.onRouteChangeError = url => NProgress.done()


const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <div id="nav">
        <Link legacyBehavior href="/">
          <a id="logo">WEBBLOG</a>
        </Link>
        <div className="menu-container" >
          <Link legacyBehavior href="/blogs" passHref>
            <a id="menulink" title="Blogs"  ><i className="fa fa-newspaper"></i></a >
          </Link>
          <Link legacyBehavior href="/user/crud/blog" passHref>
            <a id="menulink" title="create a blog"><i className="fa fa-pen-to-square"></i></a >
          </Link>
          {!isAuth() && (
            <>
              <Link legacyBehavior href="/signin" passHref>
                <a id="menulink" title="signIn" href="/signup"><i className="fa fa-sign-in"></i></a >
              </Link>
              <Link legacyBehavior href="/signup" passHref>
                <a id="menulink" title="signUp" href="/signup"><i className="fa fa-user-plus"></i></a>
              </Link>
            </>
          )}

          {isAuth() && (
            <>
              <Link legacyBehavior href={isAuth().role === 1 ? "/admin" : "/user"} passHref>
                <a id="menulink" title={`${isAuth().name}`} href={isAuth().role === 1 ? "/admin" : "/user"}>
                  <i class="fa fa-user" ></i>
                </a >
              </Link>
              <Link legacyBehavior href="/signin" passHref>
                <a id="menulink" title="signOut" onClick={() => signOut(() => Router.push("/signin"))}>
                  <i className="fa fa-power-off"></i>
                </a>
              </Link>
            </>
          )}
        </div>
      </div>
      <Search />
    </>
  );
};

export default Header;
