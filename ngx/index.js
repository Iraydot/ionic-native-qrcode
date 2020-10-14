var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var QRcodeScanner = /** @class */ (function (_super) {
    __extends(QRcodeScanner, _super);
    function QRcodeScanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QRcodeScanner.prototype.scan = function (options) {
        return cordova(this, 'scan', { callbackOrder: 'reverse' }, arguments);
    };
    QRcodeScanner.pluginName = 'QRcodeScanner';
    QRcodeScanner.plugin = 'iraydot-plugin-qrcodescanner';
    QRcodeScanner.pluginRef = 'cordova.plugins.qrcodeScanner';
    QRcodeScanner.repo = 'https://github.com/iraydot/ionic-native-qrcode';
    QRcodeScanner.platforms = ['Android'];
    return QRcodeScanner;
}(IonicNativePlugin));
export { QRcodeScanner };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBT2hFO0lBQW1DLGlDQUFpQjtJQUFwRDs7SUFXQSxDQUFDO0lBSkcsNEJBQUksR0FBSixVQUFLLE9BQWU7UUFDaEIsT0FBTyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBUk0sd0JBQVUsR0FBRyxlQUFlLENBQUM7SUFDN0Isb0JBQU0sR0FBRyw4QkFBOEIsQ0FBQztJQUN4Qyx1QkFBUyxHQUFHLCtCQUErQixDQUFDO0lBQzVDLGtCQUFJLEdBQUcsZ0RBQWdELENBQUM7SUFDeEQsdUJBQVMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBTW5DLG9CQUFDO0NBQUEsQUFYRCxDQUFtQyxpQkFBaUIsR0FXbkQ7U0FYWSxhQUFhIn0=