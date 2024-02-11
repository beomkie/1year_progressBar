<template>
  <div>
    <b-form 
      @submit="onSubmit" 
      @reset="onReset" 
      v-if="show"
      class="subject-style"
    >
      <b-form-group 
        id="input-group-3" 
        label="아이콘 :" 
        label-for="input-3"
        class="icon-select-style"
      >
        <b-form-select
          id="input-3"
          v-model="form.icon"
          :options="icon"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
        </b-form-checkbox-group>
      </b-form-group>
      <b-form-group
        id="input-group-1"
        label="목표제목 설정하기:"
        label-for="input-1"
        description="올해 이루고자 하는 목표의 제목을 설정해보세요."
        class="label-style"
      >
        <b-form-input
          id="input-1"
          v-model="form.subject"
          type="string"
          placeholder="마음먹은 목표의 제목을 설정하세요."
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group 
        id="input-group-2" 
        label="도달하고자 하는 목표를 구체화해보세요" 
        label-for="input-2"
        class="label-style"
        >

      <b-form-textarea
        id="textarea"
        v-model="form.text"
        placeholder="도달하고자 하는 목표를 구체적으로 작성해보세요."
        rows="3"
        max-rows="6"
      ></b-form-textarea>
      </b-form-group>

      <b-button 
        type="submit" 
        variant="primary"
        style="margin:20px;"
      >
      목표 세우기
      </b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>

  export default {
    components: {
      
    },
    data() {
      return {
        form: {
          icon: null,
          subject: '',
          text: '',
        },
        selectedEmoji: '',
        icon: [{ text: '아이콘 선택하기', value: null }, '🏃', '📚', '💵', '🏠'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.subject = ''
        this.form.text = ''
        this.form.icon = null
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
    }
  }
</script>

<style>
.subject-style {
  margin-top: 40px;
}
.label-style {
  font-weight: 600;
  text-align: left;
  margin: 15px;
  margin-bottom: 30px;
}
.icon-select-style {
  text-align: left;
  margin-left: 15px;
  font-weight: 600;
}
</style>