import styles from './AppHero.module.scss'

interface Props {
    title: string
    description: string
}

const AppHero  = ({title, description}: Props) => {
  return (
    <div className={styles.AppHeroContainer}>
        <div className={styles.AppHero}>
						<h1>
                {title}
            </h1>
            <p>{description}</p>
        </div>
    </div>
  )
};

export default AppHero;
