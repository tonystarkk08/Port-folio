import React, { useState } from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';

const certificates = [
    // {
    //     title: 'Mern Stack front to back',
    //     image: '/portfolio/certificates/udemy.png',
    //     link: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-3cdd77f0-25c7-473b-8f9d-d010639193fe.pdf'
    // },
    // {
    //     title: 'Problem Solving Intermediate',
    //     image: '/portfolio/certificates/hackerrank.png',
    //     link: 'https://www.hackerrank.com/certificates/ed28cca521af'
    // },
    // {
    //     title: 'Front-End Web Development with React',
    //     image: '/portfolio/certificates/coursera-react.png',
    //     link: 'https://www.coursera.org/account/accomplishments/verify/TY9DY8GZ3Z49'
    // },
    // {
    //     title: 'Front-End Web UI Frameworks and Tools: Bootstrap 4',
    //     image: '/portfolio/certificates/coursera-bootstrap.png',
    //     link: 'https://www.coursera.org/account/accomplishments/verify/EVQWQRTTKYU7'
    // },
    // {
    //     title: 'Android App Development',
    //     image: '/portfolio/certificates/internshala.jpg',
    //     link: 'https://trainings.internshala.com/certificate/preview/android/coe/dashbaord?score=true'
    // }
];

const experience = [
    // {
    //     company: 'Fashn.me',
    //     image: '/portfolio/fashn.me.png',
    //     date: 'Jan 2020 - Feb 2020',
    //     description: `Worked as a backend engineer to develop backend for
    //     Patang App. Later worked on a bootstrap based Admin Dashboard.`,
    //     link: 'https://play.google.com/store/apps/details?id=com.patang'
    // },
    // {
    //     company: 'Jiit',
    //     image: '/portfolio/jiit.png',
    //     date: 'May 2020 - Jun 2020',
    //     description: `Interned within the college for 6 weeks and created
    //     DevConnector. Worked both on the front-end and backend.`,
    //     link: 'https://sheltered-garden-98635.herokuapp.com/'
    // }
]

const skills = [
    {
        icon: 'fab fa-java',
        color: '#E44D26'
        
    },
    {
        icon: 'fab fa-css3-alt',
        color: '#264de4'
    },
    {
        icon: 'fab fa-js-square',
        color: '#F0DB4F'
    },
    {
        icon: 'fab fa-react',
        color: '#61DBFB'
    },
    {
        icon: 'fab fa-html5',
        color: '#68A063'
    },
    {
        icon: 'fab fa-docker',
        color: '#c69'
    },
    {
        icon: 'fab fa-aws',
        color: '#Cc3534'
    },
    {
        icon: 'fab fa-github',
        color: '#CC3540'
    },

]


const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => `perspective(600px) scale(${s})`;

const ExpCard = ({ experience }) => {
    const { company, image, date, description, link } = experience;
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
    return (
        <animated.div className='col-xs-12 col-sm-6 col-md-4 shadow mx-4 my-2 rounded'
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
        >
            <Card.Body>
                <img className='exp_image' src={image} alt='company' />
                <Card.Title>{company}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Link href={link}><i className="fas fa-link"></i></Card.Link>
            </Card.Body>
        </animated.div>
    )
}


const Experience = () => {

    return (
        <Container>
            <Row className="text-center justify-content-center">
                {/* <Col xs={12}>
                    <h1 className="display-4 font-weight-bolder my-4 py-4">Experience</h1>
                </Col> */}
                {experience.map((exp, i) => <ExpCard experience={exp} key={i} />)}
                <Col xs={12}>
                    <h1 className="display-4 font-weight-bolder pt-4">Skills</h1>
                    <ul className="list-inline">
                        {
                            skills.map(({ icon, color }, index) =>
                                <li className="list-inline-item glow" key={index} style={{ ['--color']: color }}>
                                    <i className={icon}></i>
                                </li>
                            )
                        }
                    </ul>
                </Col>
                <Col xs={12}>
                    <h1 className="font-weight-bolder" style={{ fontSize: '3rem' }}>Certifications</h1>
                </Col>
                {
                    certificates.map(({ image }) =>
                        <Col className='p-0 m-3' xs={8} sm={3}>
                            <Card.Img variant='top' src={image} />
                        </Col>
                    )
                }
            </Row>
        </Container>
    )
}

export default Experience;
