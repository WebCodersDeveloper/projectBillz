import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    title: "",
    meter: "",
    phone1: "",
    phone2: "",
    phone3: "",
    phone4: "",
    facebook: "",
    instagram: "",
    telegram: "",
    website: "",
    more: false,
    legalName: "",
    region: "",
    country: "",
    email: "",
    creditCard: "",
    bankname: "",

}

const newStore = createSlice({
    name: 'createStore',
    initialState: initialState,
    reducers : {
        add: (state, action) => {
            return{
                ...state,
                title:action.payload.title,
                meter: action.payload.meter,
                phone1: action.payload.phone1,
                phone2: action.payload.phone2,
                phone3: action.payload.phone3,
                phone4: action.payload.phone4,
                facebook: action.payload.facebook,
                instagram: action.payload.instagram,
                telegram: action.payload.telegram,
                website: action.payload.website,
                more: action.payload.more,
                legalName: action.payload.legalName,
                region: action.payload.region,
                country: action.payload.country,
                email: action.payload.email,
                creditCard: action.payload.creditCard,
                bankname: action.payload.bankname,
            }
        }
    }
})

export const { add } = newStore.actions;
export default newStore.reducer;