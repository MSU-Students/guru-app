<template>
  <!-- <q-page class="flex flex-center" > -->
  <q-page :class="$q.screen.lt.md ? 'flex flex-center' : 'fixed-center q-pt-xl'">
    <q-card
      class="bg-light-blue-10 text-white  text-center text-h5"
      :class="$q.screen.lt.md ? 'q-ma-md q-pa-md' : 'main-style q-pa-xl'"
    >
    
        <h3 class="text-weight-bolder q-mb-md">guroAPP</h3>
         <q-img src="../../public/task-done-flat.png" width="100px" />
    
  
      <q-card-section class="q-gutter-y-md">
        <q-input
          bg-color="white"
          label="username"
          standout="bg-blue text-white"
          rounded
        >
          <template v-slot:prepend>
            <q-icon name="person"></q-icon>
          </template>
        </q-input>
        <q-input
          bg-color="white"
          label="password"
          type="password"
          standout="bg-blue text-white"
          rounded
        >
          <template v-slot:prepend>
            <q-icon name="lock"></q-icon>
          </template>
          <template v-slot:append>
            <q-icon
              class="cursor-pointer"
            ></q-icon>
          </template>
        </q-input>
      </q-card-section>
      <q-card-actions>
        <q-btn class="full-width bg-light-blue-102" label="login" to="/f/dashboard"></q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent from 'components/ClassComponent.vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: { ExampleComponent }
})
export default class PageIndex extends Vue {
  todos: Todo[] = [
    {
      id: 1,
      content: 'ct1'
    },
    {
      id: 2,
      content: 'ct2'
    },
    {
      id: 3,
      content: 'ct3'
    },
    {
      id: 4,
      content: 'ct4'
    },
    {
      id: 5,
      content: 'ct5'
    }
  ];
  meta: Meta = {
    totalCount: 1200
  };
};
</script>
