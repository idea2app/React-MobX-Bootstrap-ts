import {
    Combobox,
    ComboboxOption,
    Container,
    Drawer,
    Image,
    Navbar,
    NavbarBrand,
    NavbarNav,
    NavbarToggler,
    NavLink
} from 'idea-react';
import { action, observable } from 'mobx';
import { observer } from 'mobx-react';
import { Component } from 'react';

import { mainNavLinks } from '../meta';
import { i18n, LanguageName } from '../model/Translation';
import * as style from './MainNavigator.module.less';

@observer
export class MainNavigator extends Component {
    @observable accessor open = false;

    toggle = action(() => (this.open = !this.open));

    hide = action(() => (this.open = false));

    renderContent = () => (
        <>
            <NavbarNav className="flex-fill">
                {mainNavLinks().map(({ title, href }) => (
                    <NavLink key={title} href={href} onClick={this.hide}>
                        {title}
                    </NavLink>
                ))}
            </NavbarNav>
            <Combobox
                name="language"
                value={i18n.currentLanguage}
                onChange={key => {
                    if (typeof key === 'string')
                        i18n.loadLanguages(key as typeof i18n.currentLanguage);
                }}
            >
                {Object.entries(LanguageName).map(([key, name]) => (
                    <ComboboxOption key={key} value={key}>
                        {name}
                    </ComboboxOption>
                ))}
            </Combobox>{' '}
        </>
    );

    render() {
        return (
            <Navbar
                className="sticky-top bg-primary"
                style={{ zIndex: 1030 }}
                theme="dark"
                expand="lg"
            >
                <Container>
                    <NavbarBrand href=".">
                        <Image
                            className={`${style.logo} me-2`}
                            src="https://github.com/idea2app.png"
                            alt=""
                        />
                        {document.title}
                    </NavbarBrand>

                    <NavbarToggler
                        aria-label="Toggle navigation"
                        expanded={this.open}
                        onClick={this.toggle}
                    />

                    <Drawer
                        className="w-100"
                        bodyClassName="d-flex flex-column lg:flex-row gap-3"
                        title={document.title}
                        responsive="lg"
                        placement="end"
                        open={this.open}
                        onDismiss={this.hide}
                    >
                        {this.renderContent()}
                    </Drawer>
                </Container>
            </Navbar>
        );
    }
}
