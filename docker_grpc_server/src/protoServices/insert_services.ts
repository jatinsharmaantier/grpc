import { v4 as uuidv4 } from 'uuid';

class insertCustomer {

    insert(call: any, callback: any) {

        const customers: any = [
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

        console.log(`call insert=-=-=-   `, call);

        let customer = call.request;
        customer.id = uuidv4();
        customers.push(customer);

        callback(null, customer);

        console.log(` customers ==>>>> `, customers.length);

    }

}

let insert_customer = new insertCustomer()
export default insert_customer;
