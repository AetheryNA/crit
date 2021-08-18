import { ironSession, withIronSession } from "next-iron-session";

const withSession = ironSession({
  cookieName: "crit-session",
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieOptions: {
    secure: process.env.NODE_ENV === "development",
  },
});

const withSessionSSR = (handler) => {
  return withIronSession(handler, {
    cookieName: "crit-session",
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieOptions: {
      secure: process.env.NODE_ENV === "development",
    },
  })
}

export  {
  withSessionSSR,
  withSession 
}
