import { GetStaticProps } from "next";
import prisma from "../../lib/prisma";

export const getStaticProps: GetStaticProps = async () => {
  return <div>index</div>;
};
