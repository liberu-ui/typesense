import routeImporter from '@enso-ui/ui/src/modules/importers/routeImporter';

const routes = routeImporter(require.context('./typesense', false, /.*\.js$/));
const Router = () => import('@enso-ui/ui/src/bulma/pages/Router.vue');

export default {
    path: 'typesense/',
    component: Router,
    meta: {
        breadcrumb: 'typesense',
    },
    children: routes,
};
