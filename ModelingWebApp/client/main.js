import Vue from 'vue';
import App from './App.vue';
import './main.html';
import { Template } from 'meteor/templating';
import User from '../imports/classes/User';

/*window.$ = require('jquery');
window.joint = require('jointjs');
PlayersList = new Mongo.Collection('players');*/
window.User = User;

Template.body.helpers({

    user() {
        return User.findOne();
    }
})
/*
Meteor.startup(() => {
    new Vue({
        el: '#app',
        ...App,
    });
});


        Template.leaderboard.helpers({
            'player': function(){
                var currentUserId = Meteor.userId();
                return PlayersList.find({ createdBy: currentUserId },
                                        { sort: {score: -1, name: 1} });
            },
            'selectedClass': function(){
                var playerId = this._id;
                var selectedPlayer = Session.get('selectedPlayer');
                if(playerId == selectedPlayer){
                    return "selected"
                }
            },
            'selectedPlayer': function(){
                var selectedPlayer = Session.get('selectedPlayer');
                return PlayersList.findOne({ _id: selectedPlayer });
            }
        });
        Template.leaderboard.events({
            'click .player': function(){
                var playerId = this._id;
                Session.set('selectedPlayer', playerId);
            },
            'click .increment': function(){
                var selectedPlayer = Session.get('selectedPlayer');
                PlayersList.update({ _id: selectedPlayer }, { $inc: {score: 5} });
            },
            'click .decrement': function(){
                var selectedPlayer = Session.get('selectedPlayer');
                PlayersList.update({ _id: selectedPlayer }, {$inc: {score: -5} });
            },
            'click .remove': function(){
                var selectedPlayer = Session.get('selectedPlayer');
                PlayersList.remove({ _id: selectedPlayer });
            }
        });
        Template.addPlayerForm.events({
            'submit form': function(){
                event.preventDefault();
                var playerNameVar = event.target.playerName.value;
                var currentUserId = Meteor.userId();
                PlayersList.insert({
                    name: playerNameVar,
                    score: 0,
                    createdBy: currentUserId
                });
                event.target.playerName.value = "";
            }
        });
    
        Meteor.subscribe('thePlayers');        
    
*/






