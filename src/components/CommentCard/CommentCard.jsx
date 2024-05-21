// src/components/CommentCard/CommentCard.js
import React from "react"
import styles from "./CommentCard.module.scss"

const CommentCard = ({comment}) => {
  return (
    <div className={styles.commentCard}>
      <p>{comment.content}</p>
    </div>
  )
}

export default CommentCard
