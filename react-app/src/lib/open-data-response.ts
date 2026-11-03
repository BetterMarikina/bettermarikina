// Headers for the read-only open data API.
// CORS is open (*) on purpose: the responses are public, static and never use cookies or auth,
// so any site may read them. This is the one exception to the explicit-origins rule.
export const OPEN_DATA_HEADERS: HeadersInit = {
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET',
  'Cache-Control': 'public, max-age=3600, s-maxage=86400',
  'X-Content-Type-Options': 'nosniff',
};

export function openDataJson(body: unknown): Response {
  return new Response(JSON.stringify(body, null, 2), { headers: OPEN_DATA_HEADERS });
}
