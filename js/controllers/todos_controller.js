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
    }
});

Todos.TodoController = Ember.ObjectController.extend({
    isCompleted: function(key, value){
        var model = this.get('model');

        if(value == undefined) {
            // property being used as getter
            return model.get('isCompleted');
        } else {
            // property being used for setter
            model.set('isCompleted', value);
            model.save();
            return value;
        }
    }.property('model.isCompleted')
    
});
