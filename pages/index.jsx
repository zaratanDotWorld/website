import Link from 'next/link';
import Image from 'next/image';

import { Alert, Container, Row, Col } from 'react-bootstrap';

import Headpiece from '../components/headpiece';
import YouTube from '../components/youtube';

import zaratanPic from "../public/images/zaratan-art.png";

import { joysOfColivingUrl, instagramUrl } from '../utils/constants';

export default function () {
  return (
    <Container fluid>
      <br></br>
      <Alert variant="info" className="center" dismissible>
        Live with others? <Alert.Link href="https://forms.gle/j1UNiwBPGTEueJXx6" style={{ textDecoration: 'underline' }}>Share your experience</Alert.Link>
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
          <br></br>

          <YouTube videoSrc={joysOfColivingUrl} videoTitle="The Joys of Coliving" />
        </Col>
        <Col />
      </Row>
      <Row className="accent-green p-5">
        <Col />
        <Col md={8} xl={6}>
          <h5>
            Zaratan is an <b>emerging coliving company</b> in Los Angeles.
            We build <Link href="/houses/sage">physical houses</Link>
            &nbsp;and <Link href="/chorewheel">pioneering software tools</Link>.
          </h5>
          <h5>
            Our mission is the creation of beautiful and naturally-affordable housing through <b>creative organization</b> and <b>adaptive reuse</b>.
          </h5>
          <hr></hr>
          <p><b>We believe that:</b></p>
          <ul>
            <li><b>Housing</b> is not a luxury</li>
            <li><b>Home</b> is a place of empowerment</li>
            <li><b>Community</b> cannot be bought</li>
            <li><b>Rules</b> can be simple</li>
            <li><b>Work</b> should be valued</li>
            <li><b>Conservation</b> starts at home</li>
          </ul>

          <p>
            We're looking for people who are <b>friendly, creative, and reliable</b>.
            We keep prices low, and ask residents to help run their houses.
            Embrace the opportunity, and this could be one of the best experiences of your life.
          </p>

          <hr></hr>
          <p><b>Next steps:</b></p>
          <p>
            If you <b>need housing</b>, check out <Link href="/houses/sage">Sage House</Link> or <Link href="/houses/cactus">Cactus Cottage</Link>.
          </p>
          <p>
            If you have housing, but <b>think it could be better</b>, check out our <Link href="/chorewheel">coliving apps</Link>.
          </p>
          <p>
            If you <b>just want to chat</b>, <Link href="mailto:hello@zaratan.world">drop us a line</Link> or find us on <Link href={instagramUrl}>Instagram</Link>.
          </p>

          <br></br>

          <SignupForm text="Get awesome updates" placeholder="~ email address ~" />
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
