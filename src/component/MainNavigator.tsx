import { Option, Select } from 'idea-react';
import { observer } from 'mobx-react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import { mainNavLinks } from '../meta';
import { i18n, LanguageName } from '../model/Translation';
import * as style from './MainNavigator.module.less';

export const MainNavigator = observer(() => {
    const { currentLanguage } = i18n;

    return (
        <Navbar
            style={{ zIndex: 1030 }}
            bg="primary"
            variant="dark"
            sticky="top"
            expand="lg"
            collapseOnSelect
        >
            <Container>
                <Navbar.Brand href=".">
                    <img
                        className={`${style.logo} me-2`}
                        src="https://github.com/react-bootstrap.png"
                    />
                    {document.title}
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-inner" />

                <Navbar.Collapse id="navbar-inner">
                    <Nav className="me-auto">
                        {mainNavLinks().map(({ title, href }) => (
                            <Nav.Link
                                key={title}
                                className="text-white"
                                href={href}
                            >
                                {title}
                            </Nav.Link>
                        ))}
                    </Nav>

                    <Select
                        value={currentLanguage}
                        onChange={key =>
                            i18n.loadLanguages(key as typeof currentLanguage)
                        }
                    >
                        {Object.entries(LanguageName).map(([key, name]) => (
                            <Option key={key} value={key}>
                                {name}
                            </Option>
                        ))}
                    </Select>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
});
