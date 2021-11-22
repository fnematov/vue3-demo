<template>
  <div class="home">
    
    <table>
      <thead>
      <tr>
        <th>#</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Gender</th>
      </tr>
      <tr>
        <td>
          <input type="text" v-model="params.id">
        </td>
        <td>
          <input type="text" v-model="params.firstName">
        </td>
        <td>
          <input type="text" v-model="params.lastName">
        </td>
        <td>
          <select v-model="params.gender">
            <option value="all">All</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="user in items">
        <td><strong>{{ user.id }}</strong></td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>{{ user.gender }}</td>
      </tr>
      <tr>
        <td colspan="4" style="text-align: center">
          <pagination :params="params" :total-pages="totalPages" @reload="get"/>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import Pagination from "@/components/Pagination.vue";
import {api} from "@/composable/api";
import {User} from "@/types/User";
import {UserRequestParams} from "@/types/UserRequestParams";

const userParams: UserRequestParams = {
  id: null,
  firstName: null,
  lastName: null,
  gender: null
};

const {items, totalPages, get, loading, params} = api<User, UserRequestParams>('users.json', userParams);

</script>
