
import {configureStore,createSlice} from "@reduxjs/toolkit"

// const INITIAL_VALUE={
//     counter:5,
//     privacy:false
// }


const counterSlice=createSlice({
    name:'counter',
    initialState:{counterVal:0},
    reducers:{
       increment:(state)=>{
            state.counterVal++;

        },
     decrement:(state,action)=>{
   state.counterVal--;
        },
            add:(state,action)=>{
state.counterVal+=Number(action.payload.num);
        },
           Sub:(state,action)=>{
 state.counterVal-=Number(action.payload.num);
        },  

    }
})


// const counterReducer=(store=INITIAL_VALUE,action)=>{
//     let newStore=store;
//     if(action.type==='INCREMENT'){
//         newStore={...store,counter:store.counter+1};
//     }
//     else if(action.type==='DECREMENT'){
//         newStore={...store,counter:store.counter-1}
//     }
//       else if(action.type==='ADD'){
//         newStore={...store,counter:store.counter+Number(action.payload.num)}
//     }
//     else if(action.type==='SUB'){
//         newStore={...store,counter:store.counter-Number(action.payload.num)}
//     }
//      else if(action.type==='PRIVACY'){
//       return {...store,privacy:!store.privacy};
//     }
//     return newStore;
// }


const counterStore=configureStore({reducer:
   { 
    counter:counterSlice.reducer

   }
});

export default counterStore;
export const counterActions=counterSlice.actions;