import { ADD__USERS, REMOVE__CASH, REMOVE__USERS } from "../constantes"

const initialState = {
	users: []
}

export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD__USERS:
			return { ...state, users: [...state.users, action.payload] }
		case REMOVE__USERS:
			return state.users.map((u) => u.id === action.payload)
		default:
			return state
	}
}

export const addUsersAction =(payload)=>({ type: ADD__USERS, payload })
export const removeUsersAction =()=>({})