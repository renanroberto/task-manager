const app = new Vue({
  el: '#app',

  data: {
    newTask: '',
    tasks: [
      { text: 'Example task', done: false }
    ]
  },

  methods: {
    add () {
      if (this.newTask !== '') {
        this.tasks.push({ text: this.newTask, done: false })
      }
      this.newTask = ''
    },

    remove (task) {
      let index = this.tasks.indexOf(task)
      if (index > -1) this.tasks.splice(index, 1)
    },

    // save each item
    save () {

    },

    // print loaded docs
    load () {

    }
  },

  beforeMount: function () {
    this.load()
  }
})
