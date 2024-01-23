import ArticleContainer from "../Components/Articles/ArticleContainer";
import { useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";

const TopicArticles = ({
  articles,
  setArticleQuery,
  errorMessage,
  isLoading,
}) => {
  const { topic } = useParams();

  useEffect(() => {
    setArticleQuery((currVal) => {
      return { ...currVal, topic: topic };
    });
  }, [topic]);

  if (isLoading) {
    return (
      <Box sx={{ pl: "45%", pt: "20rem" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (Object.keys(errorMessage).length !== 0) {
    return <Navigate to="/404" />;
  } else
    return (
      <main>
        <ArticleContainer
          articles={articles}
          setArticleQuery={setArticleQuery}
        />
      </main>
    );
};

export default TopicArticles;
