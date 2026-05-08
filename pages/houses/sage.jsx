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
              <em>As seen on <Link href={nbcUrl} target="_blank">NBC4</Link> and <Link href={supernuclearUrl} target="_blank">Supernuclear</Link></em>
            </p>

            <p>
              A beautifully-restored 1905 Craftsman in the heart of vibrant <b>Highland Park, Los Angeles</b> — with cafes, bars, and restaurants along Figueroa Street and York Boulevard, and quick access to Eagle Rock, South Pasadena, and Downtown LA via the Metro Gold Line.
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

            <p>
              Live with people who <b>genuinely care</b> about sharing space — a real community that runs itself.
            </p>

            <Button variant="warning" size="md" className="mt-2 mb-4" href={tallyInterestUrl} target="_blank" onClick={() => trackEvent(CTA.waitlistSage)}>Join the Waitlist</Button>

            <p>
              You can also <b><Link href={instagramSageUrl} target="_blank">follow us</Link></b> on Instagram!
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

          <h5>Frequently Asked Questions</h5>

          <h6>Is Sage House coliving?</h6>
          <p>
            Yes. Sage House is a 9-bedroom coliving home in Highland Park, Los Angeles.
            Residents have private bedrooms and share fully-equipped common areas — a restaurant-style kitchen, dining room, living room, art space, gym, recording studio, and backyard with fire pit.
            Leases are initially 4 months, and then month-to-month for as long as you want to stay.
          </p>

          <h6>How much does coliving at Sage House cost?</h6>
          <p>
            Rent starts at $1,140/month and varies by room.
            Pricing is all-inclusive — utilities, internet, household supplies, and food staples are covered.
            There are no hidden fees.
          </p>

          <h6>Where is Sage House located?</h6>
          <p>
            Sage House is in <b>Highland Park, Los Angeles</b>, close to Eagle Rock, South Pasadena, and Downtown LA.
            The neighborhood is walkable, served by the Metro Gold Line, steps from Figueroa Street's restaurants, cafes, and bookstores, and a short walk to York Boulevard.
          </p>

          <h6>What's included in rent?</h6>
          <p>
            All utilities, internet, household supplies, and food staples — plus access to common space including kitchen, dining room, art space, gym, recording studio, fire pit, and guest room.
          </p>

          <h6>Who lives at Sage House?</h6>
          <p>
            Residents are professionals, creatives, and students who want real community at home.
            The residents run the house with the help of <Link href="/chorewheel">open-source tools.</Link>
          </p>

          <h6>How do I apply?</h6>
          <p>
            Join the waitlist below — we'll reach out when a room opens up that matches what you're looking for.
          </p>

          <Button variant="warning" size="md" className="mt-3 mb-2" href={tallyInterestUrl} target="_blank" onClick={() => trackEvent(CTA.waitlistSage)}>Join the Waitlist</Button>

          <br></br>
          <br></br>

          <p><i>Sage House is a proud supporter of the <Link href={tongvaUrl} target="_blank">Tongva Conservancy</Link></i></p>
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
