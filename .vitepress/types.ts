export interface Item {
    name: string,
    imgUrl: string,
    url: string,
}

export interface IndexProps {
    title: string,
    items: Item[]
}

export interface Card{
    title: string,
    items: Item[]
}
