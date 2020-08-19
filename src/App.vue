<template>
  <div>
    <vxe-grid
      ref="xGrid"
      size="mini"
      height="300"
      :data="dataSource"
      :columns="columns"
      border
      resizable
      column-key
      id="xGrid"
      highlight-hover-row
      highlight-current-row
      class="sortable-column-demo"
    >
      <template v-slot:test="{ rowIndex }">
        <a-input-number
          :ref="`number${rowIndex}`"
          :min="1"
          :max="10"
          @click="getThis(rowIndex)"
          @keyup.enter="next"
        />
      </template>
    </vxe-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      dataSource: [
        {
          name: "test"
        },
        {
          name: "test"
        }
      ],
      columns: [
        {
          title: "序号",
          type: "seq",
          fixed: "left"
        },
        {
          field: "name",
          title: "name",
          width: 100
        },
        {
          title: "test",
          width: 100,
          slots: {
            default: "test"
          }
        },
        {
          field: "name",
          title: "name",
          width: 100
        },
        {
          field: "name",
          title: "name",
          width: 100
        },
        {
          field: "name",
          title: "name",
          width: 100
        },
        {
          field: "name",
          title: "name",
          width: 100
        },
        {
          field: "name",
          title: "name",
          width: 100
        },
        {
          field: "name",
          title: "name",
          width: 100
        },
        {
          field: "name",
          title: "name",
          width: 100
        },
        {
          field: "name",
          title: "name",
          width: 100
        },
        {
          field: "name",
          title: "name",
          width: 100
        },
        {
          field: "name",
          title: "name",
          width: 100
        },
        {
          field: "name",
          title: "name",
          width: 100
        },
        {
          field: "name",
          title: "name",
          width: 100
        },
        {
          field: "name",
          title: "name",
          width: 100
        },
        {
          field: "name",
          title: "name",
          width: 100
        },
        {
          field: "name",
          title: "name",
          width: 100
        },
        {
          field: "name",
          title: "name",
          width: 100
        }
      ]
    };
  },
  computed: {
    current1: {
      get() {
        return this.current;
      },
      set(val) {
        // console.log(val);
        if (val < 0) {
          console.log("不能少于0");
          return;
        }
        if (val > 1) {
          console.log("不能大于2");
          return;
        }
        this.current = val;
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.xGrid.reloadData(this.dataSource);
      this.$refs.xGrid.reloadColumn(this.columns);
      // console.log(this.$refs);
      // console.log(this.$refs[`number0`]);
    });
  },
  methods: {
    getThis(index) {
      // console.log(index);
      this.current1 = index;
    },
    next() {
        console.log(this.$refs);
        this.current1++;
        console.log(this.$refs[`number${this.current1}`]);
        this.$refs[`number${this.current1}`].focus();
    }
  }
};
</script>

<style >
  .vxe-table--body{
    overflow-x: hidden !important;
  }
  .vxe-table{
    overflow-x: hidden !important;
  }
  .vxe-table--main-wrapper{
    overflow-x: hidden !important;
  }
  .sortable-column-demo{
    overflow-x: hidden !important;
  }
</style>
