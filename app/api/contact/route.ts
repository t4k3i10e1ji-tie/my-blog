import { NextResponse } from "next/server"

export type ContactRequestBody = {
  name: string;
  email: string;
  message: string;
};

export const POST = async (request: Request) => {
  const body: ContactRequestBody = await request.json();

  console.log("お問い合わせを受け取りました:", body);

  return NextResponse.json({ message: "OK"});
};