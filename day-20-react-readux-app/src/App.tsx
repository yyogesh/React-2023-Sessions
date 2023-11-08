import React, { useEffect, useState } from "react";
import { Box, Typography, TextField, Stack, Button } from "@mui/material";
import ProjectCard from "./components/ProjectCard";
import { useDispatch, useSelector } from "react-redux";
import { addIssue } from "./redux/IssueReducer";
import { fetchIssues } from "./redux/GithubIssueReducer";
import { useAppDispatch } from "./redux";


// createAsyncThunk
// This function simplifies making asynchronous calls. It automatically dispatches many different actions 
// for managing the state of the calls and provides a standardised way to handle errors.
// loading, error, and fulfilled

const App = () => {
  const issueList = useSelector((state: any) => state.issue.projectIssues);
  // const githubIssueList  = useSelector((state: any) => state.githubIssue.issues);
  // const loading  = useSelector((state: any) => state.githubIssue.loading);
  const {issues: githubIssueList, loading, error}  = useSelector((state: any) => state.githubIssue);
  const dispatch = useAppDispatch();
  console.log('state', issueList);
  const [textInput, setTextInput] = useState('');

  useEffect(() => {
    dispatch(fetchIssues())
  }, [dispatch])

  const handleTextInputChange = (e: any) => {
    setTextInput(e.target.value);
  };

  const handleSubmitClick = () => {
    dispatch(addIssue(textInput));
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="home_page">
      <Box sx={{ ml: '5rem', mr: '5rem' }}>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          Project Issue Tracker
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Stack spacing={2}>
            <Typography variant="h5">
              Add new issue
            </Typography>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              onChange={handleTextInputChange}
              value={textInput}
            />
            <Button variant="contained" onClick={handleSubmitClick}>Submit</Button>
          </Stack>
        </Box>
        <Box sx={{ ml: '1rem', mt: '3rem' }}>
          <Typography variant="h5" >
            Opened issue
          </Typography>
          {
            githubIssueList.map((issue: any) => <ProjectCard key={issue} issueTitle={issue} />)
          }
        </Box>
      </Box>
    </div>
  )
}
export default App;
