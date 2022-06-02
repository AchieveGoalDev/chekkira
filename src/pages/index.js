import Head from "next/head";

import { useRouter } from "next/router";

import { Flex, Spacer, Box, Button } from "@chakra-ui/react";

export default function Home({ returnData }) {
  const router = useRouter();

  return (
    <>
      <Button onClick={() => router.push("/check")}>To Site</Button>
    </>
  );
}
