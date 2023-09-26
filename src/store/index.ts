import { combineReducers, legacy_createStore as createStore, applyMiddleware, AnyAction } from "redux";
import thunk, { ThunkDispatch } from 'redux-thunk';
import { modalReducer } from "./modal/reducer";
import { useDispatch as useDispatchOriginal} from 'react-redux';


const rootReducer = combineReducers({
  modal:modalReducer
})

// const rootReducer = (state,action)=>{
//     if(action.type === "RESET_APP"){
//         state =undefined
//     }
//     return allReducers(state, action)
// }
type AppDispatch = ThunkDispatch<RootState, any, AnyAction>; 
export type RootState = ReturnType<typeof rootReducer>
export const useDispatch: () => AppDispatch = useDispatchOriginal;
export const store = createStore(rootReducer, applyMiddleware(thunk));