var exec = require('cordova/exec');

var BTPrinter = {
    checkBTStatus: function (fnSuccess, fnError) {
        exec(fnSuccess, fnError, "BluetoothPrinter", "checkBTStatus", []);
    },
    list: function (fnSuccess, fnError) {
        exec(fnSuccess, fnError, "BluetoothPrinter", "list", []);
    },
    connect: function (fnSuccess, fnError, name) {
        exec(fnSuccess, fnError, "BluetoothPrinter", "connect", [name]);
    },
    disconnect: function (fnSuccess, fnError) {
        exec(fnSuccess, fnError, "BluetoothPrinter", "disconnect", []);
    },
    printText: function (fnSuccess, fnError, str) {
        exec(fnSuccess, fnError, "BluetoothPrinter", "printText", [str]);
    },
    printTextSizeAlign: function (fnSuccess, fnError, str, size, align) {
        exec(fnSuccess, fnError, "BluetoothPrinter", "printTextSizeAlign", [str, size, align]);
    },
    printTitle: function (fnSuccess, fnError, str, size, align) {
        exec(fnSuccess, fnError, "BluetoothPrinter", "printTitle", [str, size, align]);
    },
    printImageUrl: function (fnSuccess, fnError, str, align) {
        exec(fnSuccess, fnError, "BluetoothPrinter", "printImageUrl", [str, align]);
    },
    printBase64: function (fnSuccess, fnError, str, align) {
        exec(fnSuccess, fnError, "BluetoothPrinter", "printBase64", [str, align]);
    },
    printPOSCommand: function (fnSuccess, fnError, str) {
        exec(fnSuccess, fnError, "BluetoothPrinter", "printPOSCommand", [str]);
    },
    printBarcode: function (fnSuccess, fnError, code, type, h, w, font, pos) {
        exec(fnSuccess, fnError, "BluetoothPrinter", "printBarcode", [code, type, h, w, font, pos]);
    },
    printQRCode: function (fnSuccess, fnError, str) {
        exec(fnSuccess, fnError, "BluetoothPrinter", "printQRCode", [str]);
    }
};

module.exports = BTPrinter;
