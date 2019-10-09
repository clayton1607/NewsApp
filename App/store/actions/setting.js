import { SELECT_ITEMS,SELECT_CATEGORY,SELECT_COUNTRY } from './actionTypes' 

export const selectItems= (selectedItems)=>{
    return{
        type:SELECT_ITEMS,
        selectedItems:selectedItems
    }
}

export const selectCategory= (selectedCategory)=>{
    return{
        type:SELECT_CATEGORY,
        selectedCategory:selectedCategory
    }
}
export const selectCountry= (value)=>{
    return{
        type:SELECT_CATEGORY,
        value:value
    }
}