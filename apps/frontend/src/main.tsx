import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/store';
import {ArticleList} from "./features/article/ArticleList";

ReactDOM.render(
  <Provider store={store}>
    <ArticleList/>
  </Provider>,
  document.getElementById('root')
);
