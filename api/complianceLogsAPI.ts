import express from 'express';
import logger from '../logging/auditLogger';

const router = express.Router();

// GET /api/compliance-logs
router.get('/compliance-logs', (req, res) => {
  try {
    logger.info('Compliance logs fetched by admin');
    res.status(200).json({
      message: 'Compliance logs retrieved successfully',
      data: [
        { timestamp: '2025-04-15 12:00:00', event: 'User login', status: 'success' },
        { timestamp: '2025-04-15 12:01:00', event: 'Compliance scan run', status: 'passed' },
        { timestamp: '2025-04-15 12:03:00', event: 'Admin settings updated', status: 'success' }
      ]
    });
  } catch (err) {
    logger.error(`Error retrieving compliance logs: ${(err as Error).message}`);
    res.status(500).json({ error: 'Failed to fetch compliance logs' });
  }
});

export default router;
