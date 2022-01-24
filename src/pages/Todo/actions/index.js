import { createAction } from "redux-actions";

export const ADD_TODO = createAction("ADD_TODO");
export const DELETE_TODO = createAction("DELETE_TODO");
export const CHANGE_TODO = createAction("CHANGE_TODO");
export const SAVE_CHANGED_TEXT = createAction("SAVE_CHANGED_TEXT");
export const CANCEL_CHANGED_TEXT = createAction("CANCEL_CHANGED_TEXT");
