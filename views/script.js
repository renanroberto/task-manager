const db = new PouchDB('tasks')

const app = new Vue({
  el: '#app',

  data: {
    newTask: '',
    tasks: [
      { text: 'Example task', done: false }
    ],
    toSave: { _id: 'new Date().toISOString()', data: this.tasks}
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
      db.put(this.toSave, (err, res) => {
        if (!err) console.log("Save succeful!")
        else console.log('ERROR: ' + err)
      })
    },

    // print loaded docs
    load () {
      db.allDocs({include_docs: true, descending: true}, function(err, doc) {
        if (!err) console.log(doc.rows)
        else console.log('ERROR: ' + err)
      })
    }
  },

  beforeMount: function () {
    this.load()
  }
})
