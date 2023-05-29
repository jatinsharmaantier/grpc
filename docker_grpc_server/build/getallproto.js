"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAll = /** @class */ (function () {
    function getAll() {
    }
    getAll.prototype.getAll = function (_, callback) {
        var customers = [
            {
                id: "a68b823c-7ca6-44bc-b721-fb4d5312cafc",
                name: "John Bolton",
                age: 23,
                address: "Address 1"
            },
            {
                id: "34415c7c-f82d-4e44-88ca-ae2a1aaa92b7",
                name: "Mary Anne",
                age: 45,
                address: "Address 2"
            }
        ];
        console.log("   getAll  zvadssasa  =-=--  ", customers);
        // get data from DB
        callback(null, { customers: customers });
    };
    ;
    return getAll;
}());
var get_all = new getAll();
exports.default = get_all;
//# sourceMappingURL=getallproto.js.map