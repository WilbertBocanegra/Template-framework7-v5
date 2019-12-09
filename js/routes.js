var routes = [ 
   //init page
  {
    path: '/',
    componentUrl: 'pages/home.html',
  },

  // About page
  {
    path: '/about/',
    url: 'pages/about.html',
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: 'pages/404.html',
  },
];
