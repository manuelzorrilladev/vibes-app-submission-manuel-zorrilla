import type { Product } from './../types.js';


function findObjectById(array: Product[], idToFind: string): Product | undefined {
  return array.find(obj => obj.id === idToFind);
}



function findByName(array: Product[], searchParam: string): Product[] | []{
    return array.filter(obj => obj.name.toLowerCase().includes(searchParam.toLowerCase()));
}

function findObjectAvailable(array: Product[], isAvailable: boolean): Product[] {
 return array.filter(obj => obj.isAvailable === isAvailable);
}

function orderArray(array: Product[], propertyToSearch: string, order:string): Product[] {

    
    if (propertyToSearch === "name") {
        return array.slice().sort((a, b) => 
            order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
        );
    }

    if (propertyToSearch === "price") {
        return array.slice().sort((a, b) => 
            order === 'asc' ? a.price - b.price : b.price - a.price
        );
    }

    return array
}



function paginateArray(array: Product[], page: number, limit: number): Product[] {
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    return array.slice(startIndex, endIndex);
}





export { findObjectById, findByName, orderArray, paginateArray, findObjectAvailable };