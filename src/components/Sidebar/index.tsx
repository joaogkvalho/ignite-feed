import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'

import styles from './styles.module.css'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
           <img
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            />

            <div className={styles.profile}>
                <Avatar hasBorder src="https://github.com/joaogkvalho.png" />

                <strong>João Gabriel</strong>
                <span>Desenvolvedor ReactJS</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}