angular.module('baseController', ['ionic'])
.controller('LoginCtrl', function ($scope, $cordovaFile, $state, $http) {

    $scope.loginData = { ad: '', sifre: '' }

    $scope.doLogin = function (a) {

        if (a.ad == 'Gamze' && a.sifre == '123')
            $state.go('LoginData', { 'data': $scope.loginData });
        else
            alert("Bilgileri kontrol ediniz.");


        $cordovaFile.checkFile(cordova.file.externalApplicationStorageDirectory, "kullanici.txt")
       .then(function (success) {

           $http.get(cordova.file.externalApplicationStorageDirectory + "kullanici.txt")
          .success(function (data) {

              var gelenData = JSON.stringify(data);
              var json = JSON.parse(gelenData);

              alert("Ad: " + json.ad + "Soyad: " + json.soyad + "Yaş: " + json.yas + "Admin: " + json.ISADMIN);

          }, function (error) {
              alert(JSON.stringify(error));
          });

       }, function (error) {

           alert("Dosya bulunamadı");
       });

    };
})

.controller('PlaylistsCtrl', function ($scope) {

    $scope.playlists = [
      { title: 'Ali', id: 1 },
      { title: 'Ayse', id: 2 },
      { title: 'Tanem', id: 3 },
      { title: 'Gamze', id: 4 }
    ];

}
)

.controller('LoginDataCtrl', function ($scope, $cordovaFile, $stateParams, $state) {

    var datam = { ad: '', soyad: '', yas: '', ISADMIN: '' };

    $scope.logData = { ad: '', soyad: '', yas: '', ISADMIN: '' };
    var gelen = $stateParams.data;
    alert("Gelen:" + gelen.ad);
    $scope.logData.ad = gelen.ad;


    $scope.Kayit = function (a) {

        alert("Ad: " + a.ad + "Soyad: " + a.soyad + "Yaş: " + a.yas + "Admin: " + a.ISADMIN);

        var datam = { ad: '', soyad: '', yas: '', ISADMIN: '' };
        datam.ad = a.ad;
        datam.soyad = a.soyad;
        datam.yas = a.yas;
        datam.ISADMIN = a.ISADMIN;


        $cordovaFile.writeFile(cordova.file.externalApplicationStorageDirectory, "kullanici.txt", datam, true)
          .then(function (success) {

              alert(" SUCCESDosya yolu :" + cordova.file.externalApplicationStorageDirectory + JSON.stringify(success));

          }, function (error) {

              alert("Dosya yolu :" + "Dosya yolu :" + JSON.stringify(error));


          });
    }


})


.controller('YonlendirCtrl', function ($scope, $stateParams) {

    var gelen = $stateParams.Username;
    $scope.ad = gelen;
    $state.go("Yonlendir", { "Ad": a.ad, "Soyad": a.soyad, "Yas": a.yas });
}
)



