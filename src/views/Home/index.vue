<template>
  <div>
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <Recommend></Recommend>
    <Rank></Rank>
    <Like></Like>
    <Floor></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from './components/ListContainer'
import Recommend from './components/Recommend'
import Rank from './components/Rank'
import Like from './components/Like'
import Floor from './components/Floor'
import Brand from './components/Brand'
  export default {
    components: {
      ListContainer,
      Recommend,
      Rank,
      Like,
      Floor,
      Brand
    }
  }

</script>
<style lang='' scoped>

</style>