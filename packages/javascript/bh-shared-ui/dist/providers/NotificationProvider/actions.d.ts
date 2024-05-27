import { Notification } from './model';
export declare enum ActionType {
    Add = "add",
    Dismiss = "dismiss",
    Remove = "remove"
}
export type Add = {
    type: ActionType.Add;
    value: Notification;
};
export type Dismiss = {
    type: ActionType.Dismiss;
    key?: string;
};
export type Remove = {
    type: ActionType.Remove;
    key?: string;
};
export type NotificationAction = Add | Dismiss | Remove;
export declare const addNotification: (notification: string, key?: string, options?: any) => Add;
export declare const dismissNotification: (key?: string) => Dismiss;
export declare const removeNotification: (key?: string) => Remove;
