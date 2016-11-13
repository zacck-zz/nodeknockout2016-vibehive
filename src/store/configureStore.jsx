import * as redux from 'redux';
import thunk from 'redux-thunk';
import {reducer as burgerMenu} from 'redux-burger-menu';

//import reducers here
import {categoriesReducer, activeCategoriesReducer, vibesReducer, authReducer, preLoadedReducer} from 'reducers';
export var configure = (initialState = {}) => {

  var reducer = redux.combineReducers({
    categories: categoriesReducer,
    activeCategories: activeCategoriesReducer,
    burgerMenu: burgerMenu,
    vibes: vibesReducer,
    auth: authReducer,
    isPreloaded: preLoadedReducer,
  });

  var store = redux.createStore(reducer, initialState,redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
