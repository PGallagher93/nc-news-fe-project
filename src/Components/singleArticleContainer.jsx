import { useState, useEffect } from "react";
import { patchArticleVotes } from "../api";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { ThumbDown, ThumbUp } from "@mui/icons-material";
import CommentIcon from "@mui/icons-material/Comment";
import { useNavigate } from 'react-router'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const SingleArticleContainer = ({ singleArticle, article_id }) => {
  const [articleVotes, setArticlevotes] = useState(0);
  const [upvoteClicked, setUpvoteClicked] = useState(false);
  const [downvoteClicked, setDownvoteClicked] = useState(false);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate()
  useEffect(() => {
    setArticlevotes(singleArticle.votes);
  }, []);

  

  const handleVote = (e, type, vote) => {
    upvoteClicked ? (vote -= 1) : downvoteClicked ? (vote += 1) : vote === vote;
    if (!upvoteClicked && type === "upvote") {
      setUpvoteClicked(true);
      setDownvoteClicked(false);
      setArticlevotes(articleVotes + vote);
      patchArticleVotes(article_id, vote).catch(() => {
        setIsError(true);
      });
    } else if (upvoteClicked && type === "upvote") {
      setUpvoteClicked(false);
      setArticlevotes(articleVotes - 1);
      patchArticleVotes(article_id, -1).catch(() => {
        setIsError(true);
      });
    } else if (!downvoteClicked && type === "downvote") {
      setDownvoteClicked(true);
      setUpvoteClicked(false);
      setArticlevotes(articleVotes + vote);
      patchArticleVotes(article_id, vote).catch(() => {
        setIsError(true);
      });
    } else if (downvoteClicked && type === "downvote") {
      setDownvoteClicked(false);
      setArticlevotes(articleVotes + 1);
      patchArticleVotes(article_id, 1).catch(() => {
        setIsError(true);
      });
    }
  };

  return (
    <Box>
      <IconButton onClick={() => 
           navigate(-1)
      }>
         <ArrowBackIosIcon/>
      </IconButton>
      <Card sx={{ px: { xs: "0"}, boxShadow: 0 }}>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h5">{singleArticle.title}</Typography>
        </CardContent>
        <Stack direction="row" justifyContent="space-between" padding="1rem">
          <Typography>By {singleArticle.author}</Typography>
          <Typography>
            Date posted: {singleArticle.created_at.substr(0, 10)}
          </Typography>
        </Stack>
        <Stack alignItems="center">
          <CardMedia
            component="img"
            src={singleArticle.article_img_url}
            sx={{
              height: { xs: "30vh", md: "50vh" },
              objectFit: "cover",
              aspectRatio: "1/1",
            }}
          ></CardMedia>
        </Stack>
        <CardContent sx={{ px: { xs: "0.5", md: "0" }, py: "1" }}>
          <Typography>{singleArticle.body}</Typography>
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
              onClick={(e) => {
                handleVote(e, "upvote", 1);
              }}
            >
              <ThumbUp />
            </IconButton>
            <Typography sx={{ pt: 1 }}>{articleVotes}</Typography>
            <IconButton
              color={downvoteClicked ? "error" : "secondary"}
              onClick={(e) => {
                handleVote(e, "downvote", -1);
              }}
            >
              <ThumbDown />
            </IconButton>
          </Stack>
          <Stack direction="row">
            <IconButton
              color="secondary"
              onClick={() =>
                document.querySelector("#comments").scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              <CommentIcon />
            </IconButton>
            <Typography sx={{ pt: 1 }}>
              {singleArticle.comment_count}
            </Typography>
          </Stack>
        </CardActions>
        {isError && (
          <p className="error"> Unable to add vote, please try again later! </p>
        )}
      </Card>
    </Box>
  );
};

export default SingleArticleContainer;
