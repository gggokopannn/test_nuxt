<template>
  <div>
    <div class="input">
      <h1>TodoTask</h1>
      Task Name
      <input v-model="text" type="text"><br><br>
      Due Date&nbsp;&nbsp;
      <input v-model="date" type="date"><br><br>
    </div>
    <div class="button">
      <button @click="addTask()">ADD</button>
    </div>
    <div class="show" v-for="task in data" :key="task.id">
      <p>
        <p0>{{ task.name }}</p0>
        <p1>{{ task.dueDate }}</p1>
        <p2>
          <Icon name="eva:edit-fill" @click="openEditModal(task.id)"></Icon>
        </p2>
        <p3>
          <Icon name="eva:trash-2-fill" @click="deleteTask(task.id)"></Icon>
        </p3>
      </p>
    </div>
    <div v-if="showEditModal" class="modal">
      <p>Edit Todo</p>
      <input v-model="editedText" value.task.name type="text"><br><br>
      <input v-model="editedDate" value.task.dueDate type="date"><br><br>
      <button1 @click="closeEditModal">CANCEL</button1>
      <button2 @click="saveChanges">SUBMIT</button2>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const text = ref('')
const date = ref()
const data = ref([
  { id: 1, name: 'read a booktee', dueDate: '2023-09-24' },
  { id: 2, name: 'another task', dueDate: '2023-09-25' },
  { id: 3, name: 'test', dueDate: '2023-09-25' },
]);

const addTask = () => {
  data.value.push({
    id: data.value.length + 1,
    name: text.value,
    dueDate: date.value,
  });
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
.modal input {
  border-radius: 4px;
  width: 300px;
  height: 40px;
  border: 1px solid rgb(29, 29, 29);
}

.modal {
  border-radius: 8px;
  width: 500px;
  height: 250px;
  border: 1px solid rgb(29, 29, 29);
  margin-top: 20px;
  margin-left: 500px;
}

.input input {
  border-radius: 4px;
  width: 200px;
  height: 25px;
  border: 1px solid rgb(29, 29, 29);
  margin-left: 10px;
}

div {
  text-align: center;
}

button {
  background-color: white;
  border: none;
  color: deepskyblue;
  padding: 6px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border: 1px solid deepskyblue;
  border-radius: 3px;
}

button:hover {
  background-color: deepskyblue;
  /* Green */
  color: white;
}

.show {
  border: 1px solid black;
  width: 700px;
  height: 60px;
  border-radius: 10px;
  margin-top: 10px;
  margin-left: 400px;
  text-align: start;

}

.show p {
  margin-left: 30px;
  display: flex;
}

.show p0 {
  display: flex;
  margin-top: 2px;
}

.show p1 {
  margin-left: auto;
  display: flex;
  margin-top: 2px;
}

.show p2 {
  display: flex;
  margin-left: 10px;
  font-size: 25px;
  margin-right: 10px;
  color: orange;
}

.show p3 {
  display: flex;
  margin-right: 20px;
  font-size: 22px;
  color: red;
}

button1 {
  background-color: white;
  border: none;
  color: red;
  padding: 6px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border: 1px solid red;
  border-radius: 3px;
}

button2 {
  background-color: white;
  border: none;
  color: green;
  padding: 6px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border: 1px solid green;
  border-radius: 3px;
}
</style>