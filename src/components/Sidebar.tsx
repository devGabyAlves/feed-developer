import { PencilLine } from 'phosphor-react'

import gabyPerfil from '../assets/gaby-perfil.jpg'

import styles from './Sidebar.module.css'
import { Avatar } from './Avatar'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover} 
            src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?auto=format&fit=crop&q=50&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            />

            <div className={styles.profile}>
                <Avatar src={gabyPerfil}/>

                <strong>Gabrielly Alves</strong>
                <span>FullStack Developer</span>
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