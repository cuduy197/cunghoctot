<template>
    <f7-page>
        <f7-navbar title="Firebase Todo" back-link="Quay lại" sliding></f7-navbar>
        <f7-block inner>
            <!--   <h1>{{status}}</h1> -->
            <!-- <div>
                <f7-list form>
                    <f7-list-item>
                        <f7-icon slot="media" f7="add"></f7-icon>
                        <f7-input v-model.trim="newTodoText" @keypress.enter="addTodo" type="text" placeholder="Add new todo" />
                        <input type="text" style="display: none">
                    </f7-list-item>
                </f7-list>
                <ul is="transition-group">
                    <div v-for="todo in todos" :key="todo['.key']">
                        <div class="list-block">
                            <div class="item-content">
                                <div class="item-media">
                                    <f7-button @click="removeTodo(todo)">Xóa</f7-button>
                                </div>
                                <div class="item-inner">
                                    <div class="item-input" name="name">
                                        <input type="text" :value="todo.text" @input="updateTodoText(todo, $event.target.value)">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ul>
            </div> -->
        </f7-block>
    </f7-page>
</template>
<script>
/*import {
    mapState,
    mapMutations
} from 'vuex'

export default {
    computed: {
        ...mapState(['status'])
    },
    methods: {
        ...mapMutations([])
    }
}*/



/*import firebase from 'firebase';
var db = firebase.initializeApp({
    apiKey: "AIzaSyARtpjdBVtF9P-bhUVV8j9be5FDTAnO9Y8",
    authDomain: "tienganh-66025.firebaseapp.com",
    databaseURL: "https://tienganh-66025.firebaseio.com",
}).database()*/



/*import {
    mapGetters
} from 'vuex'


export default {
    data() {
            return {
                newTodoText: '',
                data: this.$store.state.test
            }
        },
        computed: {
            Vuex.mapGetters(['test'])
        },

        firebase: {
            todos: test
        },
        methods: {
            addTodo: function() {
                if (this.newTodoText) {
                    todosRef.push({
                        text: this.newTodoText
                    })
                    this.newTodoText = ''
                }
            },
            updateTodoText: function(todo, newText) {
                console.log(todosRef);
                todosRef.child(todo['.key']).child('text').set(newText)
            },
            removeTodo: function(todo) {
                todosRef.child(todo['.key']).remove()
            }
        }
}*/
</script>
<style>
ul {
    padding: 0;
}

.user {
    padding: 5px;
    transition: all .3s ease;
}

.v-enter,
.v-leave-active {
    height: 0;
    padding-top: 0;
    padding-bottom: 0;
    border-top-width: 0;
    border-bottom-width: 0;
}
</style>
