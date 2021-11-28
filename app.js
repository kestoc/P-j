// Componente de encabezado Vue
Vue.component('encabezado',{
    template:
    `
    <div class="container-fluid mb-5 bg-primary d-flex justify-content-center">
        <h1 class="mb-0 p-4">{{titulo}}</h1>
    </div>
    `,
    data(){
        return {
            titulo: 'P&J'    
        }
    }
})

// Objeto Vue
const page = new Vue({
    el: '#page'
});