<template>
    <form @submit.prevent="update">
        <input v-model="warga.nama" type="text">
        <input v-model="warga.no_rumah" type="number">
        <select v-model="warga.jenis_kelamin">
            <option value="L">Laki-Laki</option>
            <option value="P">Perempuan</option>
        </select>
        <button class="btn btn-primary" type="submit">Add</button>
    </form>
</template>

<script>
    import axios  from 'axios';
    import { reactive,onMounted } from 'vue';
    import { useRouter,useRoute } from 'vue-router';
    
    export default {
        setup() {
            const warga = reactive({
                nama : "",
                no_rumah : "",
                jenis_kelamin : ""
            })
            const router = useRouter()
            const route = useRoute()

            onMounted(()=>{
                axios.get(`http://restapi.test:8081/api/warga/${route.params.id}`).then(response => {
                    warga.nama = response.data.data.nama
                    warga.jenis_kelamin = response.data.data.jenis_kelamin
                    warga.no_rumah = response.data.data.no_rumah
                    alert(response.data.data.nama)
                }).catch(error=>{
                    console.log(error.response.data)
                })
            })
            function update(){
                let dataNama = warga.nama
                let dataNorumah = warga.no_rumah
                let dataJeniskelamin = warga.jenis_kelamin

                axios.put(`http://restapi.test:8081/api/warga/${route.params.id}`,{
                    nama : dataNama,
                    no_rumah : dataNorumah,
                    jenis_kelamin : dataJeniskelamin
                }).then(() => {
                    router.push({
                        name : "warga.index"
                    }).catch(error=>{
                    console.log(error.response.data)
                })
                })
            }
            return{warga,router,update}
        }
    }
</script>