import Link from "next/link";
import { Alert, Container, Row, Col, Table, Button } from 'react-bootstrap';

import Carousel from '../../components/carousel';
import Headpiece from '../../components/headpiece';
import SignupForm from '../../components/mailchimp';
import SlackButton from '../../components/slack';

import { getImages } from '../../utils/s3';
import {
  repoUrl,
  metagovUrl,
  structuresUrl,
  mailchimpAppInterest,
  choresInstallUrl,
  heartsInstallUrl,
  thingsInstallUrl,
} from '../../utils/constants';

export async function getStaticProps() {
  const pageTitle = "Chore Wheel";

  const regex = /public\/images\/mirror\/framed-mobile-.*\.jpg/i;
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  const images = (await getImages({ regex }))
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  return { props: { pageTitle, images } }
}

export default function ({ images }) {
  return (
    <Container fluid>
      <br></br>
      <Alert variant="info" className="center">
        <Alert.Link
          href="https://protocolized.summerofprotocols.com/p/chore-protocols"
          style={{ textDecoration: 'underline' }}
        >
          Read "Chore Protocols" in <i>Protocolized Magazine</i>
        </Alert.Link>
      </Alert>

      <Row className="p-5 center">
        <Col />
        <Col md={8} xl={6}>
         <Headpiece
            mainText="Chore Wheel"
            subText="Community Made Easier"
            // icon="☀️"
            icon="&#x1F506;"
            color="blue"
          />

          <br></br>
          <br></br>

          <p>
            <i>"Far more practical and functional than [what] I've experienced in group living before."</i>
            <br></br>
            <b>- Molly B.</b>
          </p>

          <p>
            <i>"This is a one in a hundred project."</i>
            <br></br>
            <b>- Victor R.</b>
          </p>
        </Col>
        <Col />
      </Row>

      <Row className="pt-5 accent-blue">
        <Col />
        <Col md={8} xl={6}>
          <h5>
            <b>Chore Wheel</b> is Zaratan's <Link href={structuresUrl}>pioneering software for coliving</Link>, turning unspoken expectations into shared agreements.
          </h5>

          <hr></hr>
          <p>
            Created by <b>coliving veterans</b> and <b>game designers</b>, Chore Wheel is Zaratan's family of <b>Slack apps</b> for helping people share space:
          </p>
          <ul>
            <li><b><Link href="/chorewheel/chores">Chores</Link></b> for fairly sharing tasks, without passive-aggressive sticky notes</li>
            <li><b><Link href="/chorewheel/hearts">Hearts</Link></b> for mutual accountability, resolving conflict <i>without</i> drama</li>
            <li><b><Link href="/chorewheel/things">Things</Link></b> for group purchasing, avoiding spreadsheets and Venmo requests</li>
            <li>And more to come...</li>
          </ul>

          <p>
            Designed for <b>intentional communities</b>, <b>casual roommates</b>, <b>cohabitating partners</b>, and everything in-between,
            Chore Wheel helps people share the <b>emotional and mental labor</b> of sustaining communities, through simple and streamlined systems you don't have to think about.
            Groups using Chore Wheel have <b>fewer meetings</b> and <b>less conflict</b>, leaving more time for actually <b>being together</b>.
          </p>

          <p>
            Spend less time <b>fighting with your roommates</b> and more time <b>living your life</b>.
          </p>

          <div className="center">
            <Button variant="primary" size="md" className="m-2" href="/chorewheel/start">✨ Get Started Today ✨</Button>
            <p><i><b>90 days</b> free, then <b>$10 / mo</b></i></p>


            <Link href={structuresUrl}>Read the paper</Link>
            &nbsp;·&nbsp;
            <Link href={metagovUrl}>Watch the talk</Link>
            &nbsp;·&nbsp;
            <Link href={repoUrl}>See the code</Link>
          </div>
          <hr></hr>
          <p>Chore Wheel turns <b>stress</b> and <b>frustration</b> into <b>empowerment</b> and <b>connection</b>, by creating houses that practically <b>run themselves</b>.</p>
          </Col>
        <Col />
      </Row>

      <Row className="accent-blue px-5">
        <Col/>
        <Col md={4} xl={3}>
          <h5>&#x1f62d; Old Way</h5>
          <ul>
            <li>Dirty dishes</li>
            <li>Cliques and drama</li>
            <li>Endless meetings</li>
            <li>Frustration</li>
          </ul>
        </Col>
        <Col md={4} xl={3}>
          <h5>&#x1f929; New Way</h5>
          <ul>
            <li>Clean sinks</li>
            <li>Fun and connection</li>
            <li>Clear process</li>
            <li>Empowerment</li>
          </ul>
        </Col>
        <Col/>
      </Row>

      <Row className="pb-5 accent-blue">
        <Col />
        <Col md={8} xl={6}>
          <div className="center">
            <br></br>
            <i>Still have questions?</i>
            <SignupForm text="Get more info" placeholder="~ email address ~" tags={mailchimpAppInterest} />
          </div>
        </Col>
        <Col />
      </Row>

      <Row className="p-5 center">
        <Col />
        <Col md={8} xl={6}>
        <Carousel images={images} height={800} alt="Chores screenshot" />
        {/* <Pricing /> */}
        </Col>
        <Col />
      </Row>
    </Container>
  )
}

export function Pricing() {
  const roommateUrl = "https://buy.stripe.com/7sI5lwcjC3FXabKeUW";
  const familyUrl = "https://buy.stripe.com/fZeaFQ97q3FXabK28b";
  const communityUrl = "https://buy.stripe.com/dR6g0a4Radgx4Rq8wA";

  return (
    <div>
      <h2>Pricing</h2>
      <p><s>All plans come with a 90-day trial</s><br></br><b>All plans are currently free</b></p>
      <Table hover responsive>
        <thead>
          <tr><th>Roommate</th><th>Family</th><th>Community</th></tr>
        </thead>
        <tbody>
          <tr><td>For groups of friends</td><td>For groups with shared values</td><td>For large groups sharing resources</td></tr>
          <tr><td>Chores</td><td>Chores, Hearts</td><td>All apps</td></tr>
          <tr><td>Up to 5 users</td><td>Up to 10 users</td><td>Up to 20 users</td></tr>
          <tr><td><s>$20/mo</s></td><td><s>$40/mo</s></td><td><s>$60/mo</s></td></tr>
          <tr>
            <td><Button variant="outline-success" size="sm" href={roommateUrl}>Subscribe</Button></td>
            <td><Button variant="outline-success" size="sm" href={familyUrl}>Subscribe</Button></td>
            <td><Button variant="outline-success" size="sm" href={communityUrl}>Subscribe</Button></td>
          </tr>
          <tr>
            <td><SlackButton text="Get Chores" installUrl={choresInstallUrl} /></td>
            <td><SlackButton text="Get Hearts" installUrl={heartsInstallUrl} /></td>
            <td><SlackButton text="Get Things" installUrl={thingsInstallUrl} /></td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}
