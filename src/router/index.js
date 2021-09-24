import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import Mp_template from "../views/Mp_template.vue";
import Np_template from "../views/Np_temlpate.vue";
import Lp_template from "../views/Lp_temlpate.vue";
import Qp_template from "../views/Qp_temlpate.vue";
import Lp_table_template from "../views/Lp_table_template.vue";
import Lp_album_template from "../views/Lp_album_template.vue";
const routes = [
  {
    path: "/",
    name: "Mp_template",
    component: Mp_template,
  },
  {
    path: "/np_template",
    name: "Np_template",
    component: Np_template,
  },
  {
    path: "/lp_template",
    name: "Lp_template",
    component: Lp_template,
  },
  {
    path: "/lp_table_template",
    name: "Lp_table_template",
    component: Lp_table_template,
  },
  {
    path: "/lp_album_template",
    name: "Lp_album_template",
    component: Lp_album_template,
  },
  {
    path: "/qp_template",
    name: "Qp_template",
    component: Qp_template,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  //history: createWebHashHistory(),
  routes,
});

export default router;
