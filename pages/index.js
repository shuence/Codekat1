import Header from "../components/Header"
import Banner from "../components/banner"
import Postcard from "../components/Postcard"



export default function Home() {
  
    const styles = {
      wrapper: `mx-auto`,
      main: `flex justify-center`,
      container: `max-w-7xl flex-1`,
      postsList: `flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3`,
    }
  


  return (
    <div className={styles.wrapper}>
      <Header/>
      <Banner/>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.postsList}>
            <Postcard/>
            <Postcard/>
            <Postcard/>
          </div>
        </div>
      </div>
    </div>


  )
}

