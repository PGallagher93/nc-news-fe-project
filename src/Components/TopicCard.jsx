
import{Link} from 'react-router-dom'
const TopicCard = ({topicName}) =>{
    return (
        <Link to={`/${topicName}/articles`}>
        <li>{topicName}</li>
        </Link>
    )
}

export default TopicCard