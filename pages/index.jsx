import Link from 'next/link';
import Image from 'next/image';

import { Alert, Container, Row, Col } from 'react-bootstrap';

import Headpiece from '../components/headpiece';
import zaratanPic from "../public/images/zaratan-art.png";
import instagramLogo from "../public/instagram.png";
import YouTube from '../components/youtube';

import { joysOfColivingUrl, instagramUrl, zaratanUrl, structuresUrl } from '../utils/constants';

export default function () {
  return (
    <Container fluid>
      <br></br>
      <Alert variant="success" className="center" dismissible>
        Read our <Alert.Link href={structuresUrl}>peer-reviewed case study</Alert.Link> of Chore Wheel and Sage House
      </Alert>

      <Row className="p-5">
        <Col />
        <Col md={8} xl={6}>
          <Headpiece
            mainText="Zaratan"
            subText="Building Better Worlds"
            icon="&#x1F422;"
            color="green"
          />

          <br></br>

          <SignupForm text="Get our newsletter" placeholder="~ email address ~" />

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
            Zaratan is an emerging coliving company in Los Angeles.
            We build <Link href="/houses/sage" className="text-decoration-none">physical houses</Link>
            &nbsp;and <Link href="/chorewheel" className="text-decoration-none">pioneering software tools</Link>.
          </h5>
          <h5>
            Our mission is the creation of beautiful and naturally-affordable housing through creative organization and adaptive reuse.
          </h5>
          <hr></hr>
          <p><b>We believe that:</b></p>
          <p>
            <b>Housing</b> is not a luxury &#x2013;&nbsp;
            <b>Home</b> is a place of empowerment &#x2013;&nbsp;
            <b>Community</b> cannot be bought &#x2013;&nbsp;
            <b>Rules</b> can be simple &#x2013;&nbsp;
            <b>Work</b> should be valued &#x2013;&nbsp;
            <b>Conservation</b> starts locally.
          </p>

          <p>
            We're looking for people who are <b>friendly, creative, and reliable</b>.
            We keep prices low, and ask residents to help run their houses.
            Embrace the opportunity, and this could be one of the best experiences of your life.
          </p>

          <hr></hr>
          <p><b>Next steps:</b></p>
          <p>
            If you are <b>looking for housing</b>, check out&nbsp;
            <Link href="/houses/sage" className="text-decoration-none">Sage House</Link> or&nbsp;
            <Link href="/houses/cactus" className="text-decoration-none">Cactus Cottage</Link>.
          </p>
          <p>
            If you have housing, but <b>struggle with group dynamics</b>, check out <Link href="/chorewheel" className="text-decoration-none">Chore Wheel</Link>.
          </p>
          <p>
            If you <b>just want to chat</b>, <Link href="mailto:hello@zaratan.com" className="text-decoration-none">drop us a line</Link>.
          </p>
          <br></br>
          <Link href={instagramUrl}>
            <Image
              width="40"
              height="40"
              src={instagramLogo}
              alt="Instagram logo"
              style={{ margin: "auto", display: "block" }}
            />
          </Link>
        </Col>
        <Col />
      </Row>

      <Row className="p-5">
        <Col />
        <Col md={8} xl={6}  style={{position:"relative", height:"600px"}}>
          <Link href={zaratanUrl}>
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

function SignupForm ({ text, placeholder }) {
  return (
    <div id="mc_embed_signup">
      <form
        action="https://github.us18.list-manage.com/subscribe/post?u=7176b8b238db3ff30396bf211&amp;id=f82230a866"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <input
            type="email"
            defaultValue=""
            name="EMAIL"
            className="email"
            id="mce-EMAIL"
            placeholder={placeholder}
            style={{textAlign: "center"}}
            required>
          </input>
          <br></br>
          <br></br>
          {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
          <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
            <input type="text" name="b_7176b8b238db3ff30396bf211_f82230a866" tabIndex="-1" defaultValue=""></input>
          </div>
          <div className="clear">
            <input type="submit" value={text} name="subscribe" id="mc-embedded-subscribe" className="button"></input>
          </div>
        </div>
      </form>
    </div>
  )
}
