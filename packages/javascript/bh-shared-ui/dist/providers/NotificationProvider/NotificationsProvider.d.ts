import { Dispatch, ReactNode } from 'react';
import { Notification } from './model';
import { NotificationAction } from './actions';
export declare const NotificationsContext: import("react").Context<Notification[]>;
export declare const NotificationsDispatchContext: import("react").Context<Dispatch<NotificationAction> | null>;
interface NotificationProviderProps {
    children?: ReactNode;
}
declare const NotificationsProvider: ({ children }: NotificationProviderProps) => import("react/jsx-runtime").JSX.Element;
export default NotificationsProvider;
