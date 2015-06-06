import Ember from 'ember';

export default Ember.Controller.extend({

   //isValid: Ember.computed(
   // 'model.email',
   // 'model.firstName',
   // 'model.lastName',
   // 'model.twitter',
   // function(){
   //    return !Ember.isEmpty(this.get('model.email')) && !Ember.isEmpty(this.get('model.firstName')) && !Ember.isEmpty(this.get('model.lastName')) && !Ember.isEmpty(this.get('model.twitter'));
   // }),
 
   hasEmail: Ember.computed.notEmpty('model.email'),
   hasFirstName: Ember.computed.notEmpty('model.firstName'),
   hasLastName: Ember.computed.notEmpty('model.lastName'),
   hasTwitter: Ember.computed.notEmpty('model.twitter'),
   isValid: Ember.computed.and( 'hasEmail', 'hasFirstName', 'hasLastName', 'hasTwitter'),
  
   actions: {

        save: function(){
        
            console.log("+- save action in friends new controller");
            
            if( this.get('isValid')){
            
               var _this = this;
               this.get('model').save().then(function(friend){

                _this.transitionToRoute('friends.show', friend);

                });

            } else {
                this.set('errorMessage', 'You have to fill all the fields');
            }

            return false;

        },

        cancel: function(){

            console.log("+- cancel action in friends new controller");
            this.transitionToRoute('friends');
            return false;
        }
    }
});
