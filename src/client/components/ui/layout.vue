<template>

  <Layout style="width:100%;height:100vh;">
    <LayoutPanel region="north" style="height:50px;">
      <div class="title">North Region</div>
    </LayoutPanel>
    <LayoutPanel region="south" style="height:50px;">
      <div class="title">South Region</div>
    </LayoutPanel>
    <LayoutPanel region="west" style="width:180px;" ref="west" title="导航菜单" >
      <!--<template slot="header">-->
        <!--<svg class="side-toggle" viewBox="0 0 24 24" @click="$refs.west.collapse()"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></svg>-->
        <!--<span>Side Menu</span>-->
      <!--</template>-->
      <!--<accordionMenu></accordionMenu>-->
      <sideMenu></sideMenu>
    </LayoutPanel>
    <LayoutPanel region="center" style="height:100%">
      <navigationBar></navigationBar>

      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </LayoutPanel>
  </Layout>

</template>

<script>
  import accordionMenu from './AccordionMenu'
  import navigationBar from './NavigationBar'
  import sideMenu from './SideMenus'
  export default {
    name: "layout",
    components: {
      accordionMenu,
      navigationBar,
      sideMenu
    }
  }
</script>

<style scoped>

</style>
