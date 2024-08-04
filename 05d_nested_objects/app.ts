type Author = {
    firstName: string;
    lastName: string;
};

type Book = {
    author: Author;
    name: string;
};

const myBook : Book = {
    author: {
        firstName: "Zia",
        lastName: "Khan"
    },
    name: "My Best Book"
}


//

type Shops = {
    types : string,
    area : number,
}

type market = {
    name: Shops,
    size : number,
}

let hypermarket : market = {
    name: {
        types : "medium",
        area : 12334
    },
    size : 1223
}