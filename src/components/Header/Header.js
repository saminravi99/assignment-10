import "./Header.css";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {

    const  [authUser] = useAuth();
    // let authUser = "user";
  return (
    <div className="nav-container my-3">
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Container>
          <Link to="/" className=" text-black header-title">
            <h2 className="mb-0">
              Derma <span className="text-primary">Care</span>
            </h2>{" "}
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className=" ms-3 me-auto nav-link-container">
              <NavLink
                className={({ isActive }) =>
                  isActive ? `active-link mx-3 p-0` : `nav-link mx-3 p-0`
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `active-link mx-3 p-0` : `nav-link mx-3 p-0`
                }
                to="/services"
              >
                Services
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `active-link mx-3 p-0` : `nav-link mx-3 p-0`
                }
                to="/blogs"
              >
                Blogs
              </NavLink>
            
              <NavLink
                className={({ isActive }) =>
                  isActive ? `active-link mx-3 p-0` : `nav-link mx-3 p-0`
                }
                to="/about-me"
              >
                About Me
              </NavLink>
            </Nav>
            <Nav className="nav-link-container">
              {authUser ? (
                <button className="btn btn-primary">Sign Out</button>
              ) : (
                <Nav>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? `active-link mx-3 p-0` : `nav-link mx-3 p-0`
                    }
                    to="/login"
                  >
                    Sign In
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? `active-link mx-3 p-0` : `nav-link mx-3 p-0`
                    }
                    to="/sign-up"
                  >
                    Register
                  </NavLink>
                </Nav>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
