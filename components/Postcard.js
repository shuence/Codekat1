import Image from 'next/image'
import Logo from '../static/logo.png'
import {FiBookmark} from 'react-icons/fi'
import Banner from '../static/banner.png'
import Link from 'next/link'


const styles = {
  wrapper: `max-w-[46rem] h-[10rem] flex items-center gap-[1rem] cursor-pointer`,
  postDetails: `flex-[2.5] flex flex-col`,
  authorContainer: `flex gap-[.4rem]`,
  authorName: `font-semibold`,
  authorImageContainer: `grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
  authorImage: `object-cover`,
  title: `font-bold text-2xl`,
  briefing: `text-[#787878]`,
  detailsContainer: `flex items-center justify-between text-[#787878]`,
  articleDetails: `my-2 text-[.8rem]`,
  bookmarkContainer: `cursor-pointer`,
  category: `bg-[#F2F3F2] p-1 rounded-full`,
  thumbnailContainer: `flex-1`,
}


const PostCard = () => {

  return (
    <Link href={'/post/123'}>
      <div className={styles.wrapper}>
        <div className={styles.postDetails}>
          <div className={styles.authorContainer}>
            <div className={styles.authorImageContainer}>
                <Image
                  src={Logo}
                  alt='author'
                  className={styles.authorImage}
                  height={40}
                  width={40}
                />
              
            </div>
            <div className={styles.authorName}>Shuence</div>
          </div>
          <h1 className={styles.title}>7 Free tools that make you more productive </h1>
          <div className={styles.briefing}>Productivity is a skill that can be learned</div>
          <div className={styles.detailsContainer}>
          <span classname={styles.articleDetails}> Jun 15 • 5 min read • 
          <span className={styles.category}>Productivity</span></span>
          <span classname={styles.bookmarkContainer}><FiBookmark classname='h-5 w-5'/></span>
        </div>
        </div>
        <div className={styles.thumbnailContainer}>
          <Image
            src={Banner}
            alt='thumbnail'
            height={100}
            width={100}
          />
        </div>
      </div>
    </Link>

  )
}

export default PostCard