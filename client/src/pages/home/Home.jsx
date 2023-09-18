import Navbar from "../../components/navbar/Navbar"
import Hero from "../../components/hero/Hero"
import HomeBody from "../../components/homebody/HomeBody"
import { bodyContent } from "../../constants/bodyContent"
import Homebodybottom from "../../components/homebody/Homebodybottom"

function Home() {
  return (
    <>
       <div>
        <Navbar/>
       </div>
       <div >
        <Hero/>
       </div>
       <div className="transition ease-in duration-1000">
        {
          bodyContent.map((content)=>(
            <HomeBody key={content.id} id={content.id} src={content.src} alt={content.alt} title={content.title} desc={content.desc}/>
          ))
        }
        <Homebodybottom/>
       </div>
    </>
  )
}

export default Home