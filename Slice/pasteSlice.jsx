import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';
const initialState = {
  pastes:localStorage.getItem("pastes")
    ?   JSON.parse(localStorage.getItem("pastes"))
    : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPaste: (state, action) => {
        const paste=action.payload
        state.pastes.push(paste)//stores into a centralised store
        localStorage.setItem("pastes",JSON.stringify(state.pastes))//stores into local storage
        //key is "pastes" and value is  the state.pastes 
        //local storage -> stored in key value pairs

        //creating a toast when post is created 
        //importing react hot toast package for using toast
         
       toast.success("Paste Created Successfully")
    },
    updateToPaste: (state,action) => {
        const paste=action.payload 
        //finding the index of the paste which we wanted to update if already created 
        // and finding the index in which it is already created
        const index=state.pastes.findIndex((item)=>item._id === paste._id);
        //postive or 0 if exist
        //negative if not found

        if(index>=0){
            state.pastes[index]=paste
            localStorage.setItem("paste", JSON.stringify(state.pastes));
            toast.success("paste updated successfully");
        }
    },
    resetAllPaste: (state, action) => {
      state.pastes=[]

      localStorage.removeItem("pastes")
    },
    removeFromPaste:(state, action) =>{
        const pasteId=action.payload
        console.log(pasteId)

        const index=state.pastes.findIndex((item)=>item._id === pasteId);

        if(index>=0){
            state.pastes.splice(index, 1);//deleting the paste from the state

            //storing the new state getting built above||^^||
            localStorage.setItem("pastes", JSON.stringify(state.pastes));

            toast.success("Paste Deleted ")
        }

    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPaste, updateToPaste, resetAllPaste ,removeFromPaste} = pasteSlice.actions

export default pasteSlice.reducer