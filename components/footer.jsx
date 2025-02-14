import Link from 'next/link';

import { kronosapiensUrl, supportUrl } from '../utils/constants';

export default function () {
  return (
    <div className="text-center p-3 bg-light">
      &copy; { new Date().getFullYear() } <Link href={kronosapiensUrl}>Kronosapiens Labs</Link>
      <br></br>
      <Link href="/privacy.html" style={{ fontSize: "14px" }}>Privacy Policy</Link>
      &nbsp;·&nbsp;
      <Link href={supportUrl} style={{ fontSize: "14px" }}>Contact Support</Link>
    </div>
  )
}
