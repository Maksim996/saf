export default {
  components: {},
  data() {
    return {
      // text: 'test'
    }
  },
  methods: {
    GlobalGetValidationState({dirty, validated, valid = null}) {
        return dirty || validated ? valid : null;
    }
  }
}
