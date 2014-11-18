Todos.EditTodoView = Ember.TextField.extend({
    didInsertElement: function(){
        this.$().focus();
    }
});

// Regester newly created view with handlebars
Ember.Handlebars.helper('edit-todo', Todos.EditTodoView);
