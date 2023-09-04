import TopicBar from "../Components/TopicBar"
import ArticleContainer from "../Components/ArticleContainer.jsx"

const AllArticles = ({articles}) => {
    
    return(
        <main>
            <TopicBar />
            <ArticleContainer articles={articles}/>
        </main>
    )
}

export default AllArticles