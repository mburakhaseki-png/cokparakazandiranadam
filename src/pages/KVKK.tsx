import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function KVKK() {
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
                        KVKK Aydınlatma Metni
                    </h1>

                    <div className="space-y-6 text-gray-300 leading-relaxed font-light">
                        <p>
                            ÇokParaKazandıranAdam Murat Tavşancı (“ÇPKA” veya “Şirket”) olarak kişisel verilerinizin güvenliği hususuna azami hassasiyet göstermekteyiz. Bu bilinçle, Şirket’in etkileşim içerisine olduğu gerçek kişilere ait kişisel verilerin 6698 sayılı Kişisel Verilerin Korunması Kanunu (“Kanun”)’na, Kanun’a bağlı yürürlüğe koyulan ve koyulacak ikincil düzenlemelere (yönetmelik, tebliğ vd.) ve bağlayıcı nitelikteki Kişisel Verileri Koruma Kurulu tarafından alınmış ve alınacak kararlara uygun olarak işlenerek muhafaza edilmesine büyük önem atfetmekteyiz. Bu sorumluluğumuzun tam idraki ile Kanun’da tanımlı şekli ile “Veri Sorumlusu” sıfatıyla, kişisel verilerinizi aşağıda izah edildiği surette ve mevzuat tarafından emredilen sınırlar çerçevesinde işlemekteyiz.
                        </p>

                        <h3 className="text-xl font-bold text-white mt-8 mb-4">Veri Sorumlusuna İlişkin Bilgiler</h3>
                        <p>
                            Kanun uyarınca İstanbul Kozyatağı Vergi Dairesine kayıtlı, MERSİS numaralı 14846380172 vergi kimlik numaralı ve “Atatürk mahallesi Ertuğrul Gazi Sk. Metropol İstanbul Sitesi C1 Blok Kat:25 Ofis:376 Ataşehir / İSTANBUL” adresinde mukim ÇPKA Veri Sorumlusudur.
                        </p>

                        <h3 className="text-xl font-bold text-white mt-8 mb-4">Kişisel Verilerin İşlenme Amaçları</h3>
                        <p>
                            Kişisel verileriniz Şirket tarafından; Şirket’in yürüttüğü ticari faaliyetlerin mevzuata ve Şirket politikalarına uygun olarak yerine getirilmesi için Şirket’in iş birimlerince gerekli çalışmaların yapılması ve bu doğrultuda faaliyetlerin yürütülmesi, Şirket’in kısa, orta ve uzun vadede ticari politikalarının tespit edilmesi, hizmet pazarlama ve satış süreçleri ile stratejik pazarlama faaliyetlerinin icrası, planlanması ve uygulanması, Şirket’in insan kaynakları faaliyetlerinin tasarlanması ve yürütülmesi, kampanya ve tanıtımların yapılabilmesi, Şirket’in ilgili mevzuattan doğan yükümlülüklerin yerine getirilmesi, müşteri ilişkileri ve kurumsal iletişim süreçlerinin yönetilmesi ve Şirket’in iş ilişkisi içerisinde olduğu gerçek ve tüzel kişilerin ticari ve hukuki emniyetinin sağlanması 6563 sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun, 6502 sayılı Tüketicinin Korunması Hakkında Kanun ile bu düzenlemelere dayanak yapılarak hazırlanan 26.08.2015 tarihli 29457 sayılı Resmi Gazete’de yayınlanan Elektronik Ticarette Hizmet Sağlayıcı ve Aracı Hizmet Sağlayıcılar Hakkında Yönetmelik, 27.11.2014 tarihli ve 29188 sayılı Resmi Gazete’de yayınlanan Mesafeli Sözleşmeler Yönetmeliği ve diğer ilgili mevzuat kapsamında işlem sahibinin bilgilerini tespit için kimlik, adres ve diğer gerekli bilgileri kaydetmek, Bankacılık ve Elektronik Ödeme alanında zorunlu olan ödeme sistemleri, elektronik sözleşme veya kağıt ortamında işleme dayanak olacak tüm kayıt ve belgeleri düzenlemek; mevzuat gereği ve diğer otoritelerce öngörülen bilgi saklama, raporlama, bilgilendirme yükümlülüklerine uymak, Kamu güvenliğine ilişkin hususlarda ve hukuki uyuşmazlıklarda, talep halinde ve mevzuat gereği savcılıklara, mahkemelere ve ilgili kamu görevlilerine bilgi verebilmek amaçlarıyla Kanun’da belirtilen sınırlar çerçevesinde hukuka, dürüstlük kurallarına uygun ve işbu amaçlarla her daim bağlantılı, sınırlı ve ölçülü şekilde işlenmektedir.
                        </p>

                        <h3 className="text-xl font-bold text-white mt-8 mb-4">Kişisel Verilerin Aktarılması</h3>
                        <p>
                            Kişisel verileriniz yukarıda belirtilen amaçların gerçekleştirilmesi ve Şirket ticari operasyonları ile iş süreçlerinin kesintisiz yürütülebilmesi amacıyla, Kanun’un 8. maddesinde belirtilen şartlara uygun olarak başta kanunen yetkili kamu kuruluşlarına, adli ve idari makamlara, sair mevzuatta izin verilen özel hukuk tüzel ve gerçek kişilerine, Şirket’i denetime yetkili kurum ve kuruluşlara, ödemelerin ve mali yükümlülüklerin yerine getirilmesi adına anlaşmalı olunan ödeme kuruluşlarına, Şirket’in faaliyetlerinin yürütülmesi ve geliştirilmesi için hizmet alınan veya işbirliği içerisinde olunan iş ortaklarına ve sadece gerektiğinde Şirket’in tedarikçilerine Kanun’da belirtilen gerekli ve yeterli veri güvenliği tedbirleri alınmak suretiyle aktarılmaktadır. Kişisel verileriniz Kanun’un 9.maddesinde belirtilen şartlara uygun olarak yurtdışına da aktarılabilecektir. Bu takdirde kişisel verilerinizin işlendiği süreç ve faaliyet özelinde tebliğ edilecek aydınlatma bildirimi ve gerektiği hallerde yurtdışı aktarımına ilişkin açık rızanız temin edilecektir.
                        </p>

                        <h3 className="text-xl font-bold text-white mt-8 mb-4">Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi</h3>
                        <p>
                            Kişisel verileriniz, Şirket’in yetkili birim ve çalışanları tarafından otomatik ve otomatik olmayan yöntemlerle, sözlü, yazılı veya elektronik ortamda toplanmaktadır. Bu kapsamda kimlik, iletişim, lokasyon, özlük, hukuki işlem, müşteri işlem, fiziksel mekân güvenliği, işlem güvenliği, risk yönetimi, finans, mesleki deneyim, pazarlama, görsel ve işitsel kayıtlar kategorisinde yer alan kişisel veriler; Kanun’un 5/2/a-c-ç-d-e-f bentlerinde gösterilen kanunlarda açıkça öngörülmesi, bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olmasından dolayı sözleşmenin taraflarına ait kişisel verilerin işlenmesinin zorunlu olması, veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için veri işlemenin zorunlu olması, ilgili kişinin kendisi tarafından alenileştirilmiş olması, bir hakkın tesisi, kullanılması veya korunması için veri işlemenin zorunlu olması ve ilgili kişinin temel hak ve özgürlüklerinize zarar vermemek kaydıyla Şirket’in meşru menfaatleri için veri işlemenin zorunlu olması hukuki sebeplerine dayalı olarak işlenmektedir.
                        </p>
                        <p>
                            Ayrıca ürün ve hizmet pazarlama ile stratejik pazarlama faaliyetleri kapsamında reklam, kampanya ve promosyon amaçlı bilgilendirici ticari elektronik ileti gönderimi faaliyetleri kapsamında işlenen kişisel veriler Kanun’un 5/1 fıkrasında yer alan açık rızanızın bulunması hukuki sebebine dayanılarak açık rızanızın ayrıca temin edilmesine istinaden işlenebilmektedir.
                        </p>

                        <h3 className="text-xl font-bold text-white mt-8 mb-4">Veri Sahiplerinin Kanun Kapsamındaki Hakları</h3>
                        <p>Dilediğiniz zaman ÇPKA’a başvurarak;</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme,</li>
                            <li>Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,</li>
                            <li>Kişisel verilerinizin işlenme amacını ve amaca uygun kullanılıp kullanılmadığını öğrenme,</li>
                            <li>Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme,</li>
                            <li>Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</li>
                            <li>Kanun’un 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme,</li>
                            <li>Kanun’un 11. maddesinin (d) ve (e) bentleri uyarınca yapılan işlemlerin, kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme,</li>
                            <li>İşlenen verilerinizin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle kendiniz aleyhine bir sonucun ortaya çıkmasına itiraz etme,</li>
                            <li>Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız hâlinde zararın giderilmesini talep etme,</li>
                        </ul>
                        <p className="mt-4">
                            taleplerinizi, tarafımızdan temin edebileceğiniz başvuru formunu doldurarak ıslak imzalı şekilde “Atatürk mahallesi Ertuğrul Gazi Sk. Metropol İstanbul Sitesi C1 Blok Kat:25 Ofis:376 Ataşehir / İSTANBUL” adresine noter kanalıyla, iadeli taahhütlü posta yoluyla veya şahsi başvurunuzla ya da elektronik ortamda doldurduğunuz başvuru formunu mobil imzanızla, güvenli elektronik imzanızla imzaladıktan sonra KEP adresinizi veya Şirket’in veri kayıt sisteminde halihazırda kayıtlı olan e-posta adresinizi kullanarak info@cokparakazandiranadam.com adresine iletebilirsiniz. ÇPKA bu kapsamdaki taleplere yazılı olarak cevap verilecekse, on sayfaya kadar ücret almadan; on sayfanın üzerindeki her sayfa için 1 Türk lirası işlem ücreti alarak yanıtlandıracaktır. Başvuruya cevabın CD, flash bellek gibi bir kayıt ortamında verilmesi halinde Şirket tarafından talep edilebilecek ücret kayıt ortamının maliyetini geçemeyecektir.
                        </p>
                        <p>
                            Kişisel veri sahibi olarak sahip olduğunuz ve yukarıda belirtilen haklarınızı kullanmak için yapacağınız ve kullanmayı talep ettiğiniz hakka ilişkin açıklamalarınızı içeren başvuruda; talep ettiğiniz hususun açık ve anlaşılır olması, talep ettiğiniz konunun şahsınız ile ilgili olması veya başkası adına hareket ediyor iseniz bu konuda noter tarafından tasdiklenmiş özel vekâletnamenizi ibraz etmeniz gerekecektir. Başvurularınızda, ad-soyad, imza, T.C. kimlik numarası, ikamet veya işyeri adresi, e-posta adresi, telefon ve faks numarası, talep konusu unsurlarının bulunması “Veri Sorumlusuna Başvuru Usul ve Esasları Hakkında Tebliğ” uyarınca zorunludur. Söz konusu unsurları barındırmayan başvurular ÇPKA tarafından reddedilecektir.
                        </p>
                        <p>
                            ÇPKA’in işbu aydınlatma metninde Kanun’dan, ikincil düzenlemelerden ve Kurul kararlarından doğan sebeplerle değişiklik yapma hakkı her zaman saklıdır. Aydınlatma metninde yapılacak değişiklikler ve güncel metin tarafınıza tebliğ edildiği tarih itibariyle derhal geçerlilik kazanacaktır.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
