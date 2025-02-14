import Link from "next/link";
import Image from "next/image";
import { Alert, Container, Row, Col, Button } from 'react-bootstrap';

import Headpiece from '../../components/headpiece';
import SlackButton from '../../components/slack';

import instagramLogo from "../../public/instagram.png";

import {
  quickstartUrl,
  choresInstallUrl,
  heartsInstallUrl,
  thingsInstallUrl,
  repoUrl,
  docsUrl,
  slackCommunityUrl,
  contactUrl,
  supportUrl,
  instagramUrl,
  structuresUrl
} from '../../utils/constants';

export async function getStaticProps() {
  const pageTitle = "Getting Started";

  return { props: { pageTitle } }
}

export default function () {
  return (
    <Container fluid>
      <Row className="p-5">
        <Col />
        <Col md={8} xl={6}>
          <Headpiece
            mainText="Getting Started"
            subText="To Infinity, and Beyond"
            icon="&#x1F680;"
            color="blue"
          />

          <br></br>

          <Alert variant="info" className="center">
            <b>You're making a great choice!</b> Groups using Chore Wheel:<br/>
            <br></br>
            ✅ Spend ~75% less time on household tasks*<br/>
            ✅ Have less personal conflicts and better quality of life<br/>
            ✅ Enjoy big savings of time and money through living together
            <br></br>
            <br></br>
            <small><i>*Sage House residents have one monthly meeting and do about one hour of chores per week.</i></small>
          </Alert>
        </Col>
        <Col />
      </Row>

      <Row className="p-5 accent-blue">
        <Col />
        <Col md={8} xl={6}>
          <h5><b>Step 1:</b> Set Up Slack</h5>
          <hr></hr>

          <p>
            While household communication <i>can</i> happen through simple groupchats,
            we believe that&nbsp;
            <Link href="https://slackdemo.com/" target="_blank">full-featured platforms like Slack</Link>
            &nbsp;are better foundations for rich interactions.
            With Slack, you can:
          </p>
          <ul>
            <li><b>Organize conversations</b> in different channels (#projects, #social, etc)</li>
            <li><b>Communicate seamlessly</b> on multiple devices, including desktop and mobile</li>
            <li><b>Integrate apps</b> (like ours!) to super-charge your community</li>
          </ul>

          <p>
            Slack offers <b>free plans with no limit</b> on the number of participants.
            To get started with Chore Wheel, first create a Slack workspace.
          </p>

          <div className="center">
            <Button variant="primary" href="https://slack.com/get-started" target="_blank">
              Create Your Free Workspace
            </Button>
          </div>

          <br></br>

          <div className="center">
            <small>
              For now, Chore Wheel is only on Slack.
              If you want to help us expand to other platforms, <Link href={contactUrl}>reach out!</Link>
            </small>
          </div>

          <br></br>

          <h5><b>Step 2:</b> Install Chore Wheel</h5>
          <hr></hr>

          <p>
            Chore Wheel's tools are available as <b>separate Slack apps</b>,
            and can be used together or separately:
          </p>

          <ul>
            <li><Link href="/chorewheel/chores"><b>Chores</b></Link>, to organize individual contributions through a super-charged chores system</li>
            <li><Link href="/chorewheel/hearts"><b>Hearts</b></Link>, to support positive interactions through gaining and losing "hearts"</li>
            <li><Link href="/chorewheel/things"><b>Things</b></Link>, to manage shared resources by letting groups easily approve purchases</li>
          </ul>

          <p>
            You can install the apps by clicking the buttons below (must be a <b>workspace admin</b>).
            See the <Link href={quickstartUrl}><b>getting started guide</b></Link> for more details about the apps and how to use them.
          </p>

          <div className="center my-2">
            <SlackButton text="Get Chores" url={choresInstallUrl} />
            <SlackButton text="Get Hearts" url={heartsInstallUrl} />
            <SlackButton text="Get Things" url={thingsInstallUrl} />
          </div>

          <div className="center">
            <small>
              Chore Wheel is free for <b>90 days</b>, and then costs <b>$10 / month</b> for <i>all</i> of the apps.
            </small>
          </div>

          <br></br>

          <h5><b>Step 3:</b> Thrive Forever</h5>
          <hr></hr>

          <p>
            Chore Wheel's apps are <b>dynamic</b> and <b>flexible</b>,
            and it can take a few days to fall into a rhythm.
            Once you do, you'll be amazed at how well everything starts to work.
          </p>

          <p>
            We'd love to hear about your experience!
            Share your stories (and tag us at <Link href={instagramUrl} target="_blank">@zaratan.world</Link>),
            or contact us <Link href={contactUrl} target="_blank">via email</Link>.
            Or, if you're having trouble and need some help, please <Link href={supportUrl} target="_blank">reach out</Link>!
          </p>

          <br></br>

          <Link href={instagramUrl} target="_blank">
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
        <Col md={8} xl={6}>
          <h5>Frequently Asked Questions</h5>
          <hr></hr>

          <p>
            <b>Is Chore Wheel only for physical housing?</b>
            <br></br>
            No! While Chore Wheel was initially designed for coliving communities,
            the tools can be used by any group looking to collaborate more effectively.
            Chore Wheel has been used by organizations large and small to help support their operations.
          </p>

          <p>
            <b>Why are you so confident in Chore Wheel?</b>
            <br></br>
            Chore Wheel is the result of years of research and development,
            mixing both well-known economic theory and more progressive ideas around design and interaction.
            Chore Wheel has been the subject of a peer-reviewed research paper,
            which you can find <Link href={structuresUrl} target="_blank">here</Link>.
          </p>

          <p>
            <b>Is Chore Wheel open-source?</b>
            <br></br>
            Yes! Chore Wheel is open-source under the <Link href="https://choosealicense.com/licenses/agpl-3.0/">AGPL-3 license</Link>.
            You can see the <Link href={repoUrl}>source code on GitHub</Link>,
            and contributions are welcome!
          </p>

          <p>
            <b>Does Chore Wheel cost money?</b>
            <br></br>
            Yes, Chore Wheel is $10 per month after a 90-day trial period.
            This charge goes to supporting ongoing maintenance and development of the tools.
            If you'd rather host the apps yourself, you can <Link href={repoUrl}>clone the source code</Link> and run your own instance.
          </p>

          <br></br>

          <h5>Need More Help?</h5>
          <hr></hr>

          <p>
            We're here to support your journey to a thriving community.
          </p>

          <ul>
            <li>For <b>app details</b>, see the <Link href={docsUrl}>full documentation</Link></li>
            <li>For <b>peer support</b>, join our <Link href={slackCommunityUrl}>Slack community</Link></li>
            <li>For <b>source code</b>, see the <Link href={repoUrl}>GitHub repository</Link></li>
            <li>For <b>general questions</b>, please <Link href={contactUrl}>contact us</Link></li>
          </ul>
        </Col>
        <Col />
      </Row>
    </Container>
  )
}
