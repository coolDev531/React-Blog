import {useParams} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './styles/blog.css'
import {Link} from 'react-router-dom'
function HollywoodBlogPage(props){
    console.log(props.data)
    let navigate=useNavigate();
    let {id}=useParams();

    let actualData;
    if(props.data===null){
        return
    }else{
        actualData=props.data;
    }

    return(
        <div className="blog-page">
            <h1 data-aos="fade" data-aos-duration="900">{id}</h1>
            {actualData.allHollywood.filter(items=>items.title===id).map(items=>(
                <div data-aos="fade-up" key={items.num} className="blog-page-content">
                    <img src={items.location} alt=""></img>
                    <p>{items.content}</p>
                    <div className="category-likes">
                        <span className="category">{items.category}</span>
                    </div>
                    <hr />
                </div>
            ))} 
            <div data-aos="fade-up" className="icon-name">
                <img src={actualData.articleIcon} alt=""></img>
                <div className="icon-details">
                    <h3>Written By:</h3>
                    <p>{actualData.blogOwner}</p>
                    {actualData.allHollywood.filter(items=>items.title===id).map(items=>(
                        <p>{items.date}</p>
                    ))}
                </div>
            </div>
            <div className="more-articles-section">
                <h2>More on Siren!</h2>
                <hr />
                <div className="more-siren">
                {actualData.recentHollywood.map(items=>(
                    <div data-aos="fade-up" key={items.num} className="more-page-content">
                        <img src={items.location} alt="" className="article-image"></img>
                        <h3><Link onClick={()=>{navigate(`/category/hollywood/${items.title}`); window.location.reload();}} to={`/category/hollywood/${items.title}`} className="title-links">{items.title}</Link></h3>
                        <div className="icon-date">
                            <img src={actualData.articleIcon} alt=""></img>
                            <div className="owner-date">
                                <p>{actualData.blogOwner}</p>
                                <p>{items.date}</p>
                            </div>
                        </div>
                    </div>
            ))} 
                </div>
            </div>
        </div>
    )
}

export default HollywoodBlogPage;