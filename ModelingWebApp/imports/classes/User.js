import { Class } from 'meteor/jagi:astronomy';
import Users from '../collections/Users';

const User = Class.create({
    name: 'User',
    collection : Users,
    secured : false,
    fields: {
        pseudo: {
            type: String
        },
        password: {
            type: String
        }
    },
    helpers: {
       fullName(){
           return `${this.pseudo} ${this.password}`;
       } 
    }
});

export default User;