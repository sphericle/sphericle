import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MusicOpinions from "../views/MusicOpinions.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import SSProgressView from "@/views/SSProgressView.vue";
import VideoProgressView from "@/views/VideoProgressView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/projects",
      name: "Projects",
      component: ProjectsView,
    },
    {
      path: "/videoprogress",
      name: "Video Progress",
      component: VideoProgressView,
    },
    {
      path: "/stormingsummit",
      name: "Storming Summit Progress",
      component: SSProgressView,
    },
    {
      path: "/music",
      name: "Music Opinions",
      component: MusicOpinions,
    },
  ],
});

export default router;
