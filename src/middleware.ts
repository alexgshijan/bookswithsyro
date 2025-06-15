import { defineMiddleware } from "astro/middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const { url, request } = context;
  const host = request.headers.get("host");

  if (host && host.endsWith("pages.dev")) {
    return new Response(null, {
      status: 301,
      headers: {
        Location: `https://www.bookswithsyro.co.uk${url.pathname}`,
      },
    });
  }

  return next();
});