const db=new PouchDB('tasks')
const app=new Vue({el:'#app',data:{newTask:'',tasks:[],status:'loading...'},methods:{add(){let task={_id:new Date().toISOString(),title:this.newTask,done:!1}
if(this.newTask==='')return 0
else if(this.newTask.length>50){this.newTask=''
return 0}
this.newTask=''
db.put(task).catch(err=>{this.status='Error! Can\'t save'
console.error('Error on save',err.message)})},load(){db.allDocs({include_docs:!0}).then(docs=>{this.tasks=[]
docs.rows.forEach(res=>this.tasks.push(res.doc))
if(this.tasks.length===0)this.status="There is no task to do!"}).catch(err=>{this.status='Error! Can\'t load'
console.error('Error on load',err.message)})},taskDone(task){task.done=!task.done
db.put(task).catch(err=>{console.error('Error on check',err.message)})},remove(task){db.remove(task).catch(err=>{console.error('Error on delete',err.message)})},destroy(){db.destroy().then(()=>{console.log('Database deleted =( It is going to a better place... RIP')
location.reload()}).catch(err=>{console.log(err.message)})}},beforeMount:function(){this.load()}})
db.changes({since:'now',live:!0}).on('change',app.load)
