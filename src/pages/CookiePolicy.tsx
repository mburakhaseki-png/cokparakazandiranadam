import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function CookiePolicy() {
    return (
        <div className="min-h-screen bg-[#050505] text-white pt-32 pb-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors mb-8 group">
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Ana Sayfaya Dön
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                        Çerez (Cookie) Politikası
                    </h1>

                    <div className="space-y-6 text-gray-300 leading-relaxed font-light">
                        <p>
                            ÇokParaKazandıranAdam Murat Tavşancı (“ÇPKA” veya “Şirket”) olarak, siz www.cokparakazandiranadam.com.tr (“Platform”) ziyaretçilerimize ait kişisel verilerin 6698 sayılı Kişisel Verilerin Korunması Kanunu ve ikincil düzenlemelerine (“Kişisel verilerin korunması mevzuatı”) uygun olarak işlenmesi ve korunması için azami hassasiyeti göstermekteyiz. Şirketimizin Kişisel Verilerin Korunması mevzuatından doğan aydınlatma yükümlülüğü kapsamında sizleri, işbu “İnternet Sitesi Çerez Kullanımı Hakkında Bilgilendirme Metni” ile internet sitemizin operasyonu kapsamında kullanılan çerezler ve bu vasıtayla işlenen kişisel verileriniz hakkında bilgilendirmek isteriz.
                        </p>

                        <h3 className="text-xl font-bold text-white mt-8 mb-4">Hangi Çerez Türlerini Kullanmaktayız?</h3>
                        <p>
                            Çerezler (cookies) bir internet sitesi tarafından cihazınızda oluşturulan ve isim-değer formatında veri barındıran küçük metin dosyalarıdır. Dolayısıyla, Sitemizi ziyaret etmenizle kullandığımız çerezler cihazınızda site ziyaretinize ilişkin bilgi saklanmasını ve bu bilgilerin sonraki ziyaretleriniz sırasında kullanılmasını mümkün kılmaktadır.
                        </p>
                        <p>
                            Sitemiz tarafından oluşturulan ve sadece Sitemiz tarafından okunabilen çerezler birincil çerezlerdir. Sitemizde sunulan içerik, erişim adresindeki alan adı dışında başka alan adları üzerinden de sağlanmaktadır. Bu gibi durumda her bir alan adı kendine münhasır üçüncü taraf çerezler yaratmaktadır.
                        </p>
                        <p>Sitemizde kullandığımız çerez türleri ile bu çerezleri kullanım amaçlarımız aşağıdaki gibidir:</p>

                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Oturum Çerezleri:</strong> İnternet sitesini kullanımınız sırasında geçerli olan çerezler olup web tarayıcı kapatılıncaya kadar geçerliliklerini korurlar.</li>
                            <li><strong>Kalıcı Çerezler:</strong> Tarayıcınızda saklanan ve tarafınızdan silininceye dek veya son kullanım tarihine kadar geçerliliğini koruyan çerezlerdir. Bu çerezler tarafından toplanan bilgiler pazarlama amaçlı kullanılamaz. Bu tür çerezlerin kullanımına izin verilmezse Platform’un çeşitli bölümleri kullanılamayabilecektir.</li>
                            <li><strong>Zorunlu Çerezler:</strong> Internet sitesinin düzgün bir şekilde çalışabilmesi, sitenin özelliklerinden ve sunulan hizmetlerden yararlanabilmeniz için kullanımı mecburi olan çerezlerdir. Bu çerezler tarafından toplanan bilgiler pazarlama amaçlı kullanılamaz. Bu tür çerezlerin kullanımına izin verilmezse Platform’un çeşitli bölümleri kullanılamayabilecektir.</li>
                            <li><strong>İşlevsel ve Analitik Çerezler:</strong> Tercihlerinizin hatırlanması, internet sitesinin etkin şekilde kullanılması, sitenin isteklerinize cevap verecek şekilde optimize edilmesi gibi amaçlarla kullanılan ve siteyi nasıl kullandığınız hakkında verileri içeren çerezlerdir. Nitelikleri gereği bu türdeki çerezler kişisel verilerinizi içerebilir. Örneğin sitenin görüntülenme dili tercihinizi kaydeden çerezler birer işlevsel çerezdir.</li>
                            <li><strong>Performans Çerezleri:</strong> Platform’un geliştirmesine yardımcı olan isimsiz çerezlerdir. Bu tür çerezler, ziyaretçilerin Platform’u nasıl kullandıkları hakkında bilgiler toplayarak, en çok ziyaret edilen sayfalar veya alınan hataların tespitinde kullanılır.</li>
                            <li><strong>Takip Çerezleri:</strong> Platform’umuzu ve üçüncü taraflara ait alan adlarını ziyaretiniz sırasında oluşturulan birincil ve üçüncü taraf çerezlerdir. Bu çerezler oluşturuldukları alan adlarındaki tıklama ve ziyaret geçmişinizin takibini ve farklı alan adları arasında bu kayıtların eşlenmesini mümkün kılmaktadır. Bu tür çerezler kullanıcıların tanınması ve profillenmesi, reklam ve pazarlama faaliyetlerinin hedeflenmesi ve içeriğin özelleştirilmesi amacı ile kullanılmaktadır. Bu çerezler sizin kimliğinizi belirlemek veya şahsınız özelinde karar almak için kullanılmayacaktır.</li>
                            <li><strong>Hedef veya Reklam Çerezleri:</strong> Bu tür çerezler, GrowX bilgisi doğrultusunda genellikle Platform reklam ağları tarafından yerleştirilir. Söz konusu çerezlerin kullanım amaçları; ilgili ve kişiselleştirilmiş reklamları göstermek, gösterilen reklam sayısını sınırlamak, reklam kampanyasının etkinliğini ölçmek ve ziyaret tercihlerinizi hatırlamaktan ibarettir.</li>
                        </ul>

                        <p className="mt-4">
                            Sitemizde kullandığımız üçüncü taraf çerezler ile sizlere daha verimli ve işlevsel bir internet deneyimi sunmayı amaçlamaktayız. Bu üçüncü kişi hizmet sağlayıcılar ile Şirketimiz arasında kişisel verilerin korunması mevzuatı uyarınca Gizlilik Sözleşmesi akdedilmiş olup bu kişiler tarafından Şirketimiz adına elde edilen kişisel verilerinizin güvenliği garanti altına alınmıştır.
                        </p>

                        <h3 className="text-xl font-bold text-white mt-8 mb-4">Çerezlerin İşlenme Amaçları ve Hukuki Sebepleri</h3>
                        <p>
                            Çerezler; Platform’un çalışması için gerekli temel fonksiyonları gerçekleştirmek, Platform’u analiz etmek ve Platform’un performansını arttırmak, Platform’un işlevselliğini arttırmak ve kullanım kolaylığı sağlamak ile kişiselleştirme, hedefleme ve reklamcılık faaliyeti gerçekleştirmek amaçlarıyla kullanılmaktadır.
                        </p>
                        <p>
                            Teknik çerezler, Platform’un size çalışır biçimde sunulabilmesi adına 6698 sayılı Kişisel Verilerin Korunması Kanunu’nun (“Kanun”) m.5/2/c bendinde belirtilen “bir sözleşmenin kurulması veya ifası ile doğrudan doğruya ilgili olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin işlenmesinin gerekli olması” hukuki sebeplerine dayalı olarak işlenmekte iken diğer çerezler, KVKK’nın m.5/2/f bendinde belirtilen “ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için veri işlemenin zorunlu olması” ve işbu Politika kapsamında nasıl yönetileceği aktarılan çerez tercihlerinizdeki açık rıza gerektiren çerez tipleri m.5/1 fıkrasında yer alan açık rıza onaylarınız hukuki sebeplerine dayalı olarak işlenmektedir.
                        </p>

                        <h3 className="text-xl font-bold text-white mt-8 mb-4">Çerezlerin Saklanması ve Erişilmesi</h3>
                        <p>
                            Sitemiz tarafından oluşturulan çerezler Sitemize erişim için kullandığınız internet sitesi tarayıcınız tarafından bilgisayarınızda saklanmaktadır. Bu çerezlerin içerdiği bilgilere sadece çerezi oluşturan alan adı www.cokparakazandiranadam.com.tr altında sunulan Platform tarafından ve aynı tarayıcıyı kullandığınız takdirde uzaktan erişim mümkündür.
                        </p>

                        <h3 className="text-xl font-bold text-white mt-8 mb-4">Çerez Yönetimi ve Kullanımı</h3>
                        <p>
                            Internet tarayıcılarınız genellikle ziyaret ettiğiniz sitelerde kullanılan çerezleri otomatik olarak kabul etmektedir. Internet Sitemizi kullanabilmek için çerez kullanımı zorunlu değildir, fakat tarayıcınızı tüm çerezleri engelleyecek şekilde ayarlamanız halinde kullanıcı deneyiminizin kalitesi düşebilir ve Sitemize erişim sağlamanızı ya da Sitemizin çeşitli işlevlerinden yararlanmanızı engelleyebilir.
                        </p>
                        <p>
                            Tarayıcınızı; çerezleri tüm siteler veya belirli siteler için engelleyecek, çerez oluşturulduğunda uyarı verecek, üçüncü taraf çerezleri engelleyecek veya tüm çerezleri oturum çerezi gibi sayacak şekilde yapılandırabilirsiniz. Diğer yandan, tarayıcınız üzerinden cihazınızda kaydedilen çerezleri silebilir veya bu çerezlerin listesini ve değerlerini görebilir ve takip edebilirsiniz.
                        </p>

                        <h3 className="text-xl font-bold text-white mt-8 mb-4">Kişisel Verilerin Güvenliği</h3>
                        <p>
                            Çerezler işbu Çerez Bilgilendirme Metni’nde belirtilen amaçlar dışında kullanılmamakta olup tüm ilgili işlemler kişisel verilerin korunması mevzuatına uygun olarak yürütülmektedir. Çerezler vasıtasıyla elde edilen kişisel verileriniz ÇPKA tarafından kişisel verilerin korunması mevzuatına uygun olarak işlenmekte, saklanmakta ve güvenliği sağlanmaktadır.
                        </p>

                        <h3 className="text-xl font-bold text-white mt-8 mb-4">Bilgi Edinme Hakkınız</h3>
                        <p>
                            Kanun’un “ilgili kişinin haklarını düzenleyen ” 11. maddesi kapsamındaki taleplerinizi, “Veri Sorumlusu Başvurusu Usul ve Esasları Hakkında Tebliğ” e göre ÇPKA’a iletebilirsiniz.
                        </p>
                        <p>
                            İşbu Çerez Bilgilendirme Metni, değişen süreçlerimiz dolayısıyla kişisel verilerin korunması mevzuatına uyum sağlamak amacıyla güncellenebilecektir.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
