import { IonicNativePlugin } from '@ionic-native/core';
export interface QRcodeScanResult {
    cancelled: boolean;
    text: string;
}
export declare class QRcodeScanner extends IonicNativePlugin {
    static pluginName: string;
    static plugin: string;
    static pluginRef: string;
    static repo: string;
    static platforms: string[];
    scan(options?: any[]): Promise<QRcodeScanResult>;
}
