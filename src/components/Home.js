import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const AnimatedHeading = () => {
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
    return (
        <animated.h1
            className="display-1 font-weight-bolder"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
        >
            Hi! I am Mohammad Sadique.
        </animated.h1>
    )
}

const Home = () => {

    return (
        <Container>
            <Row className='justify-content-center text-center py-5'>
                <Col xs={12} md={8} lg={6}>
                    <AnimatedHeading />
                    <h3 className="display-4 font-weight-light">I am a Full Stack Developer.</h3>
                    <h3 className="lead font-weight-light pt-2">I am passionated about everything related to Server side.<br />
                        I even bought a shirt with a java icon on it.</h3>
                    <div className="social-icons pt-5">
                        <a className="social-icon" href="https://www.linkedin.com/in/mohd-sadique/"><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-icon" href="https://github.com/Tonystarkk08/"><i className="fab fa-github"></i></a>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;
