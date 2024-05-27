export declare const useNotifications: () => {
    notifications: import("./model").Notification[];
    addNotification: (notification: string, key?: string, options?: any) => void;
    dismissNotification: (key?: string) => void;
    removeNotification: (key?: string) => void;
};
