# Ionic Nedir ve Ne Amaçla Kullanılır?

-   Ionic, web teknolojileri kullanarak (html,css ve javascript) ortaya bir mobil(hybrit) uygulama çıkartır.
    
-   AngularJS altyapısı üzerine kurulu olduğundan AngularJS’in barındırdığı bütün yapıyı kullanıma olanak sağlamakta ve büyük bir kolay getirmektedir.
    
-   ngCordova modülü ile Cordova'yı kullanarak gps, kamera gibi cihazın tüm özellikerini kullanabilmeyi sağlıyor.
    
-   Performans takıntılı. Hıza yüksek ölçüde önem veriyor.
    
-   Android, IOS, Windows Phone vb. gibi birçok mobil işletim sistemi desteği var.



# Ionic Framework Kullanımı

İonicframework herşeyiyle bize yardımcı oluyor,

– İonic’de kurulum yaparken, dosya kurulumunda ionic yine bizi düşünüp hazır template’ler sunmuştur. Sidemenu ve Tab menülerdir.

– Css tasarımlar için, [http://ionicframework.com/docs/components/](http://ionicframework.com/docs/components/) ‘linke girerek hazır şablonlar bulunmaktadır. Tasarım için daha hızlı ve daha kolay tasarımlar ortaya çıkarabiliriz.

– Javascript olayıları için, [http://ionicframework.com/docs/api/](http://ionicframework.com/docs/api/) ‘linke girerek uygulamamıza dinamiklik getirebiliriz. Dinamik olaylar için ionic’in sundugu kolaylıkları kullanabiliriz.

– ngCordova modülü ile Cordova yı kullanarak gps,kamera gibi cihazın tüm özellikerini kullanabilmeyi sağlıyor. [http://ngcordova.com/docs/plugins/](http://ngcordova.com/docs/plugins/)

# Kurulum

-   Öncelikle nodejs kurulması gerekmekte bunun için  [NodeJS indir.](https://nodejs.org/en/)
-   Terminal üzerinde
-   `$ npm install -g ionic`
-   `$ ionic start myproject --type ionic1`  [Detay ve davamı için](https://ccoenraets.github.io/ionic-tutorial/start-node-server.html)  [Türkçe anlatımı ile güzel bir kaynak](http://www.avarekodcu.com/konu/9/ionic-2-kurulumu-kullanimi)



# Dosya Yapısı



| Dosya Adı    	| Dosya Açıklama                                                                                                                                                                                                                                                                                                                                                       	|
|--------------	|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| node_modules 	| nodejs paketlerimizin bulunduğu dosya dizinidir.                                                                                                                                                                                                                                                                                                                    	|
| platforms    	| android/ios/windows platformlarının kendilerine özel dosyalarının yer aldığı dosya dizinidir.                                                                                                                                                                                                                                                                       	|
| plugins      	| 3. sınıf veyahut kendi yazmış olduğumuz eklentilerin bulunduğu dosya dizini.                                                                                                                                                                                                                                                                                        	|
| resource     	| android/ios/windows platformlarına özel kaynakların yer aldığı dosya dizisidir.                                                                                                                                                                                                                                                                                     	|
| scss         	| Scss , kendi sözdizimi ile yazılmış kodları CSS’e çevirir. Sass,tarafından oluşturulan bu CSS dosyası projeye dahil edilerek kullanılır.,Sass compile edilen diller gibi ekstra bir derleme komutu beklemez,,çalıştığınız proje dizinini takip ederek, kaydedilen her “*.sass” ve,“*.scss” dosyasını otomatik olarak saniyeler içinde derler ve kullanıma,hazırlar. 	|
| www          	| Hemen hemen src klasöründe işin büyük kısmını alacak, çünkü uygulamanın,mantığı buraya kurulu. Ancak uygulama basit olarak src/index.html den,başlar. Derleme sırasında www klasöründe kopyalanır.                                                                                                                                                                  	|
| .bower       	| Bower Twitter tarafından geliştirilen, Front-end dünyasına hitap eden bir paket yöneticisidir. Bu yapı ile ilgili configrasyonlar burada tutulur.                                                                                                                                                                                                                   	|
| config.xml   	| Proje ile ilgili config özelliklerinin yer aldığı dosyadır.                                                                                                                                                                                                                                                                                                                    	|
| gulpfile.js  	| Gulp configlerinin yer aldığı javascript dosyasıdır.                                                                                                                                                                                                                                                                                                                	|
| hooks        	| Cordova Hooks,,uygulama ve eklenti geliştiricileri tarafından,eklenebilecek özel komut,dosyalarını veya cordova komutlarını,özelleştirmek için kendi oluşturma,sisteminiz tarafından bile temsil,edilmektedir.                                                                                                                                                      	|


Bir klasör yapısı vardır. Bizi asıl ilgilendiren dosya ‘www’ klasörüdür.(Asıl değişikliklerimizi yapacağımız yer.)

![
](https://lh3.googleusercontent.com/2Qx9ItetEL2_SoQ4p432yZsL5JLFXMfSRRPE1ZM0OKNz15KGFYU6fMwojHQHPKlyjj7gNd6momz- "folder")

‘www’ klasörün içinde de belli bir yapı vardır. Üzerinde değişiklik yapacağımız Css, JavaScript ve Html sayfalarımız vardır.

![
](https://lh3.googleusercontent.com/gVga19mIjI7zEocBPJaMtbrUbbY3PV6s8ZPEz9nT98xXbleZ9T5T8LyNsJDvJzyCqx_i7WF9E78l "www")


Ionic Framework, AngularJS üzerinden çalışır. Yani tüm kontrolleri AngularJS yapar. Index.html sayfasında AngularJS aşağıya doğru okurken, ilk olarak <body> tagları içinde bulunan ng-app’e bakar. Artık bu proje de AngularJS’ in çalıştığını görür. Gördüğü andan itibaren AngularJS’ in çalıştığını fark eder.

![enter image description here](https://lh3.googleusercontent.com/VXueHmTKgl3Slbd87pc_Xd0JjwZt8nbUjgohqn143zxCrKbk5pdk4koNLNPXTjbbPyxxxVWlZR6x "starter")


Başka bir ifadeyle de anlatılmak istenirse;

Uygulama ilk çalıştığında, yönetici JavaScript içindeki bilgiye göre bir başka bir html sayfasını yükler. App.js dosyası içinde belirtilen ilgili sayfaya gitme eylemini gerçekleştirir. Bir ana sayfamız var. Diğer sayfalar bu yerleşmiş sayfanın içerisinde gösteriliyor.

Bizim yapımızdaki <ion-nav-view> tagı yerleşmiş sayfanın içinde diğer sayfaların gösterileceği alanı temsil ediyor. Bunu kontrol eden dosya ise js içindeki app.js‘ dir.

App.js sayfasına gelindiğinde (‘starter’ ng-app’in içinde bulunan ‘starter’.) run özelliğinde uygulamanın burada çalıştığı görülür. Örneğin açılışta internet kontrol edilmek istenirse, kodlar run özelliği içerisine yazılır.

![enter image description here](https://lh3.googleusercontent.com/XHoofnKV7ChQzFgdhpvpSI8lSovQnqP6sK2qqfYYKShN4bEd0ScbdtBODjCtSbHZkNOLT5Unp1cx "app")


.config kısımda state’ler tanımlanır. Bir link geldiğinde veya bir yönlendirme talebinde, bu talebin nasıl işleyeceğini, talep karşısında hangi işlevlerini yerine getireceğini, o talep ile beraber hangi sayfanın nerede gösterileceğini söyleyen temel yerdir. Burada bir tanımlama yapmazsak yönlendirme sonucunda yönlendirmesi istediğimiz yere gidişi ayarlamayız.

$urlRouterProvider ile uygulama çalıştığında ilk hangi ekranın açılacağını ayarlayabiliriz.

![enter image description here](https://lh3.googleusercontent.com/LqtSmwKvBNF0SDc_sp2g8oKNIYJRJfaMz9tUEj2moDUTH4b-wQH_k6MjXFFsN8oF5XcQa0ITPeK- "config")


Templates klasöründe ana sayfanın içerisinde gösterilecek diğer sayfalar bu klasör içindedir.


![enter image description here](https://lh3.googleusercontent.com/J8rZ3I4DiGOUQvVIdq1xBvQfr7E8h9J_p9kLL5hiE7MLoPFABC9_B-4MSCZtytJW2Th1nJ28L397 "templates")

# Plugins

Uygulamalarımıza kolayca ekleyebileceğimiz 70'den fazla Cordova eklentisi vardır. Kullanmak istediğimiz eklentiyi seçtiğimizde, hangi eklentiyi yüklememiz gerektiğine ve Angular kodunda nasıl kullanılacağına dair her türlü bilgiye sahip oluruz.

![
](https://lh3.googleusercontent.com/qBkW-f-7ZgQlod29f-CHQQezHxIKs9BhNZC5wdGGBLZrcJTJgRWzEw4MiwHW4lmjCFlKntU9TKHh "1.png")



Örneğin kamerayı kullanma, bulunulan geo location’a erişim, acceleration denilen telefonun 3 boyutta hareket ettirilmesini algılama gibi birçok özelliğe bu Cordova pluginleri sayesinde, sorunsuzca erişilebiliriz.

Bir plugin projeye dahil edildiği zaman, aşağıda görüldüğü gibi plugins klasörünün altına kaydedilir.

![
](https://lh3.googleusercontent.com/5mt3-dX6wUC35OUUX2fdDHYF-xISZWvjaNbNsI9Sag5Gc-77aWvlSWlK-9bEsjBC9fxFhH_luHLX "plugin")
## [Plugin Kurulumu](https://ionicframework.com/docs/cli/cordova/plugin/)


##  Dökümantasyon 
[Angular 1 dökümanyasyon](https://angularjs.org/)
[ionic-v1 Dökümantasyonu](https://ionicframework.com/docs/v1/)