import { createRouter, createWebHistory } from "vue-router"
const routes = [{
    path: '/',
    name: 'warga.index',
    component: () => import('@/views/IndexWarga.vue')
},{
    path: '/tambahDataWarga',
    name: 'warga.tambahDataWarga',
    component: () => import('@/views/TambahDataWarga.vue')
},{
    path: '/EditDataWarga/:id',
    name: 'warga.editDataWarga',
    component: () => import('@/views/EditDataWarga.vue'),
    props: true
}]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router
