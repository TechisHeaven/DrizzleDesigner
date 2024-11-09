import React from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ schema: string }>;
}) {
  const schema = (await params).schema;
  return <div>{schema}</div>;
}
