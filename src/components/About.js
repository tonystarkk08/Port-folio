import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { useSpring, useTrail, animated } from 'react-spring';

const paragraphs = [
    `Greetings! I'm Mohammad Sadique, a passionate Full Stack Developer.
    With a foundation in both front-end and back-end technologies, I thrive on the dynamic challenges of 
    bridging the gap between user interfaces and server logic. 
    My goal is to contribute my skills where innovation and creativity are valued.
    I am excited about opportunities to work on challenging projects that push the boundaries of what 
    technology can achieve. Whether it's enhancing user experiences, optimizing backend processes, or diving
     into emerging technologies.Let's build something extraordinary together!!!`
  
];

 const About = () => {

    const [grow, setGrow] = useState(true);
    const trails = useTrail(paragraphs.length, {
        fontSize: grow ? '2rem' : '3rem'
    });

    const [flipped, set] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    });

    const animation = trails.map((style, index) =>
        <animated.p style={style} key={index} onClick={() => setGrow(!grow)}>
            {paragraphs[index]}
        </animated.p>
    );

    return (
        <Container >
            <Row className="text-center justify-content-center">
                <Col xs={12} className='p-0'>
                    <h1 className="display-3 font-weight-bolder py-4 my-4">About Me</h1>
                </Col>
                <Col className="display-6" lg={8}>
                    <div className='text-center about-div' onClick={() => set(!flipped)}>
                        <animated.div className='c' style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
                            <img src='/portfolio/sadique.jpg' alt="#" className="about_image mb-3" />
                        </animated.div>
                        <animated.div className='c' style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
                            <img src='/portfolio/stark.jpg' alt="#" className="about_image mb-3" />
                        </animated.div>
                    </div>
                    {animation}
                </Col>
            </Row>
        </Container>
     )
 }

 export default About;
