import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebookF, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg1 from '../../../assets/bg1.png'


const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login With Google</Button>
            <Button variant="outline-secondary"><FaGithub /> Login With GitHub</Button>

            <div>
                <h4>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item> <FaFacebookF /> Facebook </ListGroup.Item>
                    <ListGroup.Item> <FaTwitter /> Twitter </ListGroup.Item>
                    <ListGroup.Item> <FaInstagram /> Instagram </ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div>
                <img src={bg1} alt="" />
            </div>
        </div>
    );
};

export default RightNav;