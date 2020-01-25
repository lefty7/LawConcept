const routes = [
  {
    path: '/',
    component: () => import('layouts/Wrapper.vue'),
    redirect: { name: 'Home' },
    children: [{ path: 'home', name: 'Home', component: () => import('pages/Home.vue') }]
  }
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  });
}

export default routes;
