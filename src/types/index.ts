export type Guitar = {
    id : number
    name : string
    image : string
    description : string
    price : number
}

// HERENCIA CON TYPE
export type CartItem = Guitar &{
    quantity : number
}


// en este caso es lo mismo:
// interface Guitar {
//     id : number
//     name : string
//     image : string
//     description : string
//     price : number
// }

// HERENCIA CON INTERFACE
// export interface CartItem extends Guitar {
//     quantity : number
// }


// UTILITY TYPES
//solo las caracteristicas...
export type CartItem2 = Pick<Guitar, "id" | "name" | "price" > &{
    quantity : number
}

//todas caracteristicas menos...
export type CartItem3 = Omit<Guitar, "id" | "name" | "price" > &{
    quantity : number
}