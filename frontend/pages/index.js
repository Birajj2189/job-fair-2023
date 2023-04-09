import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Main from '../components/Main'

export default function Home() {
  return (
    <div className={styles.container}>
    <Navbar/>
    <Main/>
    </div>
  )
}
