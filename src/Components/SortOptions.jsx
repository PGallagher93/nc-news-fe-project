const SortOptions = ({setArticleQuery}) => {
    return (
        <div className="sort-options-container">
         
         <select defaultValue= "unchosen" selected onChange ={(e)=>{
            setArticleQuery((currVal)=>{
               return {...currVal, sort: e.target.value}
            })
         }} >
            <option value="unchosen" hidden>Sort articles</option>
            <option value="created_at">Date</option>
            <option value="comment_count" >Most commented</option>
            <option value="votes">Most popular</option>
         </select>
         <select defaultValue="unchosen" selected onChange={(e)=>{
            setArticleQuery((currVal)=>{
               return {...currVal, order:e.target.value}
            })
         }}>
            <option value="unchosen" hidden>Order</option>   
            <option value="desc">Highest-lowest</option>  
            <option value="asc">Lowest-highest</option>
         </select>
        </div>
    )
}

export default SortOptions