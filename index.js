const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push('Ralph')
}

function destructivelyPrependCat(name){
    cats.unshift('Bob')
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}
const copyOfCats = [...cats, 'Broom'] 
function appendCat(name){
    return copyOfCats
}
const copyOfCats2 = ['Arnold', ...cats]
function prependCat(name){
    return copyOfCats2
}
function removeLastCat(){
    return cats.slice(0, cats.length -1)

}
function removeFirstCat(){
    return cats.slice(1)
}