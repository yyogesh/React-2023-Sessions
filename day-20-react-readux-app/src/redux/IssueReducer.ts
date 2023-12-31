import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface IssueInitialState {
    projectIssues: string[]
}

const initialState: IssueInitialState = {
    projectIssues: ['Bug: Issue 1', 'Bug: Issue 2', 'Bug: Issue 3']
}

export const issueSlice = createSlice({
    name: 'issue',
    initialState,
    reducers: {
        addIssue: (state, action: PayloadAction<string>) => {
            state.projectIssues = [...state.projectIssues, action.payload]
        }
    }
})

export const { addIssue } = issueSlice.actions;
export default issueSlice.reducer;


