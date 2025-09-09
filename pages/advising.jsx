import Link from "next/link";
import Image from 'next/image';

import { Container, Row, Col } from 'react-bootstrap';

import Headpiece from '../components/headpiece';
import barringtonPic from "../public/images/barrington.png";

import {
  calendlyUrl,
} from '../utils/constants';

export async function getStaticProps() {
  return { props: { pageTitle: "Advising" } }
}

export default function () {
  return (
    <Container fluid>

      <Row className="p-5 center">
        <Col />
        <Col md={8} xl={6}>
         <Headpiece
            mainText="Advising"
            subText="Bringing It Together"
            icon="🌿"
            color="green"
          />

        </Col>
        <Col />
      </Row>

      <Row className="p-5 accent-green">
        <Col />
        <Col md={8} xl={6}>
          <h5>
            Zaratan offers <b>advisory services</b> to aspiring communities.
          </h5>

          <hr></hr>

          <p>
            Humans have been trying to live together for ten thousand years.
            We at Zaratan studied the lessons of the past and developed cutting-edge techniques for building thriving communities.
          </p>

          <p>
            <Link href={calendlyUrl} target="_blank"><b>Please reach out for a free 30-minute consultation.</b></Link>
          </p>
        </Col>
        <Col />
      </Row>

      <Row className="p-5 center">
        <Col />
        <Col md={8} xl={6}>
          <div style={{ position: 'relative', height: '600px' }}>
            <Image
              fill
              src={barringtonPic}
              alt="Barrington Floor Plan"
              style={{ margin: "auto", display: "block", opacity: "0.95", objectFit: "contain" }}
            />
          </div>
        </Col>
        <Col />
      </Row>
    </Container>
  )
}
