import { sendEmailAlert } from '@/services/emailService';

export async function notifyViolation(violationDetails: string) {
  const subject = "🚨 PCI DSS Violation Detected";
  const message = `A potential PCI DSS violation was detected:\n\n${violationDetails}\n\nPlease investigate immediately.`;

  await sendEmailAlert(subject, message);
}
