import Image from "next/image";
import lecturer from '../../../public/Images/lecturer.jpg';
import styles from './header.module.css'

export default function Header() {
    return (
        <div className={styles.headerContainer}>
            <div>
        <Image
          src={lecturer}
          alt={'Logo'}
          loading="eager"
          width={150}
          height={120}
         className={styles.logo}
        />
            </div>
            <h1>IT School: lectures and lessons</h1>

        </div>
    )
}