import { useParams, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSingleArticle } from "../api";
import SingleArticleContainer from "../Components/singleArticleContainer";
import CommentsContainer from "../Components/CommentsContainer";
import { Box, CircularProgress } from "@mui/material";

const SingleArticle = ({
  errorMessage,
  setErrorMessage,
  isLoading,
  setIsLoading,
  username,
}) => {
  const { article_id } = useParams();

  const [singleArticle, setSingleArticle] = useState({});

  useEffect(() => {
    setIsLoading(true);
    fetchSingleArticle(article_id)
      .then((res) => {
        setErrorMessage({});
        setIsLoading(false);
        setSingleArticle(res.data.article);
      })
      .catch((err) => {
        setErrorMessage(err.response.data);
      });
  }, []);

  if (errorMessage.msg) {
    if (errorMessage.msg === "not found") {
      return <Navigate to="/404" />;
    }
    if (errorMessage.msg === "bad request") {
      return <Navigate to="/400" />;
    }
  }

  if (isLoading) {
    return (
      <Box sx={{ pl: "45%", pt: "20rem" }}>
        <CircularProgress />
      </Box>
    );
  } else if (singleArticle.title)
    return (
      <main>
        <SingleArticleContainer
          singleArticle={singleArticle}
          article_id={article_id}
        />
        <CommentsContainer
          article_id={article_id}
          username={username}
          articleCommentCount={singleArticle.comment_count}
        />
      </main>
    );
};

export default SingleArticle;
