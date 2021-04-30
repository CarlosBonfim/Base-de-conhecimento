<template>
  <aside class="menu" v-show="isMenuVisible">
      <div class="menu-filter">
          <i class="fa fa-search fa-lg"></i>
          <input type="text" placeholder="Digite para filtrar..." v-model="treeFilter" class="filter-field">
      </div>
      <Tree :data="treeData" :options="treeOptions" :filter="treeFilter" ref="tree" />
  </aside>
</template>

<script>
import {mapState} from 'vuex'
import Tree from 'liquor-tree'
import {baseApiUrl} from '@/global'
import axios from 'axios'

export default {
    name: 'Menu',
    components: {Tree},
    computed: mapState(['isMenuVisible']),
    data: function(){
        return{
            treeFilter: '',
            treeData: this.getTreeData(),
            treeOptions: {
                propertyNames:{'text':'name'},
                filter:{
                    emptyText: 'Categoria não encontrada'
                }
            }
        }
    },
    methods: {
        getTreeData(){
            const url = `${baseApiUrl}/categories/tree`
            return axios.get(url).then(res => res.data)
        },
        onNodeSelect(node){
            this.$router.push({
                name: 'articlesByCategory',
                params: {id: node.id}
            })
        }
    },
    mounted(){
        this.$refs.tree.$on('node:selected', this.onNodeSelect)
    }
}
</script>

<style>
    .menu{
        grid-area: menu;
        background: linear-gradient(to right, #232526,#414345);

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 100%;
    }
    .menu a,
    .menu a:hover{
        color: #fff;
        text-decoration: none;
    }

    .menu .tree-node.selected > .tree-content, 
    .menu .tree-node .tree-content:hover{
        background-color: rgba(255, 255, 255, 0.2);
    }
    .tree-arrow.has-child{
        filter: brightness(2);
        width: 1.3rem;
    }
    .menu .menu-filter{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        margin-right: 20px;
        margin: 10px;
        padding-bottom: 4px;
        border-bottom: 1px solid #AAA;
    }
    .menu .menu-filter i{
        color: #AAA;
        margin-right: 10px;
    }
    .menu input {
        color: #CCC;
        font-size: 1rem;
        border: 0;
        outline: 0;
        width: 100%;
        background: transparent;
    }
    .menu .tree{
        width: 100%;
    }
    .tree-anchor{
        padding: 0px;
        margin-left: 0px;
        width: 100px;
    }
    .tree-filter-empty{
        color: #CCC;
        margin-left: 5px;
        font-size: 1.3rem;
    }
</style>