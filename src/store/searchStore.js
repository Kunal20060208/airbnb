import {create} from "zustand";


const useSearchStore = create((set)=>({


location:"",


guests:1,


setLocation:(location)=>

set({
location
}),



setGuests:(guests)=>

set({
guests
})


}));


export default useSearchStore;