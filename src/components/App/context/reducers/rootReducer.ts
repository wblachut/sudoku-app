import preloadedState from '../store/preloadedState';

const rootReducer = (state = preloadedState, action: any): any => {
	switch (action.type) {
		// case 'INCREMENT_TPS':
		// 	return {
		// 		...state,
		// 		treesPerSec: state.treesPerSec + action.payload.amount,
		// 	};
		// case 'ADD_ITEM':
		// 	return {
		// 		...state,
		// 		itemsCount: state.itemsCount + 1,
		// 		items: action.payload.items,
		// 	};
		// case 'CHANGE_TREE_ICONS':
		// 	return {
		// 		...state,
		// 		treeIcons: action.payload.treeIcons,
		// 	};
		// case 'CLEAR_PROGRESS':
		// 	return preloadedState;
		default:
			return state;
	}
};

export default rootReducer;
