import {combineReducers} from '@reduxjs/toolkit';

import articles from '../features/article/articlesSlice';

const rootReducer = combineReducers({
  articles,
});

export default rootReducer;
