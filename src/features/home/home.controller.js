export default class HomeController{
	contructor(randomNames){
		this.name = 'World';
		this.random = randomNames;
	}
	changeName(){
		this.name = 'angular-tips';
	}
	randomName(){
		this.name = this.random.getName();
	}
}

HomeController.$inject = ['randomNames'];