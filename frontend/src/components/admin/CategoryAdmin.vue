<template>
  <div class="category-admin">
      <b-table hover striped :items="this.categories" :fields="fields"></b-table>
  </div>
</template>

<script>
import {baseApiUrl, showError} from '@/global'
import axios from 'axios'
export default {
    name:'CategoryAdmin',
    data: function() {
      return{
        mode: 'save',
        category: {},
        categories: [],
        fields:[
          {key: 'id', label: 'Código', sortable: true},
          {key: 'name', label: 'Nome', sortable: true},
          {key:'parentId', label: 'Categoria Pai', sortable: true},
          {key: 'path', label: 'Caminho', sortable: true},
          {key: 'actions', label: 'Ações', sortable: true}
        ]
      }
    },
    methods: {
      loadCategories(){
        const url = `${baseApiUrl}/categories`
        axios.get(url).then(res => {
          this.categories = res.data
        })
      }
    },
    mounted(){
      this.loadCategories()
    }
}
</script>

<style>

</style>