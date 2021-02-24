import styles from '../styles/components/Perfil.module.css'

export default function Profile() {
    return(
        <div className={styles.profileContainer}>
          <img src="https://github.com/heckenzou1.png" alt="heitor" />
          <div>
              <strong>kenzou</strong>
              <p>
                  <img src="icons/level.svg" alt="" />
                  Level 5
              </p>
          </div>
        </div>
    )
}