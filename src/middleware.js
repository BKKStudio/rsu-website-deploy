import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export function middleware(request) {
    const path = request.nextUrl.pathname
  
    const isPublicPath = path === '/indexpage' 

    if(isPublicPath) {
      return NextResponse.redirect(new URL('/indexpage', request.nextUrl))
    }
  
    if (!isPublicPath) {
      return NextResponse.redirect(new URL('/indexpage', request.nextUrl))
    }
      
  }
  
   
  // See "Matching Paths" below to learn more
  export const config = {
    matcher: [
        "/",
    ]
  }