Todos.TodosController = Ember.ArrayController.extend({
    actions: {
        createTodo: function(){
            // get todo title
            var title = this.get('newTitle');
            // if title is not there discard empty todo
            if(!title){
                return false;
            }
            if(!title.trim()){
                return ;
            }

            // create new todo model
            var todo = this.store.createRecord('todo', {
                title: title,
                isCompleted: false
            });

            // crear the "New Todo" text field
            this.set('newTitle', '');
            // save newly created model
            todo.save();
        }
    },
    
    remaining: function(){
        return this.filterBy('isCompleted', false).get('length');
    }.property('@each.isCompleted'),

    inflection: function() {
        var remaining = this.get('remaining');
        return remaining == 1 ? 'item' : 'items';
    }.property('remaining')
});


