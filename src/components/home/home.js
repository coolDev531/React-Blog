import "./styles/home.css"
import {Link} from 'react-router-dom'
function HomePage(props){

    let actualData;
    if(props.data===null){
        return
    }else{
        actualData=props.data;
    }

    return(
        <div className="home-page-wrapper">
            <div className="tech-bg-wrapper">
            <Link className="big-box" to={`/category/technology/${props.data.backgroundBoxOne.title}`}>
                <div>
                    <h3>{actualData.backgroundBoxOne.title}</h3>
                    <p>{actualData.backgroundBoxOne.category} / {props.data.backgroundBoxOne.date}</p>
                </div>
            </Link>
                <div className="small-box-wrapper">
                <Link to={`/category/technology/${props.data.backgroundBoxTwo.title}`}>
                    <div className="small-box-one">
                        <h4>{actualData.backgroundBoxTwo.title}</h4>
                        <p>{actualData.backgroundBoxTwo.category} / {props.data.backgroundBoxTwo.date}</p>
                    </div>
                </Link>
                <Link to={`/category/technology/${props.data.backgroundBoxThree.title}`}>
                    <div className="small-box-two">
                        <h4>{actualData.backgroundBoxThree.title}</h4>
                        <p>{actualData.backgroundBoxThree.category} / {props.data.backgroundBoxThree.date}</p>
                    </div>                    
                </Link>
                </div>
            </div>
            <div className="sports-latest-wrapper">
                <h2>Latest in sports!</h2>
                <div className="sports-latest">
                {actualData.sportsLatest.map(items=>(
                    <div className="sports-latest-elements">
                        <img src={items.location} alt=""></img>
                        <h3><Link to={`/category/sports/${items.title}`} className="header-link">{items.title}</Link></h3>
                        <p>{items.abstract}</p>
                        <p className="category-date">{items.category} / {items.date}</p>
                    </div>
                ))}
                </div>
            </div>
            <div className="tech-wrapper-home">
                <div className="tech-all-posts">
                    <h2 className="tech-all-header">Latest in Hollywood!</h2>
                    <div className="all-posts-wrapper-home">
                        {
                            actualData.latestHollywood.map(items=>(
                                <div class="all-posts">
                                    <img src={items.location} alt="" className="post-image"></img>
                                    <div className="side-content">
                                        <h3><Link to={`/category/hollywood/${items.title}`} className="title-links">{items.title}</Link></h3>
                                        <p>{items.abstract}</p>
                                        <p className="category"><span style={{color:"black"}}>{items.category}</span>/ {items.date}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="tech-recent-posts-home">
                    <h2 className="tech-recent-header">Top posts</h2>
                    <div className="recent-posts-wrapper-home">
                        {
                            actualData.topLatestHollywood.map(items=>(
                                <div class="recent-posts">
                                    <img src={items.location} alt="" className="post-image"></img>
                                    <div className="side-content">
                                        <h3><Link to={`/category/hollywood/${items.title}`} className="title-links">{items.title}</Link></h3>
                                        <p className="category"><span style={{color:"black"}}>{items.category}</span>/ {items.date}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="fitness-wrapper">
                <h2>Latest in fitness!</h2>
                <div className="fitness-element-wrapper">
                    {actualData.latestFitness.map(items=>(
                        <div className="fitness-elements">
                            <img src={items.location} alt=""></img>
                            <h3><Link to={`/category/fitness/${items.title}`} className="header-link">{items.title}</Link></h3>
                            <p>{items.abstract}</p>
                            <p className="category-date">{items.category} / {items.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage