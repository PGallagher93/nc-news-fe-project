import HomeArticleContainer from "../Components/HomeArticleContainer"

const Homepage =({articles}) =>{
   
    const articlesToDisplay = articles.slice(0, 10)
    return (
        <main>
        <h2>Latest stories</h2>
        <HomeArticleContainer articles={articlesToDisplay}/>
        </main>
    )
}

export default Homepage
