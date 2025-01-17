import Link from "next/link";
import Image from 'next/image';

import { Container, Row, Col } from 'react-bootstrap';

import Headpiece from '../components/headpiece';
import YouTube from '../components/youtube';

import danielPic from "../public/images/daniel.jpg";
import bobPic from "../public/images/bob.jpeg";

import {
  buildingSageUrl,
  structuresUrl,
  blogUrl,
} from '../utils/constants';

export async function getStaticProps() {
  const pageTitle = "About";

  return { props: { pageTitle } }
}

export default function () {
  return (
    <Container fluid>

      <Row className="p-5 center">
        <Col />
        <Col md={8} xl={6}>
         <Headpiece
            mainText="About"
            subText="Who We Are"
            icon="&#x1F44B;&#x1F3FD;"
            color="green"
          />

        </Col>
        <Col />
      </Row>

      <Row className="p-5 accent-green">
        <Col />
        <Col md={8} xl={6}>
          <Row>
            <Col>
                <h5>
                  <b>Zaratan Coliving</b> was founded in 2020 to advance the <b>art, science, and practice</b> of shared living.
                </h5>

              <hr></hr>

              <h5><b>Our Vision</b></h5>
              <p>
                We see coliving as situated at the intersection of <b>three key social challenges</b>:
              </p>

              <ul>
                <li>the human need for connection</li>
                <li>the rising cost of housing</li>
                <li>the decline of democratic civil society</li>
              </ul>

              <p>
                We see these challenges as linked, and believe that <b>coliving can address them all</b>, by enabling residents to co-create their own housing:
                building relationships, saving money, and cultivating skills in the process.
              </p>

              <p>
                Zaratan works across <b>three domains</b>:
              </p>

                <ul>
                  <li>building physical houses</li>
                  <li>developing organizational tools</li>
                  <li>cultivating new knowledge</li>
                </ul>

              <p>
                To-date we have built two sites, <Link href="/houses/sage">Sage House</Link> and <Link href="/houses/cactus">Cactus Cottage</Link>, on a shared lot in Los Angeles.
                We have developed a suite of pioneering organizational tools, called <Link href="/chorewheel">Chore Wheel</Link>.
                Lastly, we have been cultivating knowledge within our community of <Link href={structuresUrl}>academics</Link> and <Link href={blogUrl}>practitioners</Link>.
                Zaratan has an expansive vision, and we are in it for the long haul.
              </p>

              <p>
                <i>What is a Zaratan?</i>
              </p>
              <p>
                <Link href="https://en.wikipedia.org/wiki/Zaratan">Zaratani</Link> are <b>mythical giant sea turtles</b>, often mistaken for islands by sailors lost at sea.
                By naming ourselves after these creatures, we evoke the way that organizational innovations can act as foundations for thriving communities.
                In addition, the Zaratan is known for its slow movement and long life, which we evoke through our intentional approach to growth.
              </p>
            </Col>
          </Row>

          <hr></hr>

          <Row>
            <Col xl={7}>
              <h5><b>Our Story</b></h5>
              <p>
                In his ten years working across the fields of communal living, organizational design, and technology development, Zaratan founder Daniel Kronovet developed the concept for a certain kind of house
                — one that was <b>accessible, appealing, and easy to live in</b>.
                In March of 2020, Daniel moved back to his hometown of Los Angeles to try and make this dream a reality.
              </p>
              <p>
                Within days, the pandemic hit.
                Undeterred, Daniel teamed up with his dad, Robert Kronovet, recruited architect Matt Manion, and started working on what would become Sage House.
                Over a period of two years they renovated what was then a run-down old house into a beautiful and functional new home.
                At the same time, Daniel worked with collaborators Seth Frey and Joseph DeSimone to develop Chore Wheel, the tool that would help Sage House function.
              </p>
              <p>
                In September 2022, Sage opened and filled up quickly.
                As an early resident of the house, Daniel helped build a culture of practice around Chore Wheel, one which could withstand the effects of turnover and interpersonal frictions while supporting resident's agency and personal growth.
              </p>
              <p>
                After a year at Sage, Daniel moved out to focus on increasing the adoption of Chore Wheel by the larger housing ecosystem — where it is being actively used.
                Meanwhile, Sage has continued to thrive as a self-directed community, with minimal management and oversight.
              </p>
            </Col>
            <Col xl={5} className="p-4">
              <div style={{ position: 'relative', height: '600px' }}>
                <Image
                  fill
                  src={bobPic}
                  alt="Bob Kronovet painting Sage House"
                  style={{ margin: "auto", display: "block", opacity: "0.85", objectFit: "contain" }}
                />
              </div>
            </Col>
          </Row>

          <hr></hr>

          <Row>
          <Col xl={5} className="p-4">
              <div style={{ position: 'relative', height: '400px'  }}>
                <Image
                  fill
                  src={danielPic}
                  alt="Image of Daniel"
                  style={{ margin: "auto", display: "block", opacity: "0.85", objectFit: "contain" }}
                />
              </div>
            </Col>
            <Col xl={7}>
              <h5><b>About Daniel</b></h5>
              <p>
                Daniel was born and raised in Santa Monica, just down the road from what would eventually become Sage House.
              </p>
              <p>
                A passionate student, Daniel studied at UC Berkeley, where he pursued a double-major in Political Economy and Cognitive Science.
                While at Cal, Daniel had his first experience of communal living as a member of the <Link href="https://bsc.coop">Berkeley Student Cooperative</Link>.
                Connecting deeply with the co-op's mission, Daniel got involved in leadership, eventually becoming president — combining his intellectual development with a rich experience of practice.
              </p>
              <p>
                After graduating, Daniel spent a year abroad, with extended stays on a kibbutz in the north of Israel, a yeshiva in Jerusalem, and a monastery in Thailand.
                These experiences broadened his perspective, exposing him to a diversity of organizational structures and practices.
              </p>
              <p>
                Returning to the United States, Daniel moved to New York City and went into technology, earning a master's degree in Quantitative Social Science at Columbia University, with research focused on voting systems.
                Starting his career as a machine learning engineer, he soon pivoted to mechanism design, as a research engineer at the pioneering future-of-work project <Link href="https://colony.io">Colony</Link> (where he still actively contributes).
                In this role, Daniel gained a deeper understanding of the skills needed to design and implement complex systems.
              </p>
              <p>
                Throughout this time, Daniel never forgot his passion for shared living, or the powerful experiences these models can provide.
                Eventually, Daniel moved back to Los Angeles to start Zaratan.
                The rest, as they say, is history.
              </p>

              <p>
                <b>Want to know more?</b> <Link href="mailto:hello@zaratan.world" className="text-decoration-none">Drop us a line</Link>
              </p>
            </Col>
          </Row>

        </Col>
        <Col />
      </Row>

      <Row className="p-5 center">
        <Col />
        <Col md={8} xl={6}>
          <YouTube videoSrc={buildingSageUrl} videoTitle="Building Sage House" />
        </Col>
        <Col />
      </Row>
    </Container>
  )
}
