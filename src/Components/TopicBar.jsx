import { fetchTopics } from "../api"
import {useEffect, useState} from 'react'
import TopicCard from "./TopicCard"

const TopicBar = () =>{
    const [topics, setTopics] = useState([])
    useEffect(()=>{
        fetchTopics().then((res)=>{
            setTopics(res.data.topics)
        })

    }, [])


    return (
        <ul className="topic-choices">
            {topics.map((topic)=>{
                return (
                    <TopicCard key = {topic.slug} topicName= {topic.slug}/>
                )
            })}
           
        </ul>
    )
}

export default TopicBar