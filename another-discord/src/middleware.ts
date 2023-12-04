import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/
export default authMiddleware({
  apiKey: process.env.CLERK_API_KEY,
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
