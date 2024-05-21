// src/components/PostCard.js
import React, {useState} from "react"
import styles from "./PostCard.module.scss"

const PostCard = ({post, onCreatePost}) => {
  const [newPostContent, setNewPostContent] = useState("")

  const handleInputChange = (e) => {
    setNewPostContent(e.target.value)
  }

  const handlePostSubmit = () => {
    if (newPostContent.trim()) {
      onCreatePost(newPostContent)
      setNewPostContent("")
    }
  }

  return (
    <div className={styles.postCard}>
      {post ? (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </>
      ) : (
        <div className={styles.createPost}>
          <textarea
            placeholder="Escreva seu post..."
            value={newPostContent}
            onChange={handleInputChange}
            className={styles.textarea}
          />
          <button onClick={handlePostSubmit} className={styles.postButton}>
            Postar
          </button>
        </div>
      )}
    </div>
  )
}

export default PostCard
