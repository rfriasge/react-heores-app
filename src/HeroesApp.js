import React, { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer'
import { AppRauter } from './rauters/AppRauter'


const init = ()=>{
	// const user = JSON.parse(localStorage.getItem('user'));
	// return ( user === 'null') ?  { logged: false} : user;
	
	return JSON.parse(localStorage.getItem('user'))||{
		logged:false
	}


}
export const HeroesApp = () => {

	const [user, dispatch]	= useReducer(authReducer, {}, init);

		useEffect(() => {
		localStorage.setItem('user', JSON.stringify(user));	
	}, [user]);

	return (
		<div>
			<AuthContext.Provider value = {{ user, dispatch }}>
				<AppRauter />
			</AuthContext.Provider>
		</div>
	)
}
