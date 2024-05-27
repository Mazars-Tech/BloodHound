import { OptionsObject } from 'notistack';
export interface Notification {
    message: string;
    key: string;
    dismissed: boolean;
    options: OptionsObject;
}
