import Link from 'next/link';
import Image from 'next/image';

import { Alert, Container, Row, Col } from 'react-bootstrap';

import Headpiece from '../components/headpiece';
import YouTube from '../components/youtube';
import SignupForm from '../components/mailchimp';

import zaratanPic from "../public/images/zaratan-art.png";

import { joysOfColivingUrl, instagramUrl, mailchimpGeneral } from '../utils/constants';

export default function () {
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

      <Row className="p-5">
        <Col />
        <Col md={8} xl={6}>
          <Headpiece
            mainText="Zaratan Coliving"
            subText="Building Better Worlds"
            icon="&#x1F422;"
            color="green"
          />

          <br></br>
          <br></br>

          <YouTube videoSrc={joysOfColivingUrl} videoTitle="The Joys of Coliving" />
        </Col>
        <Col />
      </Row>
      <Row className="accent-green p-5">
        <Col />
        <Col md={8} xl={6}>
          <h5>
            Zaratan is an <b>emerging coliving company</b> in Los Angeles, cultivating <b>housing abundance</b>.
            We build <Link href="/houses/sage">physical houses</Link>
            &nbsp;and <Link href="/chorewheel">pioneering software tools</Link>.
          </h5>

          <hr></hr>

          <p>
            Zaratan creates naturally-affordable housing by converting <b>beautiful, old buildings</b> into <b>high-density coliving</b>,
            and <b>operating them dynamically</b> with the help of <Link href="/chorewheel">Chore Wheel</Link>, our open-source suite of <b>collaboration tools</b>.
          </p>

          <p>
            We envision a world of <b>abundant housing</b> and <b>accessible community</b>.
            We believe that:
          </p>
          <ul>
            <li><b>Home</b> is a place of empowerment</li>
            <li><b>Housing</b> is not a luxury</li>
            <li><b>Work</b> should be valued</li>
            <li><b>Community</b> cannot be bought</li>
            <li><b>Rules</b> can be simple</li>
            <li><b>Conservation</b> starts at home</li>
          </ul>

          <hr></hr>
          <p><b>Next steps:</b></p>
          <p>
            If you <b>need housing</b>, check out <Link href="/houses/sage">Sage House</Link> or <Link href="/houses/cactus">Cactus Cottage</Link>.
          </p>
          <p>
            If you have housing, but <b>want higher vibes</b>, check out <Link href="/chorewheel">Chore Wheel</Link>.
          </p>
          <p>
            If you <b>just want to chat</b>, <Link href="mailto:hello@zaratan.world">drop us a line</Link> or find us on <Link href={instagramUrl}>Instagram</Link>.
          </p>

          <br></br>

          <SignupForm text="Get awesome updates" placeholder="~ email address ~" tags={mailchimpGeneral} />
        </Col>
        <Col />
      </Row>

      <Row className="p-5">
        <Col />
        <Col md={8} xl={6}  style={{position:"relative", height:"600px"}}>
          <Link href={instagramUrl}>
            <Image
              fill
              src={zaratanPic}
              alt="Image of a Zaratan, source: Midjourney"
              style={{ margin: "auto", display: "block", opacity: "0.85", objectFit: "contain" }}
            />
          </Link>
        </Col>
        <Col />
      </Row>
    </Container>
  )
}
