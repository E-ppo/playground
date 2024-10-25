import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/blog') {
    return NextResponse.redirect(new URL('/blog/react', request.url))
  }
}

export const config = {
  matcher: '/blog',
}
