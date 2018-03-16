# İonic1-Sample
## İonic nedir ve ne amaçla kullanılır?
* Ionic, web teknolojileri kullanarak (html,css ve javascript) ortaya bir mobil(hybrit) uygulama çıkartır.

* AngularJS altyapısı üzerine kurulu olduğundan AngularJS’in barındırdığı bütün yapıyı kullanıma olanak sağlamakta ve büyük bir kolay getirmektedir.

* ngCordova mobülü ile Cordova yı kullanarak gps,kamera gibi cihazın tüm özellikerini kullanabilmeyi sağlıyor.

* Performans takıntılı. Hıza yüksek ölçüde önem veriyor.

* Android, IOS, Windows Phone vb. gibi birçok mobil işletim sistemi desteği var.

## Kurulum 
*	Öncelikle nodejs kurulması gerekmekte bunun için 
[NodeJS indir.](https://nodejs.org/en/)
*	Terminal üzerinde 
*	```$ npm install -g ionic ```
*	```$ ionic start myproject --type ionic1```
[Detay ve davamı için](https://ccoenraets.github.io/ionic-tutorial/start-node-server.html)
[Türkçe anlatımı ile güzel bir kaynak](http://www.avarekodcu.com/konu/9/ionic-2-kurulumu-kullanimi)

## Dosya Yapısı
| Dosya Adı    	| Dosya Açıklama                                                                                                                                                                                                                                                                                                                                                       	|
|--------------	|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| node_modules 	| nodejs paketlerimizin bulunduğu dosya dizinidir.                                                                                                                                                                                                                                                                                                                    	|
| platforms    	| android/ios/windows platformlarının kendilerine özel dosyalarının yer aldığı dosya dizinidir.                                                                                                                                                                                                                                                                       	|
| plugins      	| 3. sınıf veyahut kendi yazmış olduğumuz eklentilerin bulunduğu dosya dizini.                                                                                                                                                                                                                                                                                        	|
| resource     	| android/ios/windows platformlarına özel kaynakların yer aldığı dosya dizisidir.                                                                                                                                                                                                                                                                                     	|
| scss         	| Scss , kendi sözdizimi ile yazılmış kodları CSS’e çevirir. Sass,tarafından oluşturulan bu CSS dosyası projeye dahil edilerek kullanılır.,Sass compile edilen diller gibi ekstra bir derleme komutu beklemez,,çalıştığınız proje dizinini takip ederek, kaydedilen her “*.sass” ve,“*.scss” dosyasını otomatik olarak saniyeler içinde derler ve kullanıma,hazırlar. 	|
| www          	| Hemen hemen src klasöründe işin büyük kısmını alacak, çünkü uygulamanın,mantığı buraya kurulu. Ancak uygulama basit olarak src/index.html den,başlar. Derleme sırasında www klasöründe kopyalanır.                                                                                                                                                                  	|
| .bower       	| Bower Twitter tarafından geliştirilen, Front-end dünyasına hitap eden bir paket yöneticisidir. Bu yapı ile ilgili configrasyonlar burada tutulur.                                                                                                                                                                                                                   	|
| config.xml   	| Proje ile ilgili congilerin yer aldığı dosyadır.                                                                                                                                                                                                                                                                                                                    	|
| gulpfile.js  	| Gulp configlerinin yer aldığı javascript dosyasıdır.                                                                                                                                                                                                                                                                                                                	|
| hooks        	| Cordova Hooks,,uygulama ve eklenti geliştiricileri tarafından,eklenebilecek özel komut,dosyalarını veya cordova komutlarını,özelleştirmek için kendi oluşturma,sisteminiz tarafından bile temsil,edilmektedir.                                                                                                                                                      	|

## [Plugin Kurulumu](https://ionicframework.com/docs/cli/cordova/plugin/)


##  Dökümantasyon 
[Angular 1 dökümanyasyon](https://angularjs.org/)
[ionic-v1 Dökümantasyonu](https://ionicframework.com/docs/v1/)