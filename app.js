// Componente para visualizar las hisotiras de usuario
Vue.component('historias', {
    template:
    `
    <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
            <img src="../images/figure2.jpg" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">HISTORIAS</h5>
                <p class="card-text">Historias de usuario donde se pueden ver sus anecdotas, viajes, experiencias y entre otras cosas interesantes.</p>
            </div>
        </div>
    </div>
    `
})

// Componente para visualizar eventos
Vue.component('eventos',{
    template:
    `
    <div class="col-12 col-md-6 col-lg-4">
        <div class="card">
            <img src="../images/figure1.jpg" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">EVENTO</h5>
                <p class="card-text">Eventos publicos y privados para personas del comun, jubilados y pensionados.</p>
            </div>
        </div>
    </div>
    `
})

// Componente de encabezado
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
    el: '#page',
});