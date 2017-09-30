const app = new Vue({
  el: '#app',

  data: {
    newTask: '',
    tasks: [
      { text: 'Example task', done: false }
    ],

    bgColor: '#368fb0',
    innerColor: '#8ac5db'
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

    },

    changeColor () {
      document.body.style.backgroundColor = this.bgColor
      document.getElementById('app').style.backgroundColor = this.innerColor
    }
  },

  watch: {
    bgColor: function () {
      this.changeColor()
    },
    innerColor: function () {
      this.changeColor()
    }
  },

  beforeMount: function () {
    this.load()
  }
})
