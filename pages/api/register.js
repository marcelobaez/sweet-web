import auth0 from "../../utils/auth0";

export default async function register(req, res) {
  try {
    await auth0.handleLogin(req, res, {
      authParams: {
        initialScreen: "signup"
      }
    });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).end(error.message);
  }
}
