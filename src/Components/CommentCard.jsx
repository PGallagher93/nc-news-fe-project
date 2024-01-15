import {
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import { deleteComment } from "../api";
import { timeAgo } from "../utils";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useState, useEffect } from "react";
import { patchCommentVotes } from "../api";

const CommentCard = ({ comment, user, setCommentDeleted }) => {
 
  const [commentVotes, setCommentVotes] = useState(0);
  const [upvoteClicked, setUpvoteClicked] = useState(false);
  const [downvoteClicked, setDownvoteClicked] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setCommentVotes(comment.votes);
  }, []);
  const handleVote = (e, type, vote) => {
    upvoteClicked ? (vote -= 1) : downvoteClicked ? (vote += 1) : vote === vote;
    if (!upvoteClicked && type === "upvote") {
      setUpvoteClicked(true);
      setDownvoteClicked(false);
      setCommentVotes(commentVotes + vote);
      patchCommentVotes(comment.comment_id, vote).catch(() => {
        setIsError(true);
      });
    } else if (upvoteClicked && type === "upvote") {
      setUpvoteClicked(false);
      setCommentVotes(commentVotes - 1);
      patchCommentVotes(comment.comment_id, -1).catch(() => {
        setIsError(true);
      });
    } else if (!downvoteClicked && type === "downvote") {
      setDownvoteClicked(true);
      setUpvoteClicked(false);
      setCommentVotes(commentVotes + vote);
      patchCommentVotes(comment.comment_id, vote).catch(() => {
        setIsError(true);
      });
    } else if (downvoteClicked && type === "downvote") {
      setDownvoteClicked(false);
      setCommentVotes(commentVotes + 1);
      patchCommentVotes(comment.comment_id, 1).catch(() => {
        setIsError(true);
      });
    }
  };
  const handleCommentDeletion = (id) => {
    deleteComment(id).then(() => {
      setCommentDeleted(id);
    }).catch(() => {
        setIsError(true)
    });
  };
  return (
    <Card sx={{ mx: { xs: "0", md: "5rem" }, my: 1, boxShadow: 3 }}>
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography>{comment.author}</Typography>
        <Typography color="text.secondary">
          {timeAgo(comment.created_at)}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography sx={{ px: 1 }}>{comment.body}</Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Stack direction="row">
          <IconButton
            color={upvoteClicked ? "success" : "secondary"}
            onClick={(e) => handleVote(e, "upvote", 1)}
          >
            <ArrowUpwardIcon />
          </IconButton>
          <Typography sx={{ pt: 1 }}>{commentVotes}</Typography>
          <IconButton
            color={downvoteClicked ? "error" : "secondary"}
            onClick={(e) => {
              handleVote(e, "downvote", -1);
            }}
          >
            <ArrowDownwardIcon />
          </IconButton>
        </Stack>
        {comment.author === user &&
        <Stack direction = 'row'>
            <Button variant="text" color="secondary" onClick={(e)=>{
                handleCommentDeletion(comment.comment_id)
            }}>DELETE</Button>
        </Stack>}
      </CardActions>
      {isError && (
        <p className="error"> Unable to add vote, please try again later! </p>
      )}
    </Card>
    
  );
};

export default CommentCard;
