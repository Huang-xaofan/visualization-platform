<template>
  <div class="common-table">
    <el-table :data="tableData" height="420px" stripe>
      <el-table-column
        show-overflow-tooltip
        v-for="item in tableLabel"
        :key="item.prop"
        :label="item.label"
        :width="item.width ? item.width : 125"
      >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="180">
        <el-button size="mini" @click="handleEdit">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDeleto"
          >删除</el-button
        >
      </el-table-column>
    </el-table>
    <el-pagination
      class="pager"
      layout="prev,pager,next"
      :total="config.total"
      @current-change="changePage"
      :page-size="20"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "CommonTable",
  props: {
    tableData: Array,
    tableLabel: Array,
    config: Object,
  },
  data() {
    return {};
  },
  methods: {
    handleEdit(row) {
      this.$emit("edit", row);
    },
    handleDeleto(row) {
      this.$emit("del", row);
    },
    changePage(page) {
      this.$emit("changePage", page);
    },
  },
};
</script>

<style lang="less" scoped>
div {
  height: calc(100%-62px);
  background-color: rgb(255, 255, 255);
  position: relative;
  .pager {
    position: absolute;
    bottom: 5;
    right: 20px;
  }
}
</style>