import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faCss3,
  faJs,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="primary" variant="dark">
      <Navbar.Brand as={Link} to="/" className="ms-3 fw-bold">
        CYF Quiz
      </Navbar.Brand>

      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="me-3"
      />

      <Navbar.Collapse className="me-3">
        <Nav>
          <Nav.Link as={NavLink} to="/about" className="ms-3">
            About
          </Nav.Link>

          <NavDropdown title="Quizzes" className="ms-3">
            <NavDropdown.Item
              as={NavLink}
              to="/html"
            >
              <FontAwesomeIcon
                className="me-2 text-warning"
                aria-hidden="true"
                icon={faHtml5}
              />
              HTML
            </NavDropdown.Item>

            <NavDropdown.Divider />

            <NavDropdown.Item
              as={NavLink}
              to="/css"
            >
              <FontAwesomeIcon
                className="me-2 text-warning"
                aria-hidden="true"
                icon={faCss3}
              />
              CSS
            </NavDropdown.Item>

            <NavDropdown.Divider />

            <NavDropdown.Item
              as={NavLink}
              to="/js"
            >
              <FontAwesomeIcon
                className="me-2 text-warning"
                aria-hidden="true"
                icon={faJs}
              />
              JavaScript
            </NavDropdown.Item>

            <NavDropdown.Divider />

            <NavDropdown.Item
              as={NavLink}
              to="/node"
            >
              <FontAwesomeIcon
                className="me-2 text-warning"
                aria-hidden="true"
                icon={faNodeJs}
              />
              Node.js
            </NavDropdown.Item>

            <NavDropdown.Divider />

            <NavDropdown.Item
              as={NavLink}
              to="/react"
            >
              <FontAwesomeIcon
                className="me-2 text-warning"
                aria-hidden="true"
                icon={faReact}
              />
              React.js
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
