import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../Redux/actions/comments";
import {
  TextField,
  Button,
  Typography,
  List,
  ListItem,
  Paper,
} from "@material-ui/core";

const CommentForm = ({ subDishId }) => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const comments = useSelector(
    (state) => state.comments.comments[subDishId] || []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      dispatch(addComment(comment, subDishId));
      setComment("");
    }
  };

  return (
    <div>
      <Typography variant="h4" align="center" style={{ margin: "1rem" }}>
        Comments
      </Typography>
      <Paper elevation={3} style={{ padding: "1rem", margin: "1rem" }}>
        <List>
          {comments.map((c, index) => (
            <ListItem key={index}>{c}</ListItem>
          ))}
        </List>
      </Paper>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Add a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={{ marginBottom: "1rem" }}
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Add Comment
        </Button>
      </form>
    </div>
  );
};

export default CommentForm;
