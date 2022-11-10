import styles from "./cardGames.module.css"
import brasil from "../assets/flags/brazil.png"
import Image from "next/image"

export default function CardGames() {
  return (
    <div className={styles.Maincard}>
      <div className={styles.date}>
        <span>24/11</span>
        <span className={styles.dateWeek}>friday</span>
      </div>

      <div className={styles.gameCard}>
        <ul className={styles.list}>
          <li className={styles.gameLine}>
            <div>
              <Image className={styles.flags} src={brasil} alt="flag" />
            </div>
            <div>08:00</div>
            <div>
              <Image className={styles.flags} src={brasil} alt="flag" />
            </div>
          </li>
          <hr className={styles.line} />
          <li className={styles.gameLine}>
            <div>
              <Image className={styles.flags} src={brasil} alt="flag" />
            </div>
            <div>08:00</div>
            <div>
              <Image className={styles.flags} src={brasil} alt="flag" />
            </div>
          </li>
          <hr className={styles.line} />
          <li className={styles.gameLine}>
            <div>
              <Image className={styles.flags} src={brasil} alt="flag" />
            </div>
            <div>08:00</div>
            <div>
              <Image className={styles.flags} src={brasil} alt="flag" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
