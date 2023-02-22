// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import query from '@/lib/openaiApi';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  answer: MessageRecord
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
  const response = await query(prompt, chatId, model);

  const message: MessageRecord = {
    text: response || 'ChatGPT Error: No response from OpenAI',
    createdAt: new Date(),
    user: {
      _id: '2',
      name: 'ChatGPT',
      avatar: 'https://i.imgur.com/7k12EPD.png',
    },
  };

  console.log('message', message);
  

  res.status(200).json({ answer: message });
}
