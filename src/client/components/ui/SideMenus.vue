<template>
  <SideMenu :data="menus" :border="false" :collapsed="collapsed" ></SideMenu>
</template>

<script>
    export default {
        name: "SideMenus",
      data() {
        return {
          title: 'AppLayout',
          width: 200,
          collapsed: false,
          selectedMenu: null,
          menus: [
            {
              text: "Forms",
              iconCls: "fa fa-wpforms",
              state: "open",
              children: [
                {
                  text: "Form Element"
                },
                {
                  text: "Wizard"
                },
                {
                  text: "File Upload"
                }
              ]
            },
            {
              text: "Mail",
              iconCls: "fa fa-at",
              selected: true,
              children: [
                {
                  text: "Inbox"
                },
                {
                  text: "Sent"
                },
                {
                  text: "Trash",
                  children: [
                    {
                      text: "Item1"
                    },
                    {
                      text: "Item2"
                    }
                  ]
                }
              ]
            },
            {
              text: "Layout",
              iconCls: "fa fa-table",
              children: [
                {
                  text: "Panel"
                },
                {
                  text: "Accordion"
                },
                {
                  text: "Tabs"
                }
              ]
            }
          ]
        };
      },
      methods: {
        toggle() {
          this.collapsed = !this.collapsed;
          this.width = this.collapsed ? 50 : 200;
        },
        onItemClick(item) {
          this.selectedMenu = item;
        }
      }
    }
</script>

<style scoped>
  @import "https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
</style>
