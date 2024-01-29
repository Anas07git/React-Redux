const redux= require("redux")
const produce= require("immer").produce

const STREET_UPDATE="STREET_UPDATE"

function updateStreet(street){
    return{
        type:STREET_UPDATE,
        payload:street
    }
}

const initialState={
   name:"Anas",
   add:{
    street:"5K",
    city:"XYZ",
    pin:"009"
   }
}

const reducer=(state=initialState,action)=>{
     switch (action.type) {
        case STREET_UPDATE:
            // return{
            //     ...state,
            //     add:{
            //         ...state.add,
            //         street:action.payload
            //     }
            // }
            return produce(state,(draft)=>{
                draft.add.street="10K"
            })
     
        default: return state

     }
}
const store= redux.createStore(reducer)
console.log("Initial", store.getState())
const unsubscribe= store.subscribe(()=> console.log("Updated", store.getState()))

store.dispatch(updateStreet("9K"))
unsubscribe()