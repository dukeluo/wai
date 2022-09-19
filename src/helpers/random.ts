export const shuffle = (array: string[]) => array.sort(() => Math.random() - 0.5)

export const randomNumber = (min: number, max: number) => Math.round((Math.random() * (max - min) + min) * 100) / 100
