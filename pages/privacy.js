import { useRouter } from 'next/router';
import content from '../lib/content';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';

const copy = {
  tr: {
    eyebrow: 'Yasal',
    title: 'Gizlilik Politikası',
    updated: 'Son güncelleme: Temmuz 2026',
    sections: [
      {
        heading: '1. Kim Olduğumuz',
        body: 'YAP-BOS Retail ("biz", "bizim"), inovatif şirketleri kurumsal firmalarla buluşturan bir köprü kuruluşudur. Bu sayfa, yapbosretail.com üzerinden bizimle paylaştığınız bilgileri nasıl topladığımızı, kullandığımızı ve koruduğumuzu açıklar.',
      },
      {
        heading: '2. Topladığımız Bilgiler',
        body: 'Yalnızca iletişim formunu doldurduğunuzda, kendi rızanızla paylaştığınız bilgileri topluyoruz: ad soyad, şirket adı, e-posta adresi ve mesajınız. Şu anda sitede takip amaçlı çerez veya analitik araç kullanmıyoruz.',
      },
      {
        heading: '3. Bilgileri Nasıl Kullanıyoruz',
        body: 'Paylaştığınız bilgileri yalnızca talebinize yanıt vermek, sizinle iletişime geçmek ve olası bir iş birliğini değerlendirmek amacıyla kullanıyoruz. Bilgileriniz pazarlama listelerine eklenmez ya da üçüncü taraflara satılmaz.',
      },
      {
        heading: '4. Bilgi Paylaşımı',
        body: 'İletişim formu gönderimlerini işlemek için Resend (e-posta gönderim altyapısı) hizmetini kullanıyoruz. Bilgileriniz, hizmeti sağlamaları için gerekli ölçüde bu sağlayıcıyla paylaşılır; başka hiçbir üçüncü tarafla paylaşılmaz.',
      },
      {
        heading: '5. Veri Saklama',
        body: 'İletişim formu üzerinden gönderdiğiniz bilgiler, talebinizi yanıtlamamız için gereken süre boyunca e-posta kutumuzda saklanır. Silinmesini talep etmek için bizimle iletişime geçebilirsiniz.',
      },
      {
        heading: '6. Haklarınız',
        body: '6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında; bize ulaştırdığınız kişisel verilerinize erişme, düzeltilmesini veya silinmesini talep etme hakkına sahipsiniz. Bu haklarınızı kullanmak için aşağıdaki e-posta adresinden bize ulaşabilirsiniz.',
      },
      {
        heading: '7. İletişim',
        body: 'Bu politikayla ilgili sorularınız için: welcome@yapbosretail.com',
      },
    ],
  },
  en: {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    updated: 'Last updated: July 2026',
    sections: [
      {
        heading: '1. Who We Are',
        body: 'YAP-BOS Retail ("we", "us") is a bridge organisation connecting innovative companies with corporate firms. This page explains how we collect, use and protect the information you share with us through yapbosretail.com.',
      },
      {
        heading: '2. Information We Collect',
        body: 'We only collect what you voluntarily share when filling out our contact form: full name, company name, email address and your message. We do not currently use tracking cookies or analytics tools on this site.',
      },
      {
        heading: '3. How We Use Your Information',
        body: 'We use the information you share solely to respond to your request, get in touch with you, and evaluate a potential collaboration. Your information is never added to marketing lists or sold to third parties.',
      },
      {
        heading: '4. Sharing Your Information',
        body: 'We use Resend (an email delivery provider) to process contact form submissions. Your information is shared with this provider only to the extent necessary to deliver the service, and is not shared with any other third party.',
      },
      {
        heading: '5. Data Retention',
        body: 'Information submitted through the contact form is kept in our inbox for as long as needed to respond to your request. You may contact us at any time to request its deletion.',
      },
      {
        heading: '6. Your Rights',
        body: 'Under applicable data protection law (including Turkey\'s KVKK), you have the right to access, correct, or request deletion of the personal data you\'ve shared with us. Reach out using the email below to exercise these rights.',
      },
      {
        heading: '7. Contact',
        body: 'For questions about this policy: welcome@yapbosretail.com',
      },
    ],
  },
};

export default function Privacy() {
  const router = useRouter();
  const t = content[router.locale] || content.tr;
  const c = copy[router.locale] || copy.tr;

  return (
    <Layout t={t} title={`${c.title} — YAP-BOS Retail`}>
      <PageHero eyebrow={c.eyebrow} title={c.title} subtitle={c.updated} />
      <section className="px-6 py-24 lg:px-10">
        <div className="mx-auto flex max-w-3xl flex-col gap-10">
          {c.sections.map((s, i) => (
            <div key={i}>
              <h2 className="font-display text-lg font-medium">{s.heading}</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{s.body}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
