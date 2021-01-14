import { Template } from 'meteor/templating';
import { Tasks } from '../api/collections';

import './body.html';

    Template.body.helpers({
        tasks() {

            Tasks.insert({text: "Yes we did it", score: 1 });
            console.log(Tasks.findOne({score: 1}));
            return Tasks.find({});
        },
    });

