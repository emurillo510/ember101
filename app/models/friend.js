// We import the default value from ember-data into the variable DS.
// Ember-data exports by default namespace (known as DS) that exposes all the 
// classes and functuins defined in http://emberjs.com/api/data.

import DS from 'ember-data';
import Ember from 'ember';

// Define the default export for this model, which will be a subclass of DS.model
// After this class has been defined, we can import this subclass doing: 
// import Friend fro 'borrower/models/friend'

// We can also use relative imports. So if we were in another model, we could write
// import Friend from './friend'
export default DS.Model.extend({

// DS.attr is the standard way to define attribute with Ember-Data.
  articles: DS.hasMany('article'),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  twitter: DS.attr('string'),
  totalArticles: DS.attr('number'),
  fullName: Ember.computed('firstName', 'lastName', function(){
    return this.get('firstName') + ' ' + this.get('lastName');
    })
});
