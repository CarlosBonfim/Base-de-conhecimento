<template>
  <div class="category-admin">
    <b-form>
      <input id="category_id" type="hidden" v-model="category.id" />
          <b-form-group label="Categoria" label-for="category-name">
            <b-form-input id="category.name" type="text" v-model="category.name" required placeholder="Insira a Categoria" :readonly="mode === 'remove'"/>
          </b-form-group>
          <b-form-group label="Escolha a categoria Pai" label-for="category-parentId">
            <b-form-select v-if="mode === 'save'" id="category-parentid" :options="categories" v-model="category.parentId" class="mt-2" />
            <b-form-input v-else id="category-parentid" type="text" v-model="category.path" readonly />
          </b-form-group>
          <b-button variant="primary" v-if="mode === 'save'" @click="save">Salvar</b-button>
          <b-button variant="danger" v-if="mode === 'remove'" @click="remove"  >Excluir</b-button>
          <b-button @click="reset" class="ml-2">Cancelar</b-button>
    </b-form>
    <hr />

    <b-table hover striped :items="this.categories" :fields="fields">
      <template slot="actions" slot-scope="data">
        <b-button variant="warning" @click="loadCategory(data.item)" class="mr-1 mt-1">
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button  variant="danger"  @click="loadCategory(data.item, 'remove')"  class="mr-1 mt-1">
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import { baseApiUrl, showError } from "@/global"
import axios from "axios"
export default {
  name: "CategoryAdmin",
  data: function () {
    return {
        mode: "save",
        category: {},
        categories: [],
        selected: "null",
        fields: [
            { key: "id", label: "Código", sortable: true },
            { key: "name", label: "Nome", sortable: true },
            { key: "parentId", label: "Categoria Pai", sortable: true },
            { key: "path", label: "Caminho", sortable: true },
            { key: "actions", label: "Ações", sortable: true },
        ],
    }
  },
  methods: {
    loadCategories() {
      const url = `${baseApiUrl}/categories`
      axios.get(url).then((res) => {
        // this.categories = res.data
        this.categories = res.data.map((category) => {
          return { ...category, value: category.id, text: category.path }
        })
      })
    },
    reset() {
      this.mode = "save"
      this.category = {}
      this.loadCategories()
    },
    save() {
      const method = this.category.id ? "put" : "post"
      const id = this.category.id ? `/${this.category.id}` : ""
      axios[method](`${baseApiUrl}/categories${id}`, this.category)
        .then(() => {
          this.$toasted.global.defaultSuccess()
          this.reset()
        })
        .catch(showError)
    },
    remove() {
      const id = this.category.id
      axios
        .delete(`${baseApiUrl}/categories/${id}`, this.category)
        .then(() => {
          this.$toasted.global.defaultSuccess()
          this.reset()
        })
        .catch(showError)
    },
    loadCategory(category, mode = "save") {
      this.mode = mode
      this.category = { ...category }
    },
  },

  mounted() {
    this.loadCategories()
  },
}
</script>

<style>
</style>