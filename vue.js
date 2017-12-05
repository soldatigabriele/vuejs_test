Vue.component(
'tit', {
    template: '<span><task v-for="n in names">{{n.name}}</task></span>',
    data(){
        return {names: [
            {name:'data',complete:true},
            {name:'dota',complete:true},
            {name:'detto',complete:false},
        ]};
    },
});
Vue.component( 'task',{
    template: '<span><slot></slot><br></span>',
}
);

Vue.component('gab-message',{
    props: ['title','body'],
    data(){ 
        return{ isVisible: true };
    },
    template: `
            <div class="alert alert-warning alert-dismissible fade show" role="alert" v-show="isVisible">
             <button type="button" class="close" data-dismiss="alert" @click="hideModal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
              <h4 class="alert-heading">{{title }}</h4>
              <p>{{body}}</p>
            </div>
   `,
    methods:{
        hideModal(){
            this.isVisible=false;
        }
    }
});

new Vue({el:'#root'});
