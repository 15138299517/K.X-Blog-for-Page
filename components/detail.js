var detail_template = `
<div class="container" id="t2">
    <br>
    <div style="text-align: center;"><h4><b>{{detail[0].title}}</b><h4></div>
      <br>
        <div >
            <h6><a herf="#" @click="Edit(detail[0].id)"><span class="float-right text-primary">编辑</span></a></h6>
        </div>
        <br>
        <br>
      
      <div v-html="detail[0].content">
      </div>
      <br><br>
      <div class="row float-right">
            <h6><b>赞：{{detail[0].zan}}</b></h6>&nbsp&nbsp<img src="./img/赞.jpg" width="30px" height="30px" @click="addZan(0)">
      </div>
      <div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-bottom  text-white">
            <h5 class="mx-auto">17软工2班孔鑫创作</h5>
        </nav>
    </div>
</div>
        `
const detail = {
    data() {
        return {
            
        }
    },
    computed: {
        detail: function () {
            var id=this.$route.query.id;
            return store.state.articles.filter(function (number) {
                return number.id == id
            })
        },
    },
    methods: {
        addZan: function (index) {
            store.addZan(this.detail[index].id-1);
        },
        //编辑
        Edit: function (id) {
            router.push({
                path: 'edit',
                query: { id: id }
              })
        }
    },
    template: detail_template
}
