import { HashRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { MainNavigator } from '../component/MainNavigator';
import HomePage from './Home';
import { ComponentPage } from './Component';
import { PaginationPage } from './Pagination';
import { ScrollListPage } from './ScrollList';
import ChartPage from './chart.mdx';

export const PageFrame = () => (
    <>
        <MainNavigator />

        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/component" element={<ComponentPage />} />
                <Route path="/pagination" element={<PaginationPage />} />
                <Route path="/scroll-list" element={<ScrollListPage />} />
                <Route
                    path="/chart"
                    element={
                        <Container>
                            <ChartPage />
                        </Container>
                    }
                />
            </Routes>
        </HashRouter>
    </>
);
