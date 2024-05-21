// src/pages/Feed/FeedPage.js
import React, {useState} from "react"
import Header from "../../components/Header/Header"
import PostCard from "../../components/PostCard/PostCard"
import styles from "./FeedPage.module.scss"

const FeedPage = () => {
  const [posts, setPosts] = useState([
    {id: 1, title: "Post 1", body: "This is the body of post 1"},
    {id: 2, title: "Post 2", body: "This is the body of post 2"},
    // Adicione mais posts conforme necessário
  ])

  const handleCreatePost = (content) => {
    const newPost = {
      id: posts.length + 1,
      title: `Post ${posts.length + 1}`,
      body: content,
    }
    setPosts([newPost, ...posts])
  }

  return (
    <div>
      <Header isLoggedIn={true} />
      <div className={styles.feedContainer}>
        <PostCard onCreatePost={handleCreatePost} />
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

export default FeedPage
