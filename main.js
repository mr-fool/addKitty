var app = new Vue({
	el: "#app",
	data: {
  	cats: [
		  {name: "kitkat"},
		  {name: "fish"},
		  {name: "henry"}
	  ],
	  newCat: ''
  },
  methods: {
	  addKitty: function() {
		  this.cats.push({name: this.newCat})
		  this.newCat = ""
	  }
  }
})