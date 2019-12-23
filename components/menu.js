var menu_template = `
<div>
    <div> 
        <br>
        <div class="container">
            <div class="row">
                <div class="col-md-1">
                    <img src="./img/touxiang.jpg" class="rounded-circle">
                </div>&nbsp&nbsp
                <div>
                    <br>
                    <h1 class="text-warning">K.X的博客</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-9">
                    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                    <h7 class="text-light">啤酒、饮料、矿泉水</h7>
                </div>
                <div  class="col-md-1">
                    <h6><router-link to="/add" class="text-white"><span class="float-right ">写博客</span></router-link></h6>
                </div>
                <div class="col-md-1">
                    <h6><router-link to="/admin" class="text-white"><span class="float-right ">管理博客</span></router-link></h6>
                </div>
                <div class="col-md-1">
                </div>
            </div>
        </div>
        <br>
    </div>
    <br>
    <div class="container">
        <div class="row container">
            <div class="col-md-3" >
                <h5 class="bg-secondary text-center"><b>热门文章链接</b></h5>
                <div class="text-center" id="t1">
                    <p><a href="https://blog.csdn.net/kongsanjin/article/details/97611293" target="_blank">Java图书管理系统</a></p>
                    <p><a href="https://blog.csdn.net/kongsanjin/article/details/85286751" target="_blank">数据结构课程设计-校园导航系统</a></p>
                    <p><a href="https://blog.csdn.net/kongsanjin/article/details/100624779" target="_blank">VSCode运行html文件</a></p>
                    <p><a href="https://blog.csdn.net/kongsanjin/article/details/96425826" target="_blank">eclipse连接mysql</a></p>
                    <p><a href="https://blog.csdn.net/kongsanjin/article/details/103392372" target="_blank">Git学习</a></p>
                    <p><a href="https://blog.csdn.net/kongsanjin/article/details/97806534" target="_blank">Linux学习</a></p>
                </div>
                <br>
                <h5 class="bg-secondary text-center"><b>关于作者</b></h5>
                <p style="text-indent:2em" id="t1">
                    孔鑫，郑州升达经贸管理学院信息工程学院2017级软件工程专业的一名学生。曾获奖项：蓝桥杯全国软件和信息技术专业人才大赛河南赛区一等奖、蓝桥杯全国软件和信息技术专业人才大赛全国总决赛二等奖、ACM大学生程序设计竞赛河南省赛铜奖。
                </p>
                <h5 class="bg-secondary text-center"><b>作者博客</b></h5>
                <a href="https://blog.csdn.net/kongsanjin" target="_blank"><img src="./img/KX博客.jpg" class="col-md-12" id="t1"></a>
                &nbsp
                <h5 class="bg-secondary text-center"><b>推荐博客</b></h5>
                <a href="https://blog.csdn.net/wan_ide" target="_blank"><img src="./img/wanide博客.jpg" href="" class="col-md-12" id="t1"></a>
                &nbsp
                <br>
            </div>
            <div class="col-md-9">
                <div class="container">
                    <ul class="list-group">
                        <li v-for="item in articles" v-on:click="selectitem(item.id)" class="list-group-item">
                            <h5><b>{{item.title}}</b></h5>
                            <h6>赞：{{item.zan}}</h6>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <br>
    <br>
    <div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-bottom  text-white">
            <h5 class="mx-auto">17软工2班孔鑫创作</h5>
        </nav>
    </div>
</div>
  `
const menu = {
  data() {
    return {
        articles: store.state.articles,
    }
  },
  methods: {
    selectitem(id) {
      router.push({
        path: 'detail',
        query: { id: id }
      })
    }
  },
  template: menu_template
}
