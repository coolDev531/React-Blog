import {useParams} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandsClapping } from '@fortawesome/free-solid-svg-icons';
import './styles/blog.css'
import {Link} from 'react-router-dom'
function FoodBlogPage(props){
    console.log(props.data)
    let {id}=useParams();

    let actualData;
    if(props.data===null){
        return
    }else{
        actualData=props.data;
    }

    return(
        <div className="blog-page">
            <h1>{id}</h1>
            {actualData.allFood.filter(items=>items.title===id).map(items=>(
                <div key={items.num} className="blog-page-content">
                    <img src={items.location} alt=""></img>
                    <p>{items.content}</p>
                    <div className="category-likes">
                        <span className="category">{items.category}</span>
                        <span className="hands-clapping"><FontAwesomeIcon icon={faHandsClapping} /> 1.1K likes</span>
                    </div>
                    <hr />
                </div>
            ))} 
            <div className="icon-name">
                <img src={actualData.articleIcon} alt=""></img>
                <div class="icon-details">
                    <h3>Written By:</h3>
                    <p>{actualData.blogOwner}</p>
                    {actualData.allFood.filter(items=>items.title===id).map(items=>(
                        <p>{items.date}</p>
                    ))}
                </div>
            </div>
            <div className="more-articles-section">
                <h2>More on Siren!</h2>
                <hr />
                <div className="more-siren">
                {actualData.recentFood.map(items=>(
                    <div key={items.num} className="more-page-content">
                        <img src={items.location} alt="" className="article-image"></img>
                        <h3><Link to={`/category/food/${items.title}`} className="title-links">{items.title}</Link></h3>
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

export default FoodBlogPage;