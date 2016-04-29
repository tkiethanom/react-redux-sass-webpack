import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

export function store(reducer) {
  const loggerMiddleware = createLogger({
    level: 'info',
    collapsed: true
  });

  let result;

  if(process.env.NODE_ENV == 'production'){
    result = compose(
      applyMiddleware(
        thunkMiddleware
      )
    )(createStore);
  }
  else{
    result = compose(
      applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
      )
    )(createStore);
  }

  return result(reducer);
}

