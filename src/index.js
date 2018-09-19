import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva({
  initialState:{
    tools:[
      {name:"dva1", id:1},
      {name:"dva2", id:2},
      {name:"dva3", id:3},

    ]
  }
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/tools').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
