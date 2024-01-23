import { Box, CircularProgress, Typography } from "@mui/material";
import ArticleContainer from "../Components/ArticleContainer.jsx";
import { useEffect } from "react";

const AllArticles = ({
  isLoading,
  articles,
  articleQuery,
  setArticleQuery,
}) => {
  useEffect(() => {
    setArticleQuery({ sort: null, topic: null, order: null });
  }, []);

  if (isLoading) {
    return (
      <Box sx={{ pl: "45%", pt: "20rem" }}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <main>
      <Typography variant="h3" align="center">
        Articles
      </Typography>
      <ArticleContainer articles={articles} setArticleQuery={setArticleQuery} />
    </main>
  );
};

export default AllArticles;
