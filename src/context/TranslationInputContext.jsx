import { createContext, useContext, useState } from "react"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import { storageRead } from "../utils/storage"

//Context object -> exposes state values with the below useUser function
const TranslationInputContext = createContext()

    //custom hook, this exposes the context
export const useTranslationInput = () => {
    return useContext(TranslationInputContext) //returns {user, setUser} and what else i put in state{}
}

//Provider -> manages state. This is a regular react component
const TranslationInputProvider = ({children}) => { // <- this is children object destructured from props

    //sets last translation to what is recorded in session storage user account
    //consider getting this from the API instead
    
    const [translationInput, setTranslationInput] = useState(null)

    const state = {
        translationInput,
        setTranslationInput
    }
    //"value" below is what you want to expose from here: both functions and vars
    return (
        <TranslationInputContext.Provider value={state}>  
            {children}
        </TranslationInputContext.Provider>
    )
}

    //this exposes the provider
export default TranslationInputProvider