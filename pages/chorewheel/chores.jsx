import Link from 'next/link';

import { Container, Row, Col } from 'react-bootstrap';

import Headpiece from '../../components/headpiece';
import Carousel from '../../components/carousel';
import SlackButton from '../../components/slack';
import YouTube from '../../components/youtube';

import { getImages } from '../../utils/s3';
import { choresInstallUrl, quickstartUrl, choresAppDemoUrl } from '../../utils/constants';

export async function getStaticProps() {
  const pageTitle = "Chores";

  const regex = /public\/images\/mirror\/framed-mobile-chores.*\.jpg/i;
  const images = await getImages({ regex });
  return { props: { pageTitle, images } }
}

export default function ({ images }) {
  return (
    <Container fluid>
      <Row className="p-5 center">
        <Col />
        <Col md={8} xl={6}>
          <Headpiece
              mainText="Chores"
              subText="Clean Made Easier"
              icon="&#x1f9e4;"
              color="green"
            />
            <br></br>
            <SlackButton text="Install Now" url={choresInstallUrl} />
        </Col>
        <Col />
      </Row>

      <Row className="accent-green pt-5 px-5">
        <Col />
        <Col md={10} xl={6}>
          <h5><b>Chores is Zaratan's chore system</b>, making dirty dishes and passive-aggressive sticky notes a thing of the past.</h5>
          <hr></hr>

          <p>
            Chores helps folks spend less time doing chores, and less time talking about chores.
            Instead of <b>inflexible schedules</b> or <b>inconsistent bragging boards</b>, people do chores for points.
            Everyone owes <b>100 points per month</b>, and chores gain points the longer they go undone.
          </p>

          <p>
            Just enter in the tasks that you want done, and they'll start accumulating points automatically.
            Folks can pitch in when and where it works for them — Chores keeps track of everything.
            No meetings, no arguments, no sticky notes.
            It really works, with over <b>2,000 chores</b> claimed to-date.
          </p>

          <p>
            Help your house run itself.&nbsp;
            <Link href="/chorewheel/start">Get started today.</Link>&#x2728;
          </p>
          <hr></hr>
        </Col>
        <Col />
      </Row>

      <Row className="accent-green pb-2 px-5">
        <Col/>
        <Col md={5} xl={3}>
          <h5>&#x1f62d; Old Way</h5>
          <ul>
            <li>Dirty dishes</li>
            <li>Passive-aggressive notes</li>
            <li>Frustration and burnout</li>
            <li>Endless meetings</li>
          </ul>
        </Col>
        <Col md={5} xl={3}>
          <h5>&#x1f929; New Way</h5>
          <ul>
            <li>Clean sinks</li>
            <li>Communication and transparency</li>
            <li>Empowerment and appreciation</li>
            <li>Endless flexibility</li>
          </ul>
        </Col>
        <Col/>
      </Row>

      <Row className="accent-green pb-5 px-5">
        <Col />
        <Col md={10} xl={6}>
          <YouTube videoSrc={choresAppDemoUrl} videoTitle="Chores App Demo" />
        </Col>
        <Col />
      </Row>

      <Row className="p-4">
        <Col />
        <Col lg={10} xl={8} xxl={6}>
          <Carousel images={images} height={800} alt="Chores screenshot" />
        </Col>
        <Col />
      </Row>
    </Container>
  )
}
