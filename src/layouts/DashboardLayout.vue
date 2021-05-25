<template>
    <q-layout>
    <q-header bordered class="bg-green">
    
    <q-toolbar>
     <q-btn icon="menu" flat round size="sm"></q-btn>
     <q-toolbar-title>Todo List</q-toolbar-title>
     
<q-btn v-if="$route.name != 'login-page'" icon="person" label="account" color="white" text-color="primary">
<q-menu fit :offset ="[0,10]">

<q-btn  
 icon="logout" 
 label="logout" 
 color="red"
 text-color="white"
 to="/login"
></q-btn>
<q-btn class="full" icon = "account_circle" label = "profile" flat></q-btn>

</q-menu>
</q-btn>
    </q-toolbar>
    </q-header>    
    <q-page-container>
        <router-view></router-view>
    </q-page-container>

    </q-layout>
</template>