
window.Perc = Vue.component('progress-view',{
    data(){
        return {message:'bla',percent: 50};
    },
    methods: {
        increaseSpeed(){
            this.$emit('add');
        },
    },
    created(){
        this.$on('add', () => this.percent += 10);
        this.$on('add', () => App.message = 'not cool');
    },

});

App = new Vue({
    el: '#root',
    data:{
        message:'test',
    },
    created(){
        this.$on('add', () => Perc.message = '10 added' );
        this.$on('add', () => alert('bla'));
    }
});

