import { NextResponse } from 'next/server';

export function middleware(request) {
  const host = request.headers.get('host');
  if (host === 'zaratan.world') {
    const url = request.nextUrl.clone();
    url.host = 'www.zaratan.world';
    return NextResponse.redirect(url, 301);
  }
}
