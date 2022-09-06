import '../tech/styles/tech.css';
import {Link} from 'react-router-dom';
function SportsPage(props){

    let actualData;
    if(props.data===null){
        return
    }else{
        actualData=props.data;
    }

    return(
    <div className="tech-wrapper">
            <div className="tech-all-posts">
                <h2 className="tech-all-header">Sports</h2>
                <div className="all-posts-wrapper">
                    {
                        actualData.allSports.map(items=>(
                            <div data-aos="fade-up" className="all-posts">
                                <img src={items.location} alt="" className="post-image"></img>
                                <div className="side-content">
                                    <h3><Link to={`/category/sports/${items.title}`} className="title-links">{items.title}</Link></h3>
                                    <p>{items.abstract}</p>
                                    <p className="category"><span style={{color:"black"}}>{items.category}</span>/ {items.date}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="tech-recent-posts">
                <h2 className="tech-recent-header">Top posts</h2>
                <div className="recent-posts-wrapper">
                    {
                        actualData.recentSports.map(items=>(
                            <div data-aos="fade-up" className="recent-posts">
                                <img src={items.location} alt="" className="post-image"></img>
                                <div className="side-content">
                                    <h3><Link to={`/category/sports/${items.title}`} className="title-links">{items.title}</Link></h3>
                                    <p className="category"><span style={{color:"black"}}>{items.category}</span>/ {items.date}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default SportsPage;