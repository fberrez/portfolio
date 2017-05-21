app.controller('HomeController', function() {
	var vm = this;
    vm.yo = Math.floor((new Date()-new Date('1995-10-02')) / (365.25 * 24 * 60 * 60 * 1000));
});