import Link from 'next/link'; 
import Image from 'next/image'; 
import styles from "./card.module.css"; 
import cls from 'classnames'; 
const Card = (props) => {
    return <div>
    <a className= {styles.card}>
<div classname={cls("glass", styles.container)}>
    <div className= {styles.cardHeaderWrapper}>
    <h2 className={styles.cardHeader}>{props.name}
    </h2></div>
    <div className= {styles.cardImageWrapper}>
    <Image className={styles.cardImage} src = {props.asset} width={260} height = {160} />
    </div>
    </div>
    </a>
    </div>
}


export default Card; 