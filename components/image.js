import styles from './image.module.css'; 
import Image from 'next/image'; 


const TopImage = (props) => {
    return <div className={styles.imageWrapper}>
    <Image src = {props.assetName} width={100} height={100}/> 
    </div>
}

export default TopImage; 