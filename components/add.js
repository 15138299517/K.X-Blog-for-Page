var add_template = `
<div id="t2" class="container">
    <br><br><br>
    <div class="container">
      <div>
        <h5><b>博客标题：</b></h5>
        <input type="text" class="form-control" v-model="article.title" />
      </div>

      <h5><b>内容：</b></h5>
      <vue-html5-editor @change="updateData" :content="article.content" :height="330" ref="editor"></vue-html5-editor>
      <br>
      <button type="button" class="btn-block btn-primary" v-on:click="Save">保存</button>
    </div>
    <div>
        <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-bottom  text-white">
            <h5 class="mx-auto">17软工2班孔鑫创作</h5>
        </nav>
    </div>
</div>
        `
const add = {
  data() {
    return {
      content: '',
      article: { id: 0, title: '', content: '',zan: 0 }
    }
  },
  methods: {
    updateData: function (data) {
      // sync content to component
      this.article.content = data
    },
    //保存
    Save: function () {
      console.log(this.article);
      if (this.article.title == '' || this.article.content == '') {
        alert("标题或内容不能为空!");
        return;
        
      }

      this.article.content=this.article.content.replace(/<img/g, '<img  class="img-fluid" ')  //增加图片自适应样式

      this.article.id = store.getmaxid();

      store.add(this.article);

      //还原模板
      alert("博客发布成功");
      this.article = { id: 0, title: '', content: '',zan:0 };
      
      router.push({
        path: 'menu',
      })
    },

  },

  template: add_template
}
