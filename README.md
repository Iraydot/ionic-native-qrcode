# ionic-native-qrcode
=====================

用于Cordova/ionic跨平台二维码扫描的前端调用

## 安装

```
# ionic cordova plugin add iraydot-plugin-qrcodescanner
# npm install ionic-native-qrcode
```

## 支持平台

- Android

## 插件使用

 完整的示例:

 ```js
    // Angular示例
    import { QRcodeScanner } from 'ionic-native-qrcode/ngx';

    constructor(private qrcodeScanner: QRcodeScanner) { }

    ...

    this.qrcodeScanner.scan().then(barcodeData => {
    console.log('Barcode data', barcodeData);
    }).catch(err => {
        console.log('Error', err);
    });
 ```

 ## Licence ##

The MIT License