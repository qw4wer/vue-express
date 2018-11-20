<template>
  <!--<ul class="nav">-->
  <!--<li v-for="item in items">-->
  <!--<a class="tabs-inner">-->
  <!--<span>-->
  <!--{{item.name}}-->
  <!--</span>-->
  <!--<span>x</span>-->
  <!--</a>-->


  <!--</li>-->

  <!--</ul>-->
  <div class="tabs-container f-column" style="height: 32px;">
    <div class="tabs-header f-row f-noshrink" style="height: 35px;"><!----> <!---->
      <div class="tabs-wrap f-column f-full f-order2"><!---->
        <ul class="tabs f-full f-row">
          <li class="f-inline-row " v-for="(item,i) in items"
              :class="[{'tabs-selected':index == i},{'tabs-first':i==0},{'tabs-last':i==items.length-1}]"
              v-on:click="select({i,$router})">
            <a href="javascript:;" class="tabs-inner f-inline-row f-full">
              <span class="tabs-title" :class="[{'tabs-closable':item.hasClose}]">{{item.name}}</span>
              <a href="javascript:;" tabindex="-1" class="tabs-close" v-if="item.hasClose"></a>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>

<script>
  import {mapActions} from 'vuex'
  import {mapFields} from 'vuex-map-fields';

  export default {
    name: 'NavigationBar',
    computed: {
      ...mapFields('navigation', [
        'index',
        'items'
      ]),
    },
    methods: {
      ...mapActions('navigation', [
        'select'
      ]),

    },
    // computed: {
    //   hasSelect:function(i){
    //     if(i == index){
    //       return true;
    //     }
    //     return false;
    //   }
    // }
  }
</script>

<style scoped>
  .nav {
    flex: 1 1 auto;
    height: auto;
    list-style-type: none;
    height: 25px;
    margin: 0px;
    padding-left: 4px;
    width: 50000px;
    border-style: solid;
    border-width: 0 0 1px 0;
    border-color: #b1c242;

  }

  .nav li {
    float: left;
    display: inherit;
    margin: 0 4px -1px 0;
    padding: 0;
    position: relative;
    border: 0;
  }

  .nav li a.tabs-inner {
    height: auto;
    line-height: normal;
    display: inherit;
    overflow: hidden;
    border-color: #b1c242;

    display: inline-block;
    text-decoration: none;
    margin: 0;
    padding: 0 10px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    white-space: nowrap;
    border-width: 1px;
    border-style: solid;
    border-bottom-width: 0px;
    outline: none;
    border-bottom: 1px solid #fafafa;;
    -moz-border-radius: 0px 0px 0 0;
    -webkit-border-radius: 0px 0px 0 0;
    border-radius: 0px 0px 0 0;
  }

</style>
