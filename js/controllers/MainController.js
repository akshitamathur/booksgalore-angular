app.controller('MainController', ['$scope', function($scope){
 $scope.title = 'Most Anticipated Releases';
  $scope.promo = 'Which release are you looking forward to the most?';
 $scope.products=
   [
   {
     name: 'Glass Sword : Red Queen #2',
     author: 'Victoria Aveyard',
     price: 14.99,
     pubdate: new Date('2016', '01', '09'),
     cover: 'img/book1.jpg',
     region: 'CAD',
     likes: 0,
     dislikes: 0
   },
   {
     name: 'End Of Watch: A Novel',
     author: 'Stephen King',
     price: 35.69,
     pubdate: new Date('2016', '05', '07'),
     cover: 'img/book2.jpg',
     region:'CAD',
     likes: 0,
     dislikes: 0
   },
   {
     name: 'Morning Star: Book III Of The Red Rising Trilogy',
     author:'Pierce Brown',
     price: 29,
     pubdate: new Date('2016', '01', '09'),
     cover: 'img/book3.jpg',
     region:'CAD',
     likes: 0,
     dislikes: 0
   },
   {
     name: 'I'+"'"+'ll See You In Paris',
     author:'Michelle Gable',
     price: 21,
     pubdate: new Date ('2016', '01', '09'),
     cover: 'img/book4.jpg',
     region:'CAD',
     likes: 0,
     dislikes: 0
   }
   
   ]
 $scope.plusOne = function(index){
   $scope.products[index].likes += 1;
 };
  
  $scope.minusOne = function(index){
    $scope.products[index].dislikes += 1;
  };
 
}]);