import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	if (request.url === "/") {
		return NextResponse.redirect("/top-headlines");
	}
}
