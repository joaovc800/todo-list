export default({
    name:"FooterComponent",
    data(){
        return{
            year: 2022,
            links:['https://github.com/joaovc800','https://www.linkedin.com/in/jo%C3%A3o-vinicius-da-costa-2786811b7/']
        }
    },
    methods: {},
    created() {},
    template: ` <footer class="page-footer">
                    <div class="container">
                        <div class="row">
                            <div class="col l6 s12">
                                <h5 class="white-text">Vue.js</h5>
                                <p class="grey-text text-lighten-4">Conteúdo desenvolvido por João Vinicius da Costa</p>
                            </div>
                            <div class="col l4 offset-l2 s12">
                                <h5 class="white-text">Links</h5>
                                <ul>
                                    <li v-for="link in links">
                                        <u><a class="white-text" target="_blank" :href="link">{{link}}</a></u>
                                    </li>
                                <ul>      
                            </div>
                        </div>
                    </div>
                    <div class="footer-copyright">
                        <div class="container">
                            &copy {{year}}
                        </div>
                    </div>
                </footer>`
})