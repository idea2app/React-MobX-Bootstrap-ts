import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavbarToggle from 'react-bootstrap/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
import NavLink from 'react-bootstrap/NavLink';

import { HomePage } from './Home';
import { ComponentPage } from './Component';

export function PageFrame() {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" expand="sm">
                <NavbarBrand href=".">
                    <img
                        className="mr-2"
                        style={{ width: '2rem' }}
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
                        href="https://github.com/TechQuery/React-MobX-Bootstrap-ts"
                    >
                        Source code
                    </NavLink>
                </NavbarCollapse>
            </Navbar>

            <HashRouter>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route path="/component">
                        <ComponentPage />
                    </Route>
                </Switch>
            </HashRouter>
        </>
    );
}
