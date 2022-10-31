import React from 'react'
import { Link } from 'react-router-dom';
import '../components/article.css'
import { Col } from 'react-bootstrap';
const Article = (props) => {
    const { id, name, thumb } = props;
    return (
        <>
            <Col xs={6} md={3}>
                <article key={id} className="resep-list">
                    <div className='thumb'>
                        <img src={thumb} alt={name}/>
                    </div>
                    <Link  to={`/detail/${id}`}><h2>{name}</h2></Link>
                </article>
            </Col>
        </>
    )
}
export default Article;