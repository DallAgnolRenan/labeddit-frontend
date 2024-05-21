// src/components/PostCard.js
import React from "react"
import styles from "./PostCard.module.scss"

const PostCard = ({post}) => {
  return (
    <div className={styles.postCard}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export default PostCard
