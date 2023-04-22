import { HashRouter, Route, Routes } from 'react-router-dom';

import { MainNavigator } from '../component/MainNavigator';
import HomePage from './Home';
import { PaginationPage } from './Pagination';

export const PageFrame = () => (
    <>
        <MainNavigator />

        <HashRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pagination" element={<PaginationPage />} />
            </Routes>
        </HashRouter>
    </>
);
