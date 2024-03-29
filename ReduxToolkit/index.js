const store= require("./app/store")
const { fetchUsers } = require("./features/user/userSlice")
const cakeActions= require("./features/cake/cakeSlice").cakeActions
const icecreamActions= require("./features/icecream/icecreamSlice").icecreamActions


console.log("Initial State", store.getState())

const unsubscribe = store.subscribe(()=> console.log("Updated State", store.getState()))
// const unsubscribe = store.subscribe(()=> {})
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))

// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.restocked(3))
// unsubscribe()
store.dispatch(fetchUsers())