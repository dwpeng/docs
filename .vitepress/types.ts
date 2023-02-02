export interface Item {
    name: string,
    imgUrl: string,
    url: string,
    bgColor: string
}

export interface IndexProps {
    title: string,
    items: Item[]
}

export interface Card{
    title: string,
    items: Item[]
}
