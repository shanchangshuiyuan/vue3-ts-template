import SvgIcon from "@/components/SvgIcon/index.vue";
import Pagination from "@/components/Pagination/index.vue";

const allGlobalComponents = {
  SvgIcon,
  Pagination,
};

//对外暴露插件对象
export default {
  //必须叫做install
  install(app: { component: (arg0: string, arg1: any) => void; }) {
    Object.keys(allGlobalComponents).forEach((key) => {
      app.component(key, allGlobalComponents[key]);
    });
  },
};
