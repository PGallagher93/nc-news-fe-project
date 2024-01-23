import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import AllArticles from "./pages/AllArticles";
import { fetchArticles } from "./api";
import SingleArticle from "./pages/SingleArticle";
import TopicArticles from "./pages/TopicArticles";
import Homepage from "./pages/Homepage";
import ErrorPage404 from "./pages/ErrorPage404";
import ErrorPage400 from "./pages/ErrorPage400";
import AccountPage from "./pages/AccountPage";
import { Box } from "@mui/material";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [user, setUser] = useState({ username: "", userAvatar: null });
  const [articleQuery, setArticleQuery] = useState({
    sort: null,
    topic: null,
    order: null,
  });
  const [errorMessage, setErrorMessage] = useState({});

  useEffect(() => {
    setIsLoading(true);
    fetchArticles(articleQuery)
      .then((res) => {
        setIsLoading(false);
        setErrorMessage({});
        setArticles(res.data.articles);
      })
      .catch((err) => {
        setErrorMessage(err.response.data);
      });
  }, [articleQuery]);

  useEffect(() => {
    localStorage.getItem("username")
      ? setUser({
          username: localStorage.getItem("username"),
          userAvatar: localStorage.getItem("avatar"),
        })
      : setUser({ username: "", userAvatar: null });
  }, [articleQuery]);

  useEffect(() => {});

  return (
    <>
      <Header user={user} />
      <Box sx={{ maxWidth: "1300px", margin: "auto" }}>
        <Routes>
          <Route path="/400" element={<ErrorPage400 />} />
          <Route path="/404" element={<ErrorPage404 />} />
          <Route path="*" element={<ErrorPage404 />} />
          <Route
            path="/"
            element={
              <Homepage
                articles={articles}
                isLoading={isLoading}
                setArticleQuery={setArticleQuery}
              />
            }
          />
          <Route
            path="/articles"
            element={
              <AllArticles
                isLoading={isLoading}
                articles={articles}
                setArticleQuery={setArticleQuery}
              />
            }
          />
          <Route
            path="/articles/:article_id"
            element={
              <SingleArticle
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                username={user.username}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
              />
            }
          />
          <Route
            path="/:topic/articles"
            element={
              <TopicArticles
                articles={articles}
                isLoading={isLoading}
                setArticleQuery={setArticleQuery}
                errorMessage={errorMessage}
              />
            }
          />
          <Route
            path="/account"
            element={
              <AccountPage
                user={user}
                setUser={setUser}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
              />
            }
          />
        </Routes>
      </Box>
    </>
  );
}

export default App;
