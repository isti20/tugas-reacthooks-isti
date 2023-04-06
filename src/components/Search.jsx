import { useEffect, useState } from 'react';
import axios from 'axios';
import Post from './Post';

const Search = () => {
    const [news, setNews] = useState([])
    const [query, setQuery] = useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&q=${query}&apiKey=1235311a10564850bd45dd4a2400da4c`)
                console.log(data)
                setNews(data.articles)
            } catch (error) {
                console.error(error)
            }
        }

        fetchData()
    }, [query])

    return (
        <div>
            <div className="search">
                <input type="text"
                    placeholder={"Search News"}
                    className={"input"}
                    onChange={event => setQuery(event.target.value)}
                    value={query}
                />
            </div>
            <div className="results">
                {news.map(element => (
                    <div key={element.url}>
                    <Post
                    urlToImage={element.urlToImage}
                    title={element.title} 
                    author={element.author}
                    description={element.description?element.description.slice(0, 150):" "}
                    newsUrl={element.url}
                    publishedAt={element.publishedAt}/>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Search;
