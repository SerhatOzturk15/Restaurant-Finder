
export const setRestaurants = (restaurants) => {
    return {
        type: 'SET_RESTAURANTS',
        payload: {restaurants, type: ''}
    }
}

export const setType = (type, restaurants) => {
    return {
        type: 'SET_TYPE',
        payload: {type, restaurants}
    }
}

export const filterRestaurants = (filterText, restaurants) => {
    return {
        type: 'FILTER_RESTAURANTS',
        payload: {filterText, restaurants}
    }
}

export const setLoading = (isLoading) => {
    return {
        type: 'SET_LOADING',
        payload: {isLoading}
    }
}

export const setRestaurantFailure = (error) => {
    return {
        type: 'SET_RESTAURANT_FAILURE',
        payload: {error}
    }
}
