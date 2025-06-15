import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async ({ request, url }, next) => {
  const host = request.headers.get("host");

  if (host && host !== "bookswithsyro.co.uk") {
    return new Response(null, {
      status: 301,
      headers: {
        Location: `https://bookswithsyro.co.uk${url.pathname}`,
      },
    });
  }

  return next();
});