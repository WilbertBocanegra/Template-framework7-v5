// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  id: 'io.framework7.testapp',
  root: '#app',
  theme: 'md',
  data: function () {
    return {

    };
  },
  methods: {

  },
  on: {
    init: function () {
      console.log('App initialized');
      if (app.online) {
        console.log('online!');
      }
      if (!app.online) {
        console.log('offline!');
      }
      
      app.on('online', () => {
        console.log('connection established')
      });
      app.on('offline', () => {
        console.log('lost connection')
      });
    },
    pageInit: function () {
      console.log('Page initialized');
    },
  },
  routes: routes,
  touch: {
    // Enable fast clicks
    fastClicks: true,
  
  }
});

app.views.create('.view-main', {
  url: '/'
})


/*or with single event
app.on('connection', (isOnline) => {
  if (isOnline) {
    console.log('connection established')
  } else {
    console.log('lost connection')
  }
});*/