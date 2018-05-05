$.get('/getmind',(e)=>{
    console.log(e);
    new Vue({
        el: '#app',
        data: function() {
            return {
              list: e,
              visible:false,
            }
        },
        methods:{
            getAll(){
                this.visible = true;
                $.get('/getmind',(e)=>{
                    this.list = e;
                })
            },
            go(e){
                $.get('/item?name='+e,(ee)=>{
                    ee = JSON.parse(ee)
                    editor.minder.importJson(ee)
                    this.visible = false;
                })
            },
            save(){
                let to = editor.minder.exportJson();
                let title = to.root.data;
                let str = title.text + '_' + title.id + '.json';
                console.log(to,str)
                $.post({
                    url:'/save',
                    data:{
                        dt:JSON.stringify(to),
                        name:str
                    },
                    success:(e)=>{
                        if(e=='success'){
                            this.$message({
                                message: '保存成功',
                                type: 'success'
                            });
                        }
                        console.log(e)
                    }
                })
            }
        },
        mounted(){
            setInterval(()=>{
                this.save()
            },1000*30)
        }
    })
})
