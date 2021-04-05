<template>
  <div class="category-admin">
    <b-form>
      <input id="category_id" type="hidden" v-model="category.id" />
      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Categoria" label-for = "category-name">
            <b-form-input id="category.name" type="text" v-model="category.name" required placeholder="Insira a Categoria" :readonly="mode === 'remove' "></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
    </b-form>

    <b-table hover striped :items="this.categories" :fields="fields"></b-table>
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
        this.categories = res.data
      })
    },
    reset() {
      this.state = "save"
      this.categories = {}
      this.loadCategories()
    },
    save() {
      const method = this.category.id ? "put" : "save"
      const id = this.category.id ? `/${id}` : ""
      axios[method](`${baseApiUrl}/users${id}`, this.category)
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
    loadCategory(category, mode = 'save'){
      this.mode = mode
      this.user = {...user}
    }
  },

  mounted() {
    this.loadCategories()
  },
}
</script>

<style>
</style>