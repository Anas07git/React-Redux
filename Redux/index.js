const redux= require("redux")
const createStore= redux.createStore
const bindActionCreators=redux.bindActionCreators
const combineReducers=redux.combineReducers
const applyMiddleware=redux.applyMiddleware 

// Creating logger middleware
const reduxLogger= require("redux-logger")
const logger= reduxLogger.createLogger()


const CAKE_ORDERED="CAKE_ORDERED"
const CAKE_RESTOCKED="CAKE_RESTOCKED"

const ICECREAM_ORDERED="ICECREAM_ORDERED"
const ICECREAM_RESTOCKED="ICECREAM_RESTOCKED"

// ACTION CREATOR
function orderCake(){
    // ACTIONS
    return{
        type:CAKE_ORDERED,
        payload:1
    }
}
function orderIcecream(){
    // ACTIONS
    return{
        type:ICECREAM_ORDERED,
        payload:1
    }
}

function restockCake(qty=1){
    return{
        type:CAKE_RESTOCKED,
        payload:qty

    }
}
function restockIcecream(qty=1){
    return{
        type:ICECREAM_RESTOCKED,
        payload:qty

    }
}

// Single Store(State) for entire App

// const initialState={
//     noOfCakes:10,
//     noOfIcecreams:20
// }

const initialCake={
    noOfCakes:10
}
const initialIcecream={
    noOfIcecreams:20
}


// REDUCER - (prevState,action)=>newState

// const reducer=(state=initialState,action)=>{
//     switch(action.type){
//         case CAKE_ORDERED:
//             return{
//                 ...state,
//                 noOfCakes:state.noOfCakes-1
//             }
            
//             case CAKE_RESTOCKED:
//                 return{
//                     ...state,
//                     noOfCakes:state.noOfCakes + action.payload
//                 }   
//                 case ICECREAM_ORDERED:
//                     return{
//                         ...state,
//                         noOfIcecreams:state.noOfIcecreams-1
//                     }
                    
//                     case ICECREAM_RESTOCKED:
//                         return{
//                             ...state,
//                             noOfIcecreams:state.noOfIcecreams + action.payload
//                         }   
                

//                 default: return state
//             }
// }
const cakeReducer=(state=initialCake,action)=>{
    switch(action.type){
        case CAKE_ORDERED:
            return{
                ...state,
                noOfCakes:state.noOfCakes-1
            }
            
            case CAKE_RESTOCKED:
                return{
                    ...state,
                    noOfCakes:state.noOfCakes + action.payload
                }

                default: return state
            }
}
const IcecreamReducer=(state=initialIcecream,action)=>{
    switch(action.type){ 
                case ICECREAM_ORDERED:
                    return{
                        ...state,
                        noOfIcecreams:state.noOfIcecreams-1
                    }
                    
                    case ICECREAM_RESTOCKED:
                        return{
                            ...state,
                            noOfIcecreams:state.noOfIcecreams + action.payload
                        }   
                

                default: return state
            }
}
// Combining multiple reducers
const rootReducer= combineReducers({
    cake:cakeReducer,
    icecream:IcecreamReducer
})

// STORE- takes reducer as an argument
const store=createStore(rootReducer,applyMiddleware(logger))
console.log("Initial State", store.getState())

// const unsubscribe= store.subscribe( () => console.log("Updated State",store.getState()) )
const unsubscribe= store.subscribe( () => {})

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockCake(3))



// Binding Action Creators

const actions= bindActionCreators({orderCake,restockCake,orderIcecream,restockIcecream}, store.dispatch)
// actions.orderCake()
// actions.orderCake()
// actions.orderCake()
// actions.restockCake(3)
actions.orderIcecream()
actions.orderIcecream()
actions.orderIcecream()
actions.restockIcecream(3)


unsubscribe()
// hello
