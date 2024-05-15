import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;

}

export function Comment({content, onDeleteComment}: CommentProps) {
const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount((state) => {
            return state + 1;
        });
    }

    return (
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false} 
                src="https://github.com/guitefreire.png"
                alt=""
                />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Guilherme Freire</strong>
                            <time title="10 de maio de 2024 às 16:38" dateTime="2024-05-10 16:38:00">Cerca de 1h</time>
                        </div>

                        <button
                            onClick={handleDeleteComment}
                            title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}