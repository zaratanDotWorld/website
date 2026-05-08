import Link from 'next/link';

import { Alert, Container, Row, Col, Table, Button } from 'react-bootstrap';

import Carousel from '../../components/carousel';
import Headpiece from '../../components/headpiece';
import YouTube from '../../components/youtube';

import { getImages } from '../../utils/s3';
import { trackEvent, CTA } from '../../utils/track';
import { tallyInterestUrl, instagramSageUrl, tongvaUrl, nbcUrl, sageHouseFullUrl, supernuclearUrl } from '../../utils/constants';

export async function getStaticProps() {
  const pageTitle = "Sage House — Coliving in Highland Park, LA";
  const pageDescription =
    "Coliving in Highland Park, Los Angeles. 9-bedroom restored 1905 Craftsman " +
    "with all-inclusive pricing from $1,140/mo. Join the Sage House waitlist.";
  const pageImage =
    "https://d3gacl6pm59h8m.cloudfront.net/public/images/sage/mls/DSC04562.jpg";

  const regex = /public\/images\/sage\/mls\/.*\.jpg/i;
  const images = await getImages({ regex });

  const pageStructuredData = [
    {
      "@context": "https://schema.org",
      "@type": "LodgingBusiness",
      "name": "Sage House",
      "description": pageDescription,
      "url": "https://zaratan.world/houses/sage",
      "image": pageImage,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Los Angeles",
        "addressRegion": "CA",
        "addressCountry": "US",
      },
      "priceRange": "$$",
      "numberOfRooms": 9,
    },
  ];

  return { props: { pageTitle, pageDescription, pageImage, images, pageStructuredData } }
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
              <em>As seen on <Link href={nbcUrl} target="_blank">NBC4</Link> and <Link href={supernuclearUrl} target="_blank">Supernuclear</Link></em>
            </p>

            <p>
              A beautifully-restored 1905 Craftsman in the heart of vibrant <b>Highland Park, Los Angeles</b> — steps away from the cafes, bars, and restaurants of Figueroa Street and York Boulevard, with quick access to Eagle Rock, South Pasadena, and Downtown LA via the Metro Gold Line.
            </p>

            <p>
              This nine-bedroom house features
              hardwood floors,
              restaurant-style kitchen,
              original living and dining rooms,
              art space,
              deck,
              fire pit,
              recording studio,
              gym,
              guest room,
              and four full bathrooms.
            </p>

            <p>
              Sage is  <Link href={instagramSageUrl} target="_blank">a vibrant and dynamic community</Link>, with residents who support and care for each other.
              With nine people sharing space, Sage offers a feeling of abundance along with highly competitive rents.
            </p>

            <Button variant="warning" size="md" className="mt-2 mb-4" href={tallyInterestUrl} target="_blank" onClick={() => trackEvent(CTA.waitlistSage)}>Join the Waitlist</Button>

            <br></br>

            <p><i>Sage House is a proud supporter of the <Link href={tongvaUrl} target="_blank">Tongva Conservancy</Link></i></p>
          </div>

          <hr></hr>
          <br></br>

          <h5>Pricing Comparison</h5>

          <Table hover responsive style={{"--bs-table-bg": "rgba(0, 0, 0, 0.0)"}}>
            <thead>
              <tr><th></th><th>Sage</th><th>Other Coliving</th><th>Craigslist</th></tr>
            </thead>
            <tbody>
              <tr><th>Rent</th><td>$1,250*</td><td>$1,200</td><td>$1,050</td></tr>
              <tr><th>Utilities</th><td>Included</td><td>Included</td><td>$80</td></tr>
              <tr><th>Supplies</th><td>Included</td><td>Included</td><td>$60</td></tr>
              <tr><th>Food Staples</th><td>Included</td><td>$120</td><td>$120</td></tr>
              <tr><th>Internet</th><td>Included</td><td>Included</td><td>$50</td></tr>
              <tr><th>Service Fee</th><td>$0</td><td>$175</td><td>$0</td></tr>
              <tr><th>Total</th><td style={{backgroundColor: "#00ff7f33"}}>$1,250</td><td>$1,495</td><td>$1,360</td></tr>
            </tbody>
          </Table>

          <p>*Price varies by room</p>

          <br></br>

          <Carousel images={images} height={500} alt="Sage House photo" />
        </Col>
        <Col />
      </Row>

      <Row className="p-5">
        <Col />
        <Col md={8} xl={6}>
          <h5>Frequently Asked Questions</h5>
          <hr></hr>

          <p>
            <b>Is Sage House coliving?</b>
            <br></br>
            Yes. Sage is a 9-bedroom coliving house in Highland Park, Los Angeles.
            Residents have private bedrooms and share fully-equipped common areas — a restaurant-style kitchen, dining room, living room, art space, gym, recording studio, and backyard with fire pit.
            Leases are initially 4 months, then month-to-month for as long as you want to stay.
          </p>

          <p>
            <b>How much does coliving at Sage House cost?</b>
            <br></br>
            Rent starts at $1,140/month and varies by room.
            Pricing is all-inclusive — utilities, internet, household supplies, and food staples are covered.
            There are no extra service or community fees.
          </p>

          <p>
            <b>What is life like at Sage House?</b>
            <br></br>
            Residents are professionals, creatives, and students who want meaningful relationships at home, and the abundance that comes from sharing space.
            The residents contribute 4-5 hours of chores per month and make decisions with the help of <Link href="/chorewheel">open-source tools.</Link>
          </p>

          <p>
            <b>Where is Sage House located?</b>
            <br></br>
            Sage House is in Highland Park, Los Angeles, close to Eagle Rock, South Pasadena, and Downtown LA on the Metro Gold Line.
            The area is highly walkable, just steps from Figueroa Street and York Boulevard's restaurants, bars, and cafes.
          </p>

          <p>
            <b>What's included in rent?</b>
            <br></br>
            All utilities, internet, household supplies, and food staples — plus access to common space including kitchen, dining room, art space, gym, recording studio, fire pit, and guest room.
            Coin-op laundry and dedicated parking spots are available for an extra cost.
          </p>

          <p>
            <b>How do I move in?</b>
            <br></br>
            Join the waitlist below — we'll reach out when a room opens up that meets your needs.
          </p>

          <div className="center">
            <Button variant="warning" size="md" className="mt-3 mb-2" href={tallyInterestUrl} target="_blank" onClick={() => trackEvent(CTA.waitlistSage)}>Join the Waitlist</Button>
          </div>
        </Col>
        <Col />
      </Row>
    </Container>
  );
}
