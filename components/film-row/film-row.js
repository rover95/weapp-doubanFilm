Component({
  data:{

  },
  properties: {
    filmData: {
      type: Array,
      value: [],
      observer: function(newData, oldData){
        console.log(newData,oldData)
      }
    }
  },
  methods: {

  },
})