import HomeArticleContainer from "../Components/HomeArticleContainer"

const Homepage =({articles, isLoading}) =>{
   
    const articlesToDisplay = articles.slice(0, 10)
    if(isLoading){
        return (
            <p>Loading...</p>
        )
    }
    return (
        <main>
        <h2>Latest stories</h2>
        <HomeArticleContainer articles={articlesToDisplay}/>
        </main>
    )
}

export default Homepage
