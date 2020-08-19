export const columnsMixins = {
  data() {
    return {};
  },
  mounted() {
    this.columns = [
      {
        type: "seq",
        title: "序号",
        align: "center",
        dataIndex: "",
        width: 100,
        columnKey: "seq",
        fixed: "left",
        visible: true,
        showOverflow: true,
        showHeaderOverflow: true,
        sortable: true
      },
      {
        field: "isLock",
        title: "锁定",
        columnKey: "isLock",
        dataIndex: "isLock",
        width: 100,
        align: "center",
        fixed: "",
        slots: {
          default: ({ row }) => {
            return [
              <vxe-switch
                v-model={row.isLock}
                on-label="开"
                on-value={1}
                off-label="关"
                off-value={0}
              ></vxe-switch>
            ];
          }
        },
        visible: true,
        showOverflow: true,
        showHeaderOverflow: true,
        sortable: true
      },
      {
        field: "machineNos",
        title: "机台",
        width: 100,
        align: "center",
        slots: {
          default: ({ row }) => {
            return [
              <a-select
                disabled={row.isVisible}
                style="width:80px;"
                max-length={50}
                v-model={row.machineNo}
                showSearch
                size="small"
              ></a-select>
            ];
          }
        },
        visible: true,
        showOverflow: true,
        showHeaderOverflow: true,
        sortable: true
      },
      {
        field: "tonnage",
        title: "吨位",
        width: 100,
        align: "center",
        visible: true,
        showOverflow: true,
        showHeaderOverflow: true,
        sortable: true
      },
      {
        field: "itemNo",
        title: "物料编码",
        width: 100,
        align: "center",
        visible: true,
        showOverflow: true,
        showHeaderOverflow: true,
        sortable: true
      },

      {
        field: "scNo",
        title: "订单号",
        width: 100,
        align: "center",
        visible: true,
        showOverflow: true,
        showHeaderOverflow: true,
        sortable: true
      },
      {
        field: "itemModel",
        title: "型号",
        width: 100,
        align: "center",
        visible: true,
        showOverflow: true,
        showHeaderOverflow: true,
        sortable: true
      },
      {
        field: "itemName",
        title: "产品名称",
        columnKey: "itemName",
        dataIndex: "itemName",
        width: 100,
        align: "center",
        fixed: "",
        visible: true,
        showOverflow: true,
        showHeaderOverflow: true,
        sortable: true
      },

      {
        field: "instructionNo",
        title: "工作指令",
        columnKey: "instructionNo",
        dataIndex: "instructionNo",
        width: 100,
        align: "center",
        fixed: "",
        visible: true,
        showOverflow: true,
        showHeaderOverflow: true,
        sortable: true
      },

      {
        field: "rawMaterial",
        title: "材料",
        columnKey: "rawMaterial",
        dataIndex: "rawMaterial",
        width: 100,
        align: "center",
        fixed: "",
        visible: true,
        showOverflow: true,
        showHeaderOverflow: true,
        sortable: true
      },

      {
        field: "itemColor",
        title: "颜色",
        columnKey: "itemColor",
        dataIndex: "itemColor",
        width: 100,
        align: "center",
        fixed: "",
        visible: true,
        showOverflow: true,
        showHeaderOverflow: true,
        sortable: true
      },
      {
        field: "itemCode",
        title: "代码",
        columnKey: "itemCode",
        dataIndex: "itemCode",
        width: 100,
        align: "center",
        fixed: "",
        visible: true,
        showOverflow: true,
        showHeaderOverflow: true,
        sortable: true
      },
      {
        field: "netWeight",
        title: "净重",
        columnKey: "netWeight",
        dataIndex: "netWeight",
        width: 100,
        align: "center",
        fixed: "",
        visible: true,
        showOverflow: true,
        showHeaderOverflow: true,
        sortable: true
      },
      {
        field: "roughWeight",
        title: "毛重",
        columnKey: "roughWeight",
        dataIndex: "roughWeight",
        width: 100,
        align: "center",
        fixed: "",
        visible: true,
        showOverflow: true,
        showHeaderOverflow: true,
        sortable: true
      },
      {
        field: "materialConsumption",
        title: "材料用量",
        columnKey: "materialConsumption",
        dataIndex: "materialConsumption",
        width: 100,
        align: "center",
        fixed: "",
        visible: true,
        showOverflow: true,
        showHeaderOverflow: true,
        sortable: true
      },
      {
        field: "productQty",
        title: "订单量",
        columnKey: "productQty",
        dataIndex: "productQty",
        width: 100,
        align: "center",
        fixed: "",
        visible: true,
        showOverflow: true,
        showHeaderOverflow: true,
        sortable: true
      },
      {
        field: "surplusNum",
        title: "欠数",
        columnKey: "surplusNum",
        dataIndex: "surplusNum",
        width: 100,
        align: "center",
        fixed: "",
        visible: true,
        showOverflow: true,
        showHeaderOverflow: true,
        sortable: true
      },
      {
        field: "outputModulus",
        title: "出模数",
        columnKey: "outputModulus",
        dataIndex: "outputModulus",
        width: 100,
        align: "center",
        fixed: "",
        visible: true,
        showOverflow: true,
        showHeaderOverflow: true,
        sortable: true
      },
      {
        field: "period",
        title: "周期S",
        columnKey: "period",
        dataIndex: "period",
        width: 100,
        align: "center",
        fixed: "",
        visible: true,
        showOverflow: true,
        showHeaderOverflow: true,
        sortable: true
      },
      {
        field: "hourCapacity",
        title: "产能H",
        columnKey: "hourCapacity",
        dataIndex: "hourCapacity",
        width: 100,
        align: "center",
        fixed: "",
        visible: true,
        showOverflow: true,
        showHeaderOverflow: true,
        sortable: true
      },
      {
        field: "mouldTransferTime",
        title: "转模时间",
        columnKey: "mouldTransferTime",
        dataIndex: "mouldTransferTime",
        align: "center",
        fixed: "",
        width: 80,
        visible: true,
        showOverflow: true,
        showHeaderOverflow: true,
        sortable: true
      },
      {
        field: "colorTransferTime",
        title: "转色时间",
        columnKey: "colorTransferTime",
        dataIndex: "colorTransferTime",
        align: "center",
        width: 80,
        visible: true,
        showOverflow: true,
        showHeaderOverflow: true,
        sortable: true
      },
      {
        field: "standardTime",
        title: "标准工时",
        columnKey: "standardTime",
        dataIndex: "standardTime",
        align: "center",
        width: 80,
        visible: true,
        showOverflow: true,
        showHeaderOverflow: true,
        sortable: true
      },
      {
        field: "scmCompeleDate",
        title: "交付日期",
        columnKey: "scmCompeleDate",
        dataIndex: "scmCompeleDate",
        width: null,
        align: "center",
        width: 80,
        visible: true,
        showOverflow: true,
        showHeaderOverflow: true,
        sortable: true
      },
      {
        field: "foodSafety",
        title: "食品认证要求",
        columnKey: "foodSafety",
        dataIndex: "foodSafety",
        width: null,
        align: "center",
        width: 70,
        visible: true,
        showOverflow: true,
        showHeaderOverflow: true,
        sortable: true
      }
    ];
    // 日期之后
    this.afterDateColumns = [
      {
        field: "orderTime",
        title: "下单日",
        columnKey: "orderTime",
        dataIndex: "orderTime",
        width: null,
        align: "center",
        fixed: "",
        width: 80,
        visible: true,
        showOverflow: true,
        showHeaderOverflow: true,
        sortable: true
      },
      {
        field: "dayCapacity",
        title: "日产能",
        columnKey: "dayCapacity",
        dataIndex: "dayCapacity",
        width: null,
        align: "center",
        fixed: "",
        width: 80,
        visible: true,
        showOverflow: true,
        showHeaderOverflow: true,
        sortable: true
      },
      {
        field: "mouldTonnage",
        title: "模具吨位",
        columnKey: "mouldTonnage",
        dataIndex: "mouldTonnage",
        width: null,
        align: "center",
        width: 80,
        visible: true,
        showOverflow: true,
        showHeaderOverflow: true,
        sortable: true
      },
      {
        field: "orgName",
        title: "客户",
        columnKey: "orgName",
        dataIndex: "orgName",
        width: null,
        align: "center",
        width: 80,
        visible: true,
        showOverflow: true,
        showHeaderOverflow: true,
        sortable: true
      },
      {
        field: "processCardNo",
        title: "工艺卡编号",
        columnKey: "processCardNo",
        dataIndex: "processCardNo",
        width: null,
        align: "center",
        width: 100,
        visible: true,
        showOverflow: true,
        showHeaderOverflow: true,
        sortable: true
      },
      {
        field: "mouldAssetsNo",
        title: "模具资产编码",
        columnKey: "mouldAssetsNo",
        dataIndex: "mouldAssetsNo",
        width: null,
        align: "center",
        fixed: "",
        width: 80,
        visible: true,
        showOverflow: true,
        showHeaderOverflow: true,
        sortable: true
      }
    ];
  }
}
