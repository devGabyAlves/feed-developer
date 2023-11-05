import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post, PostType } from './components/Post';

import styles from './App.module.css'

import './global.css'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/devGabyAlves.png',
      name: 'Gabrielly Alves',
      role: 'FullStack Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph',  content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz com React. O nome do projeto é Devs Feed 🚀',},
      { type: 'link', content: 'https://github.com/devGabyAlves'},
    ],
    publishedAt: new Date('2023-11-05 16:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/alves0611.png',
      name: 'Gabriel Alves',
      role: 'SRE Devops',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋',},
      { type: 'paragraph',  content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
      { type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-11-03 16:00:00')
  },
];

function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

export default App
