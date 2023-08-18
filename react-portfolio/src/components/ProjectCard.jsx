import Card from 'react-bootstrap/Card';
import '../styles/Projects.css';

export default function ProjectCard(props) {
    return (
        <div className='card-padding'>
            <Card style={{ width: '21rem' }}>
                <Card.Img variant='top' src={props.siteImage} className='image-size' />
                <Card.Body className='body-size' >
                    <Card.Title><Card.Link
                        href={props.link}
                        className='site-link'><h2 className='title'>{props.name}</h2>
                    </Card.Link>
                    </Card.Title>
                    <Card.Text className='text-spacing'>
                        {props.languages}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div >
    )
}
