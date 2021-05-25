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
        <q-btn class="full-width bg-light-blue-102" label="login" to="/f/"></q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import ExampleComponent from 'components/ClassComponent.vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: { ExampleComponent }
})
export default class PageIndex extends Vue {
 
};
</script>
<style >
.bg-light-blue-10 {
  background-color: bg-light-blue-10;
  color: white;
}
.bg-light-blue-102 {
  background-color: white;
  color: navy;
}
.main-style{
width: 500px;
}

</style>