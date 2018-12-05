<template>
  <BaseModal title="An Example Modal" v-bind="$props" v-on="$listeners">
    <!-- Modal Body -->
    <form>
      <label>
        What's Super Mario's friend name?
        <input v-model="friendName" type="text">
      </label>
    </form>

    <!-- Modal Footer -->
    <template slot="footer">
      <button @click="$emit('accept', { friendName })">Save</button>
    </template>
  </BaseModal>
</template>

<script>
import BaseModal from "./BaseModal";

export default {
  components: {
    BaseModal
  },
  props: ["open"],
  data: () => ({
    friendName: ""
  })
};
</script>
