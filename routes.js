const Home = require('./src/pages/Home');
const Faqs = require('./src/pages/Faqs');

const routes = [{
        path: '/',
        exact: true,
        component: Home,
    },
    {
        path: '/faqs',
        component: Faqs,
    }
]

export default routes;