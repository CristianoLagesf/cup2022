import styles from "./tableGroup.module.css"
import groupsJson from "../../pages/api/groups.json"
// interface groups {
//   name: String
//   pj: Number
//   vit: Number
//   e: Number
//   der: Number
//   gm: Number
//   sg: Number
//   pts: Number
//   group: String

// }

export default function Groups() {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.row}>Group A</th>
            <th className={styles.row}>PJ</th>
            <th className={styles.row}>VIT</th>
            <th className={styles.row}>E</th>
            <th className={styles.row}>DER</th>
            <th className={styles.row}>GM</th>
            <th className={styles.row}>SG</th>
            <th className={styles.row}>Pts</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          <tr className={styles.tr}></tr>
          <tr className={styles.tr}>
            <td className={styles.col}>Cell 1</td>
            <td className={styles.col}>Cell 1</td>
            <td className={styles.col}>Cell 1</td>
            <td className={styles.col}>Cell 1</td>
            <td className={styles.col}>Cell 1</td>
            <td className={styles.col}>Cell 1</td>
            <td className={styles.col}>Cell 1</td>
            <td className={styles.col}>Cell 1</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.col}>Cell 1</td>
            <td className={styles.col}>Cell 1</td>
            <td className={styles.col}>Cell 1</td>
            <td className={styles.col}>Cell 1</td>
            <td className={styles.col}>Cell 1</td>
            <td className={styles.col}>Cell 1</td>
            <td className={styles.col}>Cell 1</td>
            <td className={styles.col}>Cell 1</td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.col}>Cell 1</td>
            <td className={styles.col}>Cell 1</td>
            <td className={styles.col}>Cell 1</td>
            <td className={styles.col}>Cell 1</td>
            <td className={styles.col}>Cell 1</td>
            <td className={styles.col}>Cell 1</td>
            <td className={styles.col}>Cell 1</td>
            <td className={styles.col}>Cell 1</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
