import auth0 from "../../utils/auth0";
import fetch from "isomorphic-unfetch";
import { config } from "../../config";

export default auth0.requireAuthentication(async function userCartInfo(
  req,
  res
) {
  try {
    const tokenCache = await auth0.tokenCache(req, res);
    const { accessToken } = await tokenCache.getAccessToken();
    const url = `${config.apiUrl}/api/v1/products`;
    const response = await fetch(url, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    const shows = await response.json();
    res.status(200).json(shows);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      code: error.code,
      error: error.message
    });
  }
});
