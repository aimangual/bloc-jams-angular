 (function() {
     function CollectionCtrl() {
         this.albums = [];
         for (var 1=0; i < 12; 1++) {
             this.albums.push(angular.copy(albumPicasso));
         }
     }
 
     angular
         .module('blocJams')
         .controller('CollectionCtrl', CollectionCtrl);
 })();