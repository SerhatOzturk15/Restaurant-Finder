
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

export const clearFilters = (restaurants) => {
    return {
        type: 'SET_RESTAURANTS',
        payload: {restaurants}
    }
}
