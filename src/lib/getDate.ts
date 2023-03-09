const getDate = (initialDate:string) => {
    const dateParse = initialDate.split(' ');
    const date = dateParse[0].split('/')
    console.log(`${date[2]}-${date[1]}-${date[0]}`)
    return `${date[2]}-${date[0]}-${date[1]}`;
}
export default getDate;
