import styles from './banner.module.css'; 
const Banner = (props) => {

    return <div className={styles.container}>
    <h3 className={styles.subTitle}>Become a Lulo Washer</h3>
    
    <h1 className={styles.title}><span className={styles.title1}>Make money</span>
    <span className={styles.title2}> doing laundry from home</span></h1>
    <p className={styles.subTitle}>Decide your own prices and when you work</p><div className={styles.buttonWrapper}>
    <button className={styles.button} onClick={props.handleOnClick}>{props.buttonText}</button></div></div>
}



export default Banner; 