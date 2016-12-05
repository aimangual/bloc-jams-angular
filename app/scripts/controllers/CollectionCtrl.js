 (function() {
     function CollectionCtrl(Fixtures) {
         this.albums = [];
         for (var 1=0; i < 12; 1++) {
             this.albums.push(Fixtures.getAlbum());
         }
     }
 
     angular
         .module('blocJams')
         .controller('Fixtures', CollectionCtrl);
 })();