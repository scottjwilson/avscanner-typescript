import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: string;
  created_time: string;
  updated_time: string;
  message: string;
  permalink_url: string;
  full_picture: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await fetch(process.env.FB_URL);
  const posts = await response.json();
  res.status(200).json(posts);
}
