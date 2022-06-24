export default({
    name:"NavbarComponent",
    data(){
        return{
            menuText: 'To Do List Vue.js'
        }
    },
    methods: {},
    created() {},
    template: `
                <nav>
                    <div class="nav-wrapper">
                        <a href="#" class="brand-logo">{{menuText}}</a>
                    </div>
                </nav>
                `
})