

// test database
// https://vuefire.vuejs.org/guide/getting-started.html


import { useFirestore, useCollection } from 'vuefire'
// import { my_db } from 'firebase/firestore'

export const service_test_db = () => {

    const db = useFirestore()
    // const my_db = db.ref("/my_db_table");

    // const todos = my_db(collection(db, 'todos'))

    console.log('Service test db test', db);

}

