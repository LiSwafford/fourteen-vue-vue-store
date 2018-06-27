<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      {{product.title}}
    </div>
  </div>
</template>

<script>
  import service from '@/assets/service'
export default {
  data(){
    return {
      product: {}
    }
  },
  mounted(){
    service.getProduct(this.$route.query.id)
            .then(res=>{
              console.log('res: ', res);

            })
  }
}
</script>
