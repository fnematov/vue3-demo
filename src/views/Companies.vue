<template>
  <div class="about">
    <table>
      <thead>
      <tr>
        <th>#</th>
        <th>Company name</th>
        <th>Email</th>
        <th>Director</th>
        <th>Phone</th>
        <th>Country</th>
      </tr>
      <tr>
        <td>
          <input type="text" v-model="params.id">
        </td>
        <td>
          <input type="text" v-model="params.companyName">
        </td>
        <td>
          <input type="text" v-model="params.email">
        </td>
        <td></td>
        <td></td>
        <td>
          <input type="text" v-model="params.countryCode">
        </td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="company in items">
        <td><strong>{{ company.id }}</strong></td>
        <td>{{ company.companyName }}</td>
        <td>{{ company.email }}</td>
        <td>{{ company.director }}</td>
        <td>{{ company.phone }}</td>
        <td>{{ company.countryCode }}</td>
      </tr>
      <tr>
        <td colspan="6" style="text-align: center">
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
import {Company} from "@/types/Company";
import {CompanyRequestParams} from "@/types/CompanyRequestParams";

const companyParams = {
  id: null,
  companyName: null,
  email: null,
  countryCode: null
} as CompanyRequestParams;

const {items, totalPages, get, loading, params} = api<Company, CompanyRequestParams>('companies.json', companyParams);
</script>
