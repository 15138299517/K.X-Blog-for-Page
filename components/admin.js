var admin_template =`
    <div  id="t2" class="container">
        <div class="panel panel-primary">
            <br>
            <h3 class="text-center">博客管理</h3>
            <br>
            <table class="table table-bordered table-striped text-center">
                <thead>
                    <tr>
                        <template v-for="headitem in head">
                            <th>{{headitem}}</th>
                        </template>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="(row,index) in articles ">
                        <tr>
                            <td>{{row.id}}</td>
                            <td>{{row.title}}</td>
                            <td>{{row.zan}}</td>
                            <td><button @click="Edit(row.id)" class="btn btn-warning">编辑</button>
                                <button @click="Delete(index)" class="btn btn-danger">删除</button>
                            </td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
        <div>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-bottom  text-white">
                <h5 class="mx-auto">17软工2班孔鑫创作</h5>
            </nav>
        </div>
    </div>
`

const admin = {
    data() {
      return {
          head: ["Id", "标题", "被赞次数", "操作"],
          articles:store.state.articles,
      }
    },
    methods: {
        //删除
        Delete: function (index) {
            store.Remove(index);
        },
        //编辑
        Edit: function (id) {
            router.push({
                path: 'edit',
                query: { id: id }
              })
        }
    },
    template: admin_template
}