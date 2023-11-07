import { configureStore } from "@reduxjs/toolkit";
import IssueReducer from "./IssueReducer";

export const store = configureStore({
    reducer: {
        issue: IssueReducer
    }
});

