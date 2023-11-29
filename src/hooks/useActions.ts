import { useDispatch } from "react-redux";
import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";


import { actions as favoritesActions } from "../store/favorites/favorites.slice";
import { actions as basketActions } from "../store/basket/basket.slice";
import { actions as userActions } from "../store/user/user.slice";

const rootActions = {
    ...favoritesActions,
    ...basketActions,
    ...userActions
}

export const useActions = () => {
    const dispatch = useDispatch()

    return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}