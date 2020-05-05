// Imports
import React, {FC, lazy, Suspense, useEffect} from 'react';
import {usePath, useRoutes, useTitle} from "hookrouter";
import {actions} from "./store";
import {Loading} from "./shared/ui/loading";
import {putInLS, useAppDispatch} from "./shared/utility";
import {IconName} from "./shared/ui/icon";

// Lazy import declare
const HomePage = lazy(() => import('./pages/home'));
const ArchivePage = lazy(() => import('./pages/archive'));
const TrashPage = lazy(() => import('./pages/trash'));
const NotFoundPage = lazy(() => import('./pages/not-found'));


// declare paths to components
const routes = {
    '/': () => <HomePage/>,
    '/archive': () => <ArchivePage/>,
    '/trash': () => <TrashPage/>,
};

const Router: FC = () => {
    const dispatch = useAppDispatch();
    const routeResult = useRoutes(routes);
    const path = usePath(false) as PagesPaths;

    // setup html title for each pages
    useTitle(PageMeta[path]?.title);

    // save current page in localstorage & redux-store
    useEffect(() => {
        putInLS(path, 'page');
        dispatch(actions.core.setActivePage(path));
    }, [routeResult, path, dispatch]);

    console.log(`Router rerender: `, path);

    return (
        <Suspense fallback={<Loading/>}>
            {routeResult || <NotFoundPage/>}
        </Suspense>
    )
};

// generate pages paths like keys
export type PagesPaths = keyof typeof routes;

export type PageItem = {
    id: PagesPaths;
    icon: IconName;
    nav: string;
    title: string;
}

// declare pages meta
export const PageMeta: Record<PagesPaths, PageItem> = {
    '/': {
        id: '/',
        icon: 'Light',
        nav: 'Notes',
        title: 'Home page'
    },
    '/archive': {
        id: '/archive',
        icon: 'Box',
        nav: 'Archive',
        title: 'Archive page'
    },
    '/trash': {
        id: '/trash',
        icon: 'Trash',
        nav: 'Trash',
        title: 'Trash page'
    }
};

export default Router;
