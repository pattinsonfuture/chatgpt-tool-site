// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import queryQA from '@/lib/openaiApi';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  answer: string | MessageRecord;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  const { prompt, chatId, model, session } = req.body;

  if (!prompt) {
    res.status(400).json({ answer: 'No prompt provided' });
  }

  if (!chatId) {
    res.status(400).json({ answer: 'No chatId provided' });
  }

  //GPT query
  const response = await queryQA(prompt, chatId);

  // const message: MessageRecord = {
  //   text: response || 'ChatGPT Error: No response from OpenAI',
  //   createdAt: new Date(),
  //   user: {
  //     _id: '2',
  //     name: 'ChatGPT',
  //     avatar: 'https://i.imgur.com/7k12EPD.png',
  //   },
  // };

  console.log('message', response);
  

  res.status(200).json({ answer: response ?? "" });
}
