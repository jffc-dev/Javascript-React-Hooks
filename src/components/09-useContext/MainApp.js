import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {

    // const user = {
    //     id: 1234,
    //     name: 'Javier Flores',
    //     email: 'jffc.dev@gmail.com'
    // }

    const [user, setUser] = useState({});

    return (
        <div>
            <UserContext.Provider value={{
                user, setUser
            }}>
                <AppRouter></AppRouter>
            </UserContext.Provider>
        </div>
    )
}
