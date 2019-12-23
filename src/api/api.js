class Api {
    static isCompletePagePersonal() {
        const {name, email, bday} = localStorage;
        return (name && email && bday);
    }
    static isCompletePageAdress() {
        const {city, street, homeNumber, name, email, bday} = localStorage;
        return (city && street && homeNumber && name && email && bday);
    }
    static isCompletePageProfile() {
        const {name, email, bday, street, homeNumber, city, image} = localStorage;
        return (city && street && homeNumber && name && email && bday && image);
    }
    static setItem(key,val){
        localStorage.setItem(key,val);
    }
    static getItem(key){
        return localStorage.getItem(key);
    }

}
export default Api;