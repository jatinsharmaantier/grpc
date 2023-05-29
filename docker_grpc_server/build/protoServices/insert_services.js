"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var insertCustomer = /** @class */ (function () {
    function insertCustomer() {
    }
    insertCustomer.prototype.insert = function (call, callback) {
        var customers = [
            {
                id: "a68b823c-7ca6-44bc-b721-fb4d5312cafc",
                name: "John Bolton",
                age: 23,
                address: "Address 1374 b-1"
            },
            {
                id: "34415c7c-f82d-4e44-88ca-ae2a1aaa92b7",
                name: "Mary Anne",
                age: 45,
                address: "Address 2"
            }
        ];
        console.log("call insert=-=-=-   ", call);
        var customer = call.request;
        customer.id = (0, uuid_1.v4)();
        customers.push(customer);
        callback(null, customer);
        console.log(" customers ==>>>> ", customers.length);
    };
    return insertCustomer;
}());
var insert_customer = new insertCustomer();
exports.default = insert_customer;
//# sourceMappingURL=insert_services.js.map