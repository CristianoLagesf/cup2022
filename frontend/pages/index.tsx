import Image from "next/image"
import CardGames from "../src/components/CardGames"
import styles from "../styles/Home.module.css"
import logo from "../src/assets/logo.svg"
import Groups from "../src/components/TableGroups"


export default function Home() {
  return (
    <div className={styles.main}>
      <Image src={logo} alt="logo" />
      <CardGames />
      <Groups/>
    </div>
  )
}
