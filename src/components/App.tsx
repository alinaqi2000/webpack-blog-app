import React, { useState, useEffect } from 'react'
import axios from 'axios';
import PostCard from './PostCard'
import Post from '../models/Post'
import loader from '../assets/loader.gif'
export default function App() {
    const [posts, setPosts] = useState<Post[]>([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        getPosts()
    }, [])
    async function getPosts() {
        setLoading(true)
        const data = await axios.get<Post[]>("https://60c9c5c9772a760017204610.mockapi.io/posts").then(res => res.data)
        setPosts(data)
        setLoading(false)
    }
    return (
        <div className="container mb-5">
            <header className="mb-3 py-3">
                <h3>Blog App</h3>
                <button onClick={getPosts} className="btn btn-sm btn-info">Refresh</button>
            </header>
            <div className="row">
                {
                    loading ?
                        <div className="loader">
                            <img src={loader} alt="Loading..." />
                        </div>
                        : posts.length ? posts.map(
                            post => <PostCard {...post} key={post.id} />
                        ) : <p>No posts in the list</p>
                }
            </div>
        </div>

    )
}
