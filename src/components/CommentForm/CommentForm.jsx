import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../../Redux/actions/comments";
import {
  TextField,
  Button,
  Typography,
  List,
  ListItem,
  Paper,
} from "@material-ui/core";
import styles from "./CommentForm.module.css";

const CommentForm = ({ subDishId }) => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const comments = useSelector(
    (state) => state.comments.comments[subDishId] || []
  );

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (comment.trim()) {
        dispatch(addComment(comment, subDishId));
        setComment("");
      }
    },
    [comment, dispatch, subDishId]
  );

  return (
    <div className={styles.commentForm}>
      <Typography variant="h4" align="center" className={styles.title}>
        Comments
      </Typography>
      <Paper elevation={3} className={styles.paper}>
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
          className={styles.textField}
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Add Comment
        </Button>
      </form>
    </div>
  );
};

export default CommentForm;
