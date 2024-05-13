<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Clientes
                <RouterLink to="/clientes/create" class=" btn btn-primary float-end">
                    agregar
                </RouterLink>
                </h4>
            </div>
            <div class="card-body">
                <table class = "table table-bordered table-striped">
                    <thead>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Direccion</th>
                        <th>Telefono</th>
                        <th>RFC</th>
                        <th>CURP</th>
                        <th>CP</th>
                        <th>Acciones</th>
                    </thead>
                    <tbody>
                        <tr v-for="(clientes,index) in clientes" :key="index">
                            <td>{{ clientes.id }}</td>
                            <td>{{ clientes.nombre }}</td>
                            <td>{{ clientes.apellido }}</td>
                            <td>{{ clientes.direccion }}</td>
                            <td>{{ clientes.telefono }}</td>
                            <td>{{ clientes.rfc }}</td>
                            <td>{{ clientes.curp }}</td>
                            <td>{{ clientes.cp }}</td>
                            <td>Editar &nbsp; Borrar</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>


</template>
<script>
    import axios from 'axios';
    export default {
        name: "ClientesView",
        data(){
            return{
                clientes: [],
            }
        },
        mounted(){             //metodo que se ejecuta solo cuando se carga la pagina
            this.getClientes();
        },
        methods: {
            getClientes(){
                axios.get('http://localhost:3000/api/clientes').then(res=>{
                    this.clientes = res.data;
                });
            }
        }
    }
</script>