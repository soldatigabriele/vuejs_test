
Vue.component(
'tabs', {
    template: `
    <div>
        <div class="tabs">
          <ul>
            <li v-for="tab in tabs" :class="{'is-active': tab.isActive}">
                <a :href="tab.href" @click="selectTab(tab)"> {{tab.name}} </a>
            </li>
          </ul>
        </div>
        <div class="tabs-details">
            <slot></slot>
        </div>
    </div>
    `,
    data(){
        return {
            tabs: [],
        };
    },
    created(){
        this.tabs = this.$children;
    },
    methods:{
        selectTab(selectedTab){
            this.tabs.forEach(tab => {
                tab.isActive = (tab.name == selectedTab.name);
            });
        }
    }
});

Vue.component('tab',{
    props:{
        name:{ required:true},
        selected:{default: false}
    },
    data(){
        return{
        isActive: false
    };},
    mounted(){
        this.isActive = this.selected;
    },
    template:`
        <div class="" style="padding:20px;">
            <div v-show="isActive"><slot></slot></div>
        </div>
    `,
    computed: {
        href(){
            return '#'+this.name.toLowerCase().replace(/ /g, '-');
        },
    }
});

Vue.component({
'coupon',{
    template: '<input type="text">'
}
});

new Vue({
    el:'#test',
    methods:{ onCouponApplied(){ alert 'some';}},
    componensts:['tabs','coupon']
});
