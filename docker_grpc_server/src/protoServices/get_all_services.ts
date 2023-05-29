
class getAll {

    getAll(_: any, callback: any) {
        const customers: any = [
            {
                id: "a68b823c-7ca6-44bc-b721-fb4d5312cafc",
                name: "John Bolton",
                age: 23,
                address: "Address 11111111111111111111111111111111111111111111111111111111111111"
            },
            {
                id: "34415c7c-f82d-4e44-88ca-ae2a1aaa92b7",
                name: "Mary Anne",
                age: 45,
                address: "Address 2"
            }
        ];
        console.log(`   getAll  zvadssasa  =-=--  `, customers);
        // get data from DB
        callback(null, { customers });
    };

}

let get_all = new getAll()
export default get_all;
