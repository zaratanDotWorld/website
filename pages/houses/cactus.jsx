import Link from 'next/link';

import { Alert, Container, Row, Col } from 'react-bootstrap';

import Carousel from '../../components/carousel';
import Headpiece from '../../components/headpiece';

import { getImages } from '../../utils/s3';
import { applyUrl, tongvaUrl, instagramUrl } from '../../utils/constants';

export async function getStaticProps() {
  const pageTitle = "Cactus Cottage";

  const regex = /public\/images\/cactus\/mls\/.*\.jpg/i;
  const images = await getImages({ regex });
  return { props: { pageTitle, images } }
}

export default function ({ images }) {
  return (
    <Container fluid>
      {/* <br></br>
      <Alert variant="info" className="center" dismissible>
        Available February 1 — <Alert.Link href={applyUrl} style={{ textDecoration: 'underline' }}>apply now!</Alert.Link>
      </Alert> */}

      <Row className="p-5">
        <Col />
        <Col md={8} xl={6}>
          <Headpiece
            mainText="Cactus Cottage"
            subText="An Urban Sanctuary"
            icon="&#x1F335;"
            color="blue"
          />
        </Col>
        <Col />
      </Row>

      <Row className="p-5 accent-blue center">
        <Col />
        <Col md={8} xl={6}>
          <p>
            A stunning studio, in the heart of vibrant <b>Highland Park, Los Angeles</b>.
            <br></br>
            <br></br>
            This freestanding tiny home features
            spanish tile floors,
            full kitchen,
            full bathroom,
            amazing light,
            heating and AC,
            vaulted ceiling,
            tasteful design,
            storage loft,
            with a
            beautiful cactus,
            fire pit,
            recording studio,
            gym,
            parking,
            and basement storage
            on-site.
          </p>

          <p>For availability information, <b><Link href="mailto:hello@zaratan.world">drop us a line</Link></b>.</p>

          {/* TODO: Add vacancy email signup */}

          <p><i>Cactus Cottage is a proud supporter of the <Link href={tongvaUrl}>Tongva Conservancy</Link></i></p>
        </Col>
        <Col />
      </Row>

      <Row className="p-5">
        <Col />
        <Col md={8} xl={6}>
          <Carousel images={images} height={500} alt="Cactus Cottage photo" />
        </Col>
        <Col />
      </Row>
    </Container>
  );
}
