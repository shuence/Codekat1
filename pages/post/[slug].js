import ReadersNav from "../../components/ReadersNav"
import Recommendations from "../../components/Recommendations"


const styles = {
  wrapper: ``,
  content: `flex`,
}

const Post = () => {
  return (
    <div className={styles.content}>
        <ReadersNav />
        <div> Article main go here</div>
        <Recommendations/>
        
    </div>    
  )
}

export default Post