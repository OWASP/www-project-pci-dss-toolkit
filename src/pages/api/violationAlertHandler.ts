// src/pages/api/violationAlertHandler.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { sendViolationAlert } from '@/lib/sendViolationAlerts';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, subject, message } = req.body;

  if (!email || !subject || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const result = await sendViolationAlert(email, subject, message);
    if (result.success) {
      return res.status(200).json({ message: 'Alert sent successfully' });
    } else {
      return res.status(500).json({ error: result.message });
    }
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
