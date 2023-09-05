const CommentCard = ({comment}) =>{

    return (
        <li className="comment-card">
            <section className="comment-body">
                <p className="comment-author">{comment.author}</p>
                <p>{comment.body}</p>
                <p className="comment-date">Posted at: {comment.created_at.substring(0,10)}</p>
            </section>
            <p className="comment-votes">Votes: {comment.votes}</p>

        </li>
    )
}

export default CommentCard