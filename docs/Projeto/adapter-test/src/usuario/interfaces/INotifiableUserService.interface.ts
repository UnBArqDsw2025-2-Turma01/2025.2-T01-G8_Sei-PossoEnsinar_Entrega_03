export const NOTIFIABLE_USER_SERVICE = 'INotifiableUserService';

export interface NotifiableUserService {
  getNotificationDetails(userId: number): Promise<{ nome: string; email: string }>;
}