
import { IonicNativePlugin, cordova } from '@ionic-native/core';

export interface QRcodeScanResult {
    cancelled: boolean;
    text: string;
}

export class QRcodeScanner extends IonicNativePlugin {
    static pluginName = 'QRcodeScanner';
    static plugin = 'iraydot-plugin-qrcodescanner';
    static pluginRef = 'cordova.plugins.qrcodeScanner';
    static repo = 'https://github.com/iraydot/ionic-native-qrcode';
    static platforms = ['Android'];

    scan(options?: any[]): Promise<QRcodeScanResult> {
        return cordova(this, 'scan', { callbackOrder: 'reverse' }, arguments);
    }

}


