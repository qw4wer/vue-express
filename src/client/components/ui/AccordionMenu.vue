<template>
  <div>
    <Accordion style="height:250px">
      <AccordionPanel :title="'导航菜单'">
        <p>Content1</p>
      </AccordionPanel>
      <AccordionPanel :title="'Title2'">
        <p>Content2</p>
      </AccordionPanel>
      <AccordionPanel :title="'Title3'">
        <p>Content3</p>
      </AccordionPanel>
    </Accordion>
  </div>

</template>

<script>
  export default {
    name: "navigation",
    mounted: () => {
      console.log()
    }
  }
</script>

<style scoped>

</style>
