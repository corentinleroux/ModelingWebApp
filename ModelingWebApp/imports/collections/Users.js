import { Mongo } from 'meteor/mongo';

const Users = new Mongo.Collection('ussers');

export default Users;