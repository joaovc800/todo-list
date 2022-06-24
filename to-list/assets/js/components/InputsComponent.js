export default({
    name:"InputComponent",
    data(){
        return{
            currentTodo:"",
            todos: [
                { text: "Learn Vue", done: false,active: 'Ativa'},
                { text: "Learn Java", done: false,active: 'Ativa' },
                { text: "Play with friends", done: true,active: 'Desativa' }
            ]
        }
    },
    methods: {
        addTodo() {
            if(this.currentTodo != ""){
                this.todos.push({
                    text: this.currentTodo,
                    done: false,
                    active: 'Ativa'
                });
                
            }
            this.currentTodo = "";
            
        },
        toggleTodo(todo) {
            todo.done = !todo.done;
            if(todo.active == "Ativa"){
                todo.active = "Desativa"
            }else{
                todo.active = "Ativa"
            }
        }
    },
    mounted() {
        
    },
    created() {
       
    },
    template: `<div class="row">
                    <form class="col s12">
                        <div class="row">
                            <div class="input-field col s6">
                                <input v-model="currentTodo" id="tarefa" type="text" class="validate">
                                <label for="icon_prefix">Tarefa</label>
                            </div> 
                            <button style="margin-top:30px" @click.prevent="addTodo" type="button" class="btn btn-blue">Enviar</button> 
                        </div>
                    </form>
                    <section>
                        <table>
                            <thead>
                                <tr>
                                    <th>Descrição</th>
                                    <th>Ativo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="todo in todos" :key="todo.text">
                                    <td>
                                        <label>
                                            <input @click="toggleTodo(todo)" type="checkbox" :checked="todo.done" />
                                            <span>{{todo.active}}</span>
                                        </label>
                                    </td>
                                    <td>
                                        <del v-if="todo.done">
                                            {{ todo.text }}
                                         </del>
                                        <span v-else>
                                            {{ todo.text }}
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table> 
                    </section>
                </div>
                `
})