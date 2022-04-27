import { HashRouter, Routes, Route } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavLink from 'react-bootstrap/NavLink';

import * as style from './index.module.less';
import HomePage from './Home';
import { ComponentPage } from './Component';

export function PageFrame() {
    return (
        <>
            <Navbar bg="primary" variant="dark" sticky="top" expand="sm">
                <Container>
                    <NavbarBrand href=".">
                        <img
                            className={`${style.logo} me-2`}
                            src="https://github.com/react-bootstrap.png"
                        />
                        {document.title}
                    </NavbarBrand>
                    <NavbarToggle aria-controls="basic-navbar-nav" />
                    <NavbarCollapse>
                        <NavLink className="text-white" href="#/">
                            Home
                        </NavLink>
                        <NavLink className="text-white" href="#/component">
                            Component
                        </NavLink>
                        <NavLink
                            className="text-white"
                            href="https://github.com/idea2app/React-MobX-Bootstrap-ts"
                        >
                            Source code
                        </NavLink>
                    </NavbarCollapse>
                </Container>
            </Navbar>

            <HashRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/component" element={<ComponentPage />} />
                </Routes>
            </HashRouter>
        </>
    );
}
