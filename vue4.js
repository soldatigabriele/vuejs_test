window.Event = new class({
    constructor(){
        this.vue = new Vue();
    }
    fire(event, data = null){
        this.vue.$emit(event, data);
    }
    listen(event, callback){
        this.vue.$on(event, callback);
    }
});

Vue.component('coupon', {
    template: '<input type="text" placeholder="insert a coupon" v-on:blur="submitCouponForValidation">',
    methods: {
        submitCouponForValidation(){ 
            // emit en event
            Event.message = 'coupon was applied';
            Event.fire('coupon');
            alert('ajax request to apply the coupon. If succedeed emit the \"coupon-was-applied\" event, which triggers the onCouponApplied method');
            this.$emit('coupon-was-applied');
        }
    }
})

new Vue({
    el: '#root',
    data: {
        coupon: false,
    },
    methods:{ 
        onCouponApplied(){ 
            this.coupon = true,
            alert ('the coupon was applied');
        }
       
    },
    created(){
        Event.listen('coupon', () => Event.message = 'blabla');
    },
});



