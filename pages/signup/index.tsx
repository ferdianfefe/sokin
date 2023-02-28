import { GetStaticProps } from "next";
import { useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import { useEffect } from "react";
import prisma from "../../lib/prisma";

const SignIn: React.FunctionComponent = (): JSX.Element => {
  const { data: session, status } = useSession();

  useEffect(() => {
    console.log("SignIn useEffect");
    console.log("session", session);
    console.log("status", status);
  }, [session, status]);

  return (
    <>
      {!session ? (
        <button onClick={() => signIn("google", { callbackUrl: "/post" })}>
          Sign in
        </button>
      ) : (
        <div>
          <h1>Sign in</h1>
          <p>Signing in as {session.user?.email}</p>
        </div>
      )}
    </>
  );
};

export default SignIn;
