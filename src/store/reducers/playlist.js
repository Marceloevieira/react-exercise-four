import { ADD_ITEM, REMOVE_ITEM } from "../actions/playlist";

const initialState = {
	items: [],
};

export const playlist = (state = initialState, action) => {


	switch (action.type) {
		case ADD_ITEM:
			if (state.items.some(({ id }) => id === action.payload.id)) {
				return state;
			}

			return {
				...state,
				items: state.items.concat(action.payload),
			};

		case REMOVE_ITEM:
			return {
				...state,
				items: state.items.filter(({ id }) => id !== action.payload),
			};

		default:
			return state;
	}
};
