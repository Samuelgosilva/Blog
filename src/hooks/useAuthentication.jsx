import {
    getAuth,
    createUserWithEmailAndPassword,
    singInWwithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)


    //cleanup
    //deal with memory leak
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled (){ // essa função evita vazamento de memória

        if (cancelled) {
            return
        }
    }

}