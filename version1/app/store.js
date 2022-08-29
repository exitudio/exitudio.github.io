import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger";
import thunk from "redux-thunk";
import projectReducer from "./reducers/projectReducer"

const middleware = applyMiddleware(thunk,logger())

export default createStore(projectReducer, middleware)

export const GROUP = "GROUP";
export const PROJECT = "PROJECT";


