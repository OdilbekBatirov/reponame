import React, { useState } from 'react'
import styles from './TodoItem.module.css'
import { Modal } from '../UI/Modal'

const TodoItem = ({ id, text, onDelete }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(false)
    }
    const closeModal = () => {
        setIsModalOpen(true)
    }
 
    const handleDelete = () => {
        onDelete(id)           
        closeModal()
    }
    return (
        <div className={styles.todoItem}>
            <span className={styles.todoText}>{text}</span>
            <button className={styles.deleteButton} onClick={openModal}>Delete</button>

            <Modal isOpen={isModalOpen} onClose={closeModal}>  
                <h2>Delete Todo</h2>
                <p>jhgvfcdxcfgvhbkjnlmjhgf</p>
                <button onClick={handleDelete}>Yes</button>
                <button onClick={closeModal}>No</button> 
            </Modal>
        </div>
    )
}

export default TodoItem

