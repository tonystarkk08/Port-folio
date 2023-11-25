import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { projectList } from './projectlist';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) scale(${s})`

const ProjectCard = ({ project }) => {

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
    const { title, created, description, demo_link, github_link } = project;

    return (
        <Col xs={12} md={6} lg={4} className='p-4'>
            <animated.div
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
            >
                <Card.Body className='shadow'>
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{created}</Card.Subtitle>
                    <Card.Text>{description}</Card.Text>
                    <Button variant='link' className='p-0 m-0 shadow-none' href={demo_link} disabled={demo_link !== '' ? false : true}><i className="fas fa-desktop"></i>{' '}Demo Link</Button>
                    <Button variant='link' className='pl-2 p-0 m-0 shadow-none' href={github_link} disabled={github_link !== '' ? false : true}><i className="fab fa-github"></i>{' '}Github Link</Button>
                </Card.Body>
            </animated.div>
        </Col>
    )
}


const Projects = () => {

    const cards = projectList.map(project => <ProjectCard project={project} key={project.title} />)

    return (
        <Container >
            <Row>
                <Col xs={12} className='text-center my-5'>
                    <h1 className="display-3 font-weight-bolder">Projects</h1>
                </Col>
                {cards}
            </Row>
        </Container>
    )
}

export default Projects;
