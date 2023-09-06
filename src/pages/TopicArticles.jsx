import TopicBar from "../Components/TopicBar";
import ArticleContainer from "../Components/ArticleContainer";
import {useParams} from "react-router-dom"

const TopicArticles = ({articles}) => {
    const {topic} = useParams()

    let filteredArticles = articles.filter((article) => article.topic === `${topic}`)
    if(!filteredArticles.length){
          filteredArticles =[...articles]
    }
    return (
        <main>
            <TopicBar/>
            <ArticleContainer articles={filteredArticles}/>
        </main>
    )
}

export default TopicArticles