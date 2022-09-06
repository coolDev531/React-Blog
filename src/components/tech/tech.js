import {Link} from 'react-router-dom';
import './styles/tech.css';

function TechPage(props){
    console.log(props.data)
    let actualData;
    if(props.data===null){
        return
    }else{
        actualData=props.data;
    }
    return(
        <div className="tech-wrapper">
            <div className="tech-all-posts">
                <h2 className="tech-all-header">Technology</h2>
                <div className="all-posts-wrapper">
                    {
                        actualData.allTech.map(items=>(
                            <div data-aos="fade-up" className="all-posts">
                                <img src={items.location} alt="" className="post-image"></img>
                                <div className="side-content">
                                    <h3><Link to={`/category/technology/${items.title}`} className="title-links">{items.title}</Link></h3>
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
                        actualData.recentTech.map(items=>(
                            <div data-aos="fade-up" className="recent-posts">
                                <img src={items.location} alt="" className="post-image"></img>
                                <div className="side-content">
                                    <h3><Link to={`/category/technology/${items.title}`} className="title-links">{items.title}</Link></h3>
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

export default TechPage;