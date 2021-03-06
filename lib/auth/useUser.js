import { useEffect } from "react";
import Router from "next/router";
import useSWR from "swr";

export default function useUser({
  redirectTo = false,
  redirectIfFound = false,
} = {}) {

  const { data: user, mutate: mutateUser } = useSWR('/api/auth/user')

  useEffect(() => {
    if (!redirectTo || !user) 
      return

    if ((redirectTo && !redirectIfFound && !!user.LoggedIn) || (redirectIfFound && user.LoggedIn))
      Router.push(redirectTo)

  }, [user, redirectIfFound, redirectTo])

  return { user, mutateUser }
}
