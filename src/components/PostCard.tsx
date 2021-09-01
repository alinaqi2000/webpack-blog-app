import React from 'react'
import Post from '../models/Post'
import moment from 'moment'
export default function PostCard(post: Post) {
    return (
        <div className="col-sm-6 col-md-4 col-lg-3 mt-4">
            <div className="card card-inverse card-info">
                <img className="card-img-top" src={post.image} />
                <div className="card-block">
                    <figure className="profile profile-inline">
                        <img src={post.author_avatar} className="profile-avatar" alt={post.author_name} />
                    </figure>
                    <h4 className="card-title">{post.author_name}</h4>
                    <div className="card-text">
                        {post.title}
                    </div>
                </div>
                <div className="card-footer">
                    <small>Last updated {moment(post.createdAt).fromNow()}</small>
                    {/* <button className="btn btn-info float-right btn-sm">Follow</button> */}
                </div>
            </div>
        </div>
    )
}
