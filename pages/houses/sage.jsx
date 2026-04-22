import Link from 'next/link';

import { Alert, Container, Row, Col, Table, Button } from 'react-bootstrap';

import Carousel from '../../components/carousel';
import Headpiece from '../../components/headpiece';
import YouTube from '../../components/youtube';

import { getImages } from '../../utils/s3';
import { tallyInterestUrl, instagramUrl, tongvaUrl, nbcUrl, sageHouseFullUrl, supernuclearUrl } from '../../utils/constants';

export async function getStaticProps() {
  const pageTitle = "Sage House";
  const pageDescription =
    "A restored 1905 Craftsman in Highland Park, Los Angeles. 9-bedroom " +
    "coliving house with all-inclusive pricing from $1,250/mo. Community built-in.";
  const pageImage =
    "https://d3gacl6pm59h8m.cloudfront.net/public/images/sage/mls/DSC04562.jpg";

  const regex = /public\/images\/sage\/mls\/.*\.jpg/i;
  const images = await getImages({ regex });
  return { props: { pageTitle, pageDescription, pageImage, images } }
}

export default function ({ images }) {
  return (
    <Container fluid>
      <Row className="p-5">
        <Col />
        <Col md={8} xl={6}>
          <Headpiece
            mainText="Sage House"
            subText="The Turtle Palace"
            icon="&#x1FAB4;"
            color="red"
          />

          <br></br>

          <div className="center">
            <p>
              <i>"This is the best living situation I've ever had"</i>
              <br></br>
              <b>- Haven</b>, resident
            </p>
          </div>

          <br></br>

          <YouTube videoSrc={sageHouseFullUrl} videoTitle="People love Sage House!" />
        </Col>
        <Col />
      </Row>

      <Row className="p-5 accent-red center">
        <Col />
        <Col md={8} xl={6}>
          <div className="center">
            <p>
              <em>As seen on <Link href={nbcUrl}>NBC4</Link> and <Link href={supernuclearUrl}>Supernuclear</Link></em>
            </p>

            <p>
              A beautifully-restored 1905 Craftsman, in the heart of vibrant <b>Highland Park, Los Angeles</b>.
            </p>

            <p>
              This nine-bedroom house features
              hardwood floors,
              restaurant-style kitchen,
              elegant dining room,
              sunny living room,
              art space,
              upstairs deck,
              backyard fire pit,
              recording studio,
              gym,
              guest room,
              and four full bathrooms.
            </p>

            <Button variant="warning" size="md" className="mt-2 mb-4" href={tallyInterestUrl}>I'm Interested!</Button>

            <p>
              You can also <b><Link href={instagramUrl}>follow us</Link></b> on Instagram.
            </p>
          </div>

          <hr></hr>
          <br></br>

          <h5>Pricing Comparison</h5>

          <Table hover responsive style={{"--bs-table-bg": "rgba(0, 0, 0, 0.0)"}}>
            <thead>
              <tr><th></th><th>Sage</th><th>Other Coliving</th><th>Craigslist</th></tr>
            </thead>
            <tbody>
              <tr><th>Rent</th><td>$1,250*</td><td>$1,300</td><td>$1,050</td></tr>
              <tr><th>Utilities</th><td>Included</td><td>Included</td><td>$80</td></tr>
              <tr><th>Supplies</th><td>Included</td><td>Included</td><td>$60</td></tr>
              <tr><th>Food Staples</th><td>Included</td><td>$120</td><td>$120</td></tr>
              <tr><th>Internet</th><td>Included</td><td>Included</td><td>$50</td></tr>
              <tr><th>Community Fee</th><td>$0</td><td>$150</td><td>$0</td></tr>
              <tr><th>Total</th><td style={{backgroundColor: "#00ff7f33"}}>$1,250</td><td>$1,570</td><td>$1,360</td></tr>
            </tbody>
          </Table>

          <p>*Price varies by room</p>

          <br></br>

          <p><i>Sage House is a proud supporter of the <Link href={tongvaUrl}>Tongva Conservancy</Link></i></p>
        </Col>
        <Col />
      </Row>

      <Row className="p-5">
        <Col />
        <Col md={8} xl={6}>
          <Carousel images={images} height={500} alt="Sage House photo" />
        </Col>
        <Col />
      </Row>
    </Container>
  );
}
