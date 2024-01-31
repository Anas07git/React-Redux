const redux= require("redux")
const axios= require("axios")
const applyMiddleware= redux.applyMiddleware
const thunkMiddleware = require("redux-thunk").thunk
const createStore=redux.createStore

const initialState={
    users:[],
    error:'',
    loading:false
}

const FETCH_REQUEST= "FETCH_REQUEST"
const FETCH_SUCCESS= "FETCH_SUCCESS"
const FETCH_FAIL= "FETCH_FAIL"

function fetchRequest(){
    return{
        type:FETCH_REQUEST,
    }
}

function fetchSuccess(users){
    return{
        type:FETCH_SUCCESS,
        payload:users
    }
}

function fetchFail(error){
    return{
        type:FETCH_FAIL,
        payload:error
    }
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_REQUEST:
            return{
                ...state,
                loading:true
            }

        case FETCH_SUCCESS:
            return{
                loading:false,
                users: action.payload,
                error:""
            }    

        case FETCH_FAIL:
            return{
                loading:false,
                users:[],
                error:action.payload
            }    

    }

}

const fetchUsers=()=>{
    return function(dispatch){
        dispatch(fetchRequest())
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then((res)=>{
            const users= res.data.map((user)=> user.id)
            dispatch(fetchSuccess(users))
        })
        .catch((err)=>{
          dispatch(fetchFail(err.message))
        })
    }
}

const store = createStore(reducer,applyMiddleware(thunkMiddleware))
store.subscribe(()=>{ console.log(store.getState())})
store.dispatch(fetchUsers())    