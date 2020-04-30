import { bean, short, tall, grande, venti, trenta, debal } from "img/rate/ImageIndex";
const grade = JSON.parse(localStorage.getItem("user"))?.grade;
const GradeAvatar = (grade) => {
    if (grade === null) grade = JSON.parse(localStorage.getItem("user"))?.grade;
    switch (grade) {
        case "bean":
            return bean;
        case "short":
            return short;
        case "tall":
            return tall;
        case "venti":
            return venti;
        case "grande":
            return grande;
        case "trenta":
            return trenta;
        case "dev":
            return debal;
        default:
            return bean;
    }
};
export default GradeAvatar;
