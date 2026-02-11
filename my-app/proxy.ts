import { NextResponse, type NextRequest } from "next/server";

export default async function authMiddleware(request: NextRequest) {
	const session = await fetch(`${request.nextUrl.origin}/api/auth/get-session`, {
		headers: {
			cookie: request.headers.get("cookie") || "",
		},
	}).then((res) => res.json());

	if (!session) {
		return NextResponse.redirect(new URL("/unauthorized", request.url));
	}
	return NextResponse.next();
}

export const config = {
	matcher: ["/profile"],
};


