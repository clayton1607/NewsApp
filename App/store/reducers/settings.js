import {SELECT_ITEMS,SELECT_CATEGORY,SELECT_COUNTRY} from '../actions/actionTypes' 
const intialState={
    selectedItems: [],
    selectedCategories:[],
    country:'',
    cca2:'IN',
  };
const reducer =(state=intialState,action)=>{
    switch(action.type){
        case SELECT_ITEMS:
            return {
                selectedItemsz:action.selectedItems
            }
        default:
            return state;
    }
}
export default reducer;