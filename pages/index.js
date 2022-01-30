import Head from 'next/head'
import Banner from '../components/banner'
import Card from '../components/card'
import styles from '../styles/Home.module.css'
import Image from 'next/image'; 
import TopImage from '../components/image'; 

export default function Home() {
  const handleOnBannerButtonClick = () => {
    console.log("Hello sir"); 
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Lulo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
   
        </h1>

        <Banner buttonText= "Sign Up" handleOnClick={handleOnBannerButtonClick}/>

      <TopImage assetName={"/static/3-phones"}/>

<div className={styles.cardLayout}>
<Card name={"How Lulo Works"} asset={"/static/howluloworks.png"}/>
<Card name={"Live a little"} asset={"/static/livealittle.png"}/>
<Card name={"Community"} asset={"/static/community.png"}/>
</div>
      </main>

      <footer className={styles.footer}>
  
     
      </footer>
    </div>
  )
}
