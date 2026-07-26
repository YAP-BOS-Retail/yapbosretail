import { useRouter } from 'next/router';
import content from '../lib/content';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';

const copy = {
  tr: {
    eyebrow: 'Yasal',
    title: 'Kullanım Şartları',
    updated: 'Son güncelleme: Temmuz 2026',
    sections: [
      {
        heading: '1. Kabul',
        body: 'yapbosretail.com sitesini kullanarak bu kullanım şartlarını kabul etmiş sayılırsınız. Şartları kabul etmiyorsanız, lütfen siteyi kullanmayın.',
      },
      {
        heading: '2. Sitenin Amacı',
        body: 'Bu site, YAP-BOS Retail\'in sunduğu hizmetler ve düzenlediği etkinlikler hakkında bilgi vermek, kurumsal iş birliği ve danışmanlık taleplerini almak amacıyla hazırlanmıştır.',
      },
      {
        heading: '3. Fikri Mülkiyet',
        body: 'Sitedeki tüm metin, logo, tasarım ve içerikler YAP-BOS Retail\'e aittir ve izinsiz kopyalanamaz, çoğaltılamaz ya da ticari amaçla kullanılamaz.',
      },
      {
        heading: '4. Sorumluluk Sınırlaması',
        body: 'Sitedeki bilgiler "olduğu gibi" sunulmaktadır. Etkinlik tarihleri, formatları ve içerikleri önceden haber verilmeksizin değiştirilebilir. YAP-BOS Retail, sitedeki bilgilerin kullanımından doğabilecek zararlardan sorumlu tutulamaz.',
      },
      {
        heading: '5. Değişiklikler',
        body: 'Bu kullanım şartlarını dilediğimiz zaman güncelleyebiliriz. Güncel sürüm her zaman bu sayfada yayınlanır.',
      },
      {
        heading: '6. Geçerli Hukuk',
        body: 'Bu şartlar Türkiye Cumhuriyeti kanunlarına tabidir. Doğabilecek uyuşmazlıklarda Türkiye mahkemeleri ve icra daireleri yetkilidir.',
      },
      {
        heading: '7. İletişim',
        body: 'Sorularınız için: welcome@yapbosretail.com',
      },
    ],
  },
  en: {
    eyebrow: 'Legal',
    title: 'Terms and Conditions',
    updated: 'Last updated: July 2026',
    sections: [
      {
        heading: '1. Acceptance',
        body: 'By using yapbosretail.com, you agree to these terms and conditions. If you do not agree, please do not use the site.',
      },
      {
        heading: '2. Purpose of the Site',
        body: 'This site provides information about YAP-BOS Retail\'s services and events, and collects corporate partnership and advisory requests.',
      },
      {
        heading: '3. Intellectual Property',
        body: 'All text, logos, designs and content on this site belong to YAP-BOS Retail and may not be copied, reproduced or used commercially without permission.',
      },
      {
        heading: '4. Limitation of Liability',
        body: 'Information on this site is provided "as is". Event dates, formats and content may change without prior notice. YAP-BOS Retail is not liable for any damages arising from the use of information on this site.',
      },
      {
        heading: '5. Changes',
        body: 'We may update these terms at any time. The current version is always published on this page.',
      },
      {
        heading: '6. Governing Law',
        body: 'These terms are governed by the laws of the Republic of Turkey. Any disputes fall under the jurisdiction of Turkish courts.',
      },
      {
        heading: '7. Contact',
        body: 'For questions: welcome@yapbosretail.com',
      },
    ],
  },
};

export default function Terms() {
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
