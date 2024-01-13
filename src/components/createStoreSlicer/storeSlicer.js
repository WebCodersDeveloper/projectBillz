import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    id: "",
    title: "",
    meter: "",
    mondayOpen: "",
    mondayClose: "",
    tuesdayOpen: "",
    tuesdayClose: "",
    wednesdayOpen: "",
    wednesdayClose: "",
    thursdayOpen: "",
    thursdayClose: "",
    fridayOpen: "",
    fridayClose: "",
    saturdayOpen: "",
    saturdayClose: "",
    sundayOpen: "",
    sundayClose: "",
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
    secondCreditCard: "",
    secondBank: "",
    plan: "",

}

const newStore = createSlice({
    name: 'createStore',
    initialState: initialState,
    reducers : {
        add: (state, action) => {
            return{
                ...state,
                id: action.payload.id,
                title:action.payload.title,
                meter: action.payload.meter,
                mondayOpen: action.payload.mondayOpen,
                mondayClose: action.payload.mondayClose,
                tuesdayOpen: action.payload.tuesdayOpen,
                tuesdayClose: action.payload.tuesdayClose,
                wednesdayOpen: action.payload.wednesdayOpen,
                wednesdayClose: action.payload.wednesdayClose,
                thursdayOpen: action.payload.thursdayOpen,
                thursdayClose: action.payload.thursdayClose,
                fridayOpen: action.payload.fridayOpen,
                fridayClose: action.payload.fridayClose,
                saturdayOpen: action.payload.saturdayOpen,
                sundayOpen: action.payload.sundayOpen,
                sundayClose: action.payload.sundayClose,
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
                secondCreditCard: action.payload.secondCreditCard,
                secondBank: action.payload.secondBank,
                plan: action.payload.plan,
            }
        }
    }
})

export const { add } = newStore.actions;
export default newStore.reducer;