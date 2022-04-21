import {
    RESTAURANT_LIST_REQUEST, 
    RESTAURANT_LIST_SUCCESS, 
    RESTAURANT_LIST_FAIL } from '../constants/restaurantConstant'

    export const restaurantListReducer = (states ={ restaurants: []}, actions) =>{
        switch(actions.type) {
            case RESTAURANT_LIST_SUCCESS:
                return {restaurants : actions.payload}
            case RESTAURANT_LIST_FAIL:
                return { restaurants : actions.payload}   
            default:
                return states     
        }

    }
           