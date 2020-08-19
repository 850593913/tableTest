<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="@/assets/img/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <button @click="handleClick('push')">test</button>
    <button @click="handleClick('back')">back</button>
    <p>{{ food }}</p> -->
    <grid-manager
      :option="gridOption"
      ref="grid"
    ></grid-manager>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import GridManager from 'gridmanager';
export default {
  data(){
    return {
      // 表格渲染回调函数
        // query为gmOptions中配置的query
        callback: function(query) {
            console.log('callback => ', query);
        },

        // 表格
        gridOption : {
            // 表格唯一标识
            gridManagerName: 'test-gm',

            // 高度
            height: '300px',

            // 首次是否加载
            firstLoading: false,

            // 列配置
            columnData: [
                {
                    key: 'shopId',
                    width: '180px',
                    text: '店铺id',
                    align: 'center'
                },{
                    key: 'platId',
                    text: '平台',

                    // template=> function: return dom
                    // 参数介绍
                    // platId: 当前行数据中与配置项key相同字段的值
                    // row: 当前行数据
                    // index: 当前行所在数据中的索引值
                    template: (platId, row, index) => {
                        const span = document.createElement('span');
                        span.style.color = 'blue';
                        span.innerText = platId;
                        return span;
                    }
                },{
                    key: 'platNick',
                    text: '店铺名称',

                    // template=> string dom
                    template: `<span style="color: red">跟据相关法规，该单元格被过滤</span>`
                },{
                    key: 'createTime',
                    text: '创建时间',
                },{
                    key: 'updateTime',
                    text: '更新时间',

                    // 表头筛选条件, 该值由用户操作后会将选中的值以{key: value}的形式覆盖至query参数内。非必设项
                    filter: {
                        // 筛选条件列表, 数组对象。格式: [{value: '1', text: 'HTML/CSS'}],在使用filter时该参数为必设项。
                        option: [
                            {value: '1', text: 'HTML/CSS'},
                            {value: '2', text: 'nodeJS'},
                            {value: '3', text: 'javaScript'},
                            {value: '4', text: '前端鸡汤'},
                            {value: '5', text: 'PM Coffee'},
                            {value: '6', text: '前端框架'},
                            {value: '7', text: '前端相关'}
                        ],
                        // 筛选选中项，字符串, 默认为''。 非必设项，选中的过滤条件将会覆盖query
                        selected: '3',
                        // 否为多选, 布尔值, 默认为false。非必设项
                        isMultiple: false
                    },
                    // template=> function: return string dom
                    template: updateTime => {
                        return `<span style="color: blue">${updateTime}</span>`;
                    }
                },{
                    key: 'action',
                    text: '操作',
                    width: '100px',
                    align: 'center',

                    // template=> function: return vue template
                    // vue模版中将自动添加row字段，该字段为当前行所使用的数据
                    // vue模版将不允许再使用template函数中传入的参数
                    template:() => {
                        return '<el-button size="mini" type="danger" @click="delRelation(row)">解除绑定</el-button>';
                    }
                }
            ],
            // 使用分页
            supportAjaxPage: true,

            // 数据来源，类型: string url || data || function return[promise || string url || data]
            ajaxData: (settings, params) => {
                return tenantRelateShop(params);
            },

            // 请求失败后事件
            ajaxError: err => {
                console.log(err);
            },

            // checkbox选择事件
            checkedAfter: rowList => {
                this.selectedCheck(rowList);
            },

            // 每页显示条数
            pageSize: 20

            // ...更多配置请参考API
        }
    }
  },
  props:{
    food:{
      type:String,
      default:'apple'
    }
  },
  name: 'Home',
  components: {
    HelloWorld,
    GridManager
  },
  methods:{
    // 解除绑定
    delRelation: function(row) {
        // ... 解除绑定操作
    },
    handleClick(type){
      if(type==='push'){
        this.$router.push({
          name:'parent'
        })
      }else if (type === 'back') {
        this.$router.back()
      }
    }
  },
  beforeRouteEnter(to,from,next){
    // console.log(from.name);
    next()
  },
  beforeRouteLeave(to,from,next){
    const leave = confirm('确定要离开吗?')
    if(leave) next()
    else next(false)
  }
}
</script>
