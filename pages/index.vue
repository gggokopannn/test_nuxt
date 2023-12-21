<template>
  <div>
    <v-card text="" style="display: inline-block; padding: 20px; margin-top: 20px;">
      <h2>TodoTask</h2>
      Task Name
      <v-text-field style="width: 300px; " label="input Task Name" v-model="text" variant="outlined"></v-text-field>
      Due Date
      <v-text-field style="width: 300px; " label="input Date" v-model="date" type="date"
        variant="outlined"></v-text-field>
      <v-select label="หมวดหมู่" :items="['California', 'Colorado', 'Florida', 'Georgia']"
        variant="underlined"></v-select>
      <v-btn style="background-color: deepskyblue; color: white;" @click="addTask()" variant="elevated">ADD</v-btn>
    </v-card><br><br>

    <v-card style="width: 800px; height: 70px; background-color: whitesmoke; margin: auto; margin-top: 10px;" text=""
      v-for="task in data" :key="task.id">
      <v-row>
        <v-col>
          <p>{{ task.name }}</p>
        </v-col>
        <v-col>
          <p>{{ task.dueDate }}</p>
        </v-col>
        <v-col>
          <v-icon style="color: orange; margin-left: 300px;" @click="openEditModal(task.id)">mdi-pencil</v-icon>
        </v-col>
        <v-col>
          <v-icon style="color: red;" @click="deleteTask(task.id)">mdi-delete</v-icon>
        </v-col>
      </v-row>
    </v-card>

    <v-dialog v-model="showEditModal" width="500">
      <v-card>
        <v-card-text style="margin-top: 10px;">
          <h4>Edit Todo</h4><br>
          <v-text-field v-model="editedText" label="Task Name" type="text" variant="solo-filled"></v-text-field><br><br>
          <v-text-field v-model="editedDate" label="Due Date" type="date" variant="solo-filled"></v-text-field><br><br>
          <v-btn style="background-color: red; color: white;" @click="closeEditModal">CANCEL</v-btn>
          <v-btn style="margin-left: 15px; background-color: green; color: white;" @click="saveChanges">SUBMIT</v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>

  <v-dialog v-model="errorDialog" max-width="400">
    <v-card>
      <v-card-title style="color: red;">ข้อมูลผิดพลาด</v-card-title>
      <v-card-text>
        กรุณากรอกข้อมูลให้ครบถ้วน !!
      </v-card-text>
      <v-card-actions style="margin-left: 150px;">
        <v-btn style="margin-left: 15px; margin-top: 20px; background-color: rgb(49, 49, 49); color: white;"
          @click="closeErrorDialog">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue';

const text = ref('');
const date = ref('');
const data = ref([
  { id: 1, name: 'read a booktee', dueDate: '2023-09-24' },
  { id: 2, name: 'read a bookko', dueDate: '2023-09-25' },
  { id: 3, name: 'read a bookpai', dueDate: '2023-09-25' },
]);

const errorDialog = ref(false);

const addTask = () => {
  if (!text.value.trim() || !date.value) {
    // Show the error dialog if the data is incomplete
    errorDialog.value = true;
    return;
  }

  data.value.push({
    id: data.value.length + 1,
    name: text.value,
    dueDate: date.value,
  });

  text.value = '';
  date.value = '';
}

const closeErrorDialog = () => {
  // Close the error dialog
  errorDialog.value = false;
}

const deleteTask = (taskId) => {
  const taskIndex = data.value.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    data.value.splice(taskIndex, 1);
  }
};

const showEditModal = ref(false);
const editedTaskId = ref(null);
const editedText = ref('');
const editedDate = ref('');

const openEditModal = (taskId) => {
  const task = data.value.find(task => task.id === taskId);
  if (task) {
    editedTaskId.value = task.id;
    editedText.value = task.name;
    editedDate.value = task.dueDate;
    showEditModal.value = true;
  }
};

const saveChanges = () => {
  const taskIndex = data.value.findIndex(task => task.id === editedTaskId.value);
  if (taskIndex !== -1) {
    data.value[taskIndex].name = editedText.value;
    data.value[taskIndex].dueDate = editedDate.value;
    closeEditModal();
  }
};

const closeEditModal = () => {
  showEditModal.value = false;
  editedTaskId.value = null;
  editedText.value = '';
  editedDate.value = '';
};
</script>

<style scoped>
div {
  text-align: center;
}
</style>
