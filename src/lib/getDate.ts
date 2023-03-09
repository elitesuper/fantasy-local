const getDate = (initialDate:string) => {
    const dateParse = initialDate.split(' ');
    const date = dateParse[0].split('/')
    return `${date[2]}-${date[0]}-${date[1]}`;
}
export default getDate;