.controller('KisilerCtrl', function ($scope, $ionicModal, $filter, $state, $http) {


      $scope.kisiler = [
      { id: 1, ad: 'Fatih', soyad: 'Soysal', email: 'fatihsoysal@outlook.com' },
      { id: 2, ad: 'Ahmet', soyad: 'Şahin', email: 'ahmetsahin@gmail.com' },
      { id: 3, ad: 'Sezer', soyad: 'Yılmaz', email: 'sezzer@hotmail.com' },
      { id: 4, ad: 'Gamze', soyad: 'Soysal', email: 'fatihsoysal@outlook.com' },
      { id: 5, ad: 'Hasan', soyad: 'Şahin', email: 'ahmetsahin@gmail.com' },
      { id: 6, ad: 'Ali', soyad: 'Yılmaz', email: 'sezzer@hotmail.com' },
      { id: 7, ad: 'Ahmet', soyad: 'Soysal', email: 'fatihsoysal@outlook.com' },
      { id: 8, ad: 'Mehmet', soyad: 'Şahin', email: 'ahmetsahin@gmail.com' },
      { id: 9, ad: 'Osman', soyad: 'Yılmaz', email: 'sezzer@hotmail.com' },
      { id: 10, ad: 'Kaya', soyad: 'Şahin', email: 'ahmetsahin@gmail.com' },
      { id: 11, ad: 'Volkan', soyad: 'Yılmaz', email: 'sezzer@hotmail.com' },
      { id: 12, ad: 'Ayse', soyad: 'Soysal', email: 'fatihsoysal@outlook.com' },
      { id: 13, ad: 'Hakan', soyad: 'Şahin', email: 'ahmetsahin@gmail.com' },
      { id: 14, ad: 'Tanem', soyad: 'Yılmaz', email: 'sezzer@hotmail.com' },
      { id: 15, ad: 'Elif', soyad: 'Soysal', email: 'fatihsoysal@outlook.com' },
      { id: 16, ad: 'Ada', soyad: 'Şahin', email: 'ahmetsahin@gmail.com' },
      { id: 17, ad: 'Yagız', soyad: 'Şahin', email: 'ahmetsahin@gmail.com' },
      { id: 18, ad: 'Eslim', soyad: 'Yılmaz', email: 'sezzer@hotmail.com' },
      { id: 19, ad: 'Hasan', soyad: 'Soysal', email: 'fatihsoysal@outlook.com' },
      { id: 20, ad: 'Muhibe', soyad: 'Şahin', email: 'ahmetsahin@gmail.com' },
      { id: 21, ad: 'Zeyno', soyad: 'Yılmaz', email: 'sezzer@hotmail.com' },
      { id: 22, ad: 'Hacer', soyad: 'Soysal', email: 'fatihsoysal@outlook.com' },
      { id: 23, ad: 'Burcu', soyad: 'Şahin', email: 'ahmetsahin@gmail.com' },
      { id: 24, ad: 'Tuğba', soyad: 'Şahin', email: 'ahmetsahin@gmail.com' },
      { id: 25, ad: 'Tuğçe', soyad: 'Yılmaz', email: 'sezzer@hotmail.com' },
      { id: 26, ad: 'Selma', soyad: 'Soysal', email: 'fatihsoysal@outlook.com' },
      { id: 27, ad: 'Gizem', soyad: 'Şahin', email: 'ahmetsahin@gmail.com' },
      { id: 28, ad: 'Şeyda', soyad: 'Yılmaz', email: 'sezzer@hotmail.com' },
      { id: 29, ad: 'Fatih', soyad: 'Soysal', email: 'fatihsoysal@outlook.com' },
      { id: 30, ad: 'Ilayda', soyad: 'Şahin', email: 'ahmetsahin@gmail.com' },
      { id: 31, ad: 'Canan', soyad: 'Şahin', email: 'ahmetsahin@gmail.com' },
      { id: 32, ad: 'Cem', soyad: 'Yılmaz', email: 'sezzer@hotmail.com' },
      { id: 33, ad: 'Aygul', soyad: 'Soysal', email: 'fatihsoysal@outlook.com' },
      { id: 34, ad: 'Ahmet', soyad: 'Şahin', email: 'ahmetsahin@gmail.com' },
      { id: 35, ad: 'Asiye', soyad: 'Yılmaz', email: 'sezzer@hotmail.com' },
      { id: 36, ad: 'Zeynep', soyad: 'Soysal', email: 'fatihsoysal@outlook.com' },
      { id: 37, ad: 'Gökhan', soyad: 'Şahin', email: 'ahmetsahin@gmail.com' },
      { id: 38, ad: 'Ozge', soyad: 'Şahin', email: 'ahmetsahin@gmail.com' },
      { id: 39, ad: 'Sezer', soyad: 'Yılmaz', email: 'sezzer@hotmail.com' },
      { id: 40, ad: 'İbrahim', soyad: 'Soysal', email: 'fatihsoysal@outlook.com' },
      { id: 41, ad: 'Miray', soyad: 'Şahin', email: 'ahmetsahin@gmail.com' },
      { id: 42, ad: 'Can', soyad: 'Yılmaz', email: 'sezzer@hotmail.com' },
      { id: 43, ad: 'Egemen', soyad: 'Soysal', email: 'fatihsoysal@outlook.com' },
      { id: 44, ad: 'Ahmet', soyad: 'Şahin', email: 'ahmetsahin@gmail.com' },
      { id: 45, ad: 'Fatih', soyad: 'Şahin', email: 'ahmetsahin@gmail.com' },
      { id: 46, ad: 'Sezer', soyad: 'Yılmaz', email: 'sezzer@hotmail.com' },
      { id: 47, ad: 'Fatih', soyad: 'Soysal', email: 'fatihsoysal@outlook.com' },
      { id: 48, ad: 'Rose', soyad: 'Şahin', email: 'ahmetsahin@gmail.com' },
      { id: 49, ad: 'Silver', soyad: 'Yılmaz', email: 'sezzer@hotmail.com' },
      { id: 50, ad: 'Fatih', soyad: 'Soysal', email: 'fatihsoysal@outlook.com' }
      
    ];
   
     $scope.settings = {
           
      currentPage: 0,
      pageSize: 5,
      kisi : ''
   
     };
     
    
    $scope.getData = function () {
      return $filter('filter')($scope.kisiler, $scope.settings.kisi)
    }
    
    $scope.numberOfPages=function(){
        return Math.ceil($scope.getData().length/$scope.settings.pageSize);
    }

    $scope.$watch('settings.kisi', function(newValue,oldValue){                     
      if(oldValue!=newValue){
        $scope.settings.currentPage = 0;
      }
    },true);

      $ionicModal.fromTemplateUrl('templates/modal.html',{
        scope: $scope
      }).then(function(modal){
        $scope.kisiEkleModal = modal;
      });


      $ionicModal.fromTemplateUrl('templates/Duzenlemodal.html',{
        scope: $scope
      }).then(function(modal){
        $scope.kisiDuzenle = modal;
      });

      $scope.yeniKisiOlustur = function(u){
        $scope.kisiler.push({ ad: u.ad + '' + u.soyad });
        alert("Başarıyla eklendi");
        $scope.kisiEkleModal.hide();
      };

     $scope.Duzenle = function(kisi)
     {
          $scope.duzenlenecekKisi = kisi;
          $scope.kisiDuzenle.show();

          
     }
     
     $scope.kisiDuzenleme = function(kisi)
     {
             

              angular.forEach($scope.kisiler, function(kisim, key){
                 if(kisim.id == kisi.id){

                kisim.ad = kisi.ad;
                kisim.soyad = kisi.soyad;
                kisim.email = kisi.email;
              
                }
          

         });

         $scope.kisiDuzenle.hide();
         alert("Kişi başarıyla düzenlendi");
  
     }


    $scope.Sil=function(id)
    {  

        
        var json=JSON.parse(gelen);
        for (var i = 0; i < json.length; i++) {
        if(json[i].id == id)
        {
        json.splice(i,1);
        alert("Başarıyla silindi");
        }
     }
        $scope.kisiler=json;
    }

  

})
.filter('startFrom', function() {
    return function(input, start) {
        start = +start;
        return input.slice(start);
    }
});

