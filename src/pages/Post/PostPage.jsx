// src/pages/Post/PostPage.js
import React, {useState, useEffect} from "react"
import {useParams} from "react-router-dom"
import Header from "../../components/Header/Header"
import CommentCard from "../../components/CommentCard/CommentCard" // Supondo que você tenha um componente CommentCard
import styles from "./PostPage.module.scss"

const PostPage = () => {
  const {id} = useParams()
  const [post, setPost] = useState(null)
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState("")

  useEffect(() => {
    // Função para buscar os detalhes do post pelo id
    const fetchPostDetails = async () => {
      try {
        // Substitua pela sua lógica de buscar os dados do post
        const postData = await fetch(`/api/posts/${id}`).then((res) =>
          res.json()
        )
        setPost(postData)
        setComments(postData.comments)
      } catch (error) {
        console.error("Erro ao buscar os detalhes do post:", error)
      }
    }

    fetchPostDetails()
  }, [id])

  const handleCommentChange = (e) => {
    setNewComment(e.target.value)
  }

  const handleCommentSubmit = async () => {
    if (newComment.trim()) {
      try {
        // Substitua pela sua lógica de adicionar um novo comentário
        const addedComment = await fetch(`/api/posts/${id}/comments`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({content: newComment}),
        }).then((res) => res.json())

        setComments([addedComment, ...comments])
        setNewComment("")
      } catch (error) {
        console.error("Erro ao adicionar o comentário:", error)
      }
    }
  }

  return (
    <div>
      <Header isLoggedIn={true} />
      <div className={styles.postContainer}>
        {post ? (
          <div className={styles.postDetails}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ) : (
          <p>Carregando post...</p>
        )}

        <div className={styles.commentsSection}>
          <h3>Comentários</h3>
          <div className={styles.newComment}>
            <textarea
              value={newComment}
              onChange={handleCommentChange}
              placeholder="Escreva seu comentário..."
              className={styles.textarea}
            />
            <button
              onClick={handleCommentSubmit}
              className={styles.commentButton}>
              Comentar
            </button>
          </div>
          {comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PostPage
