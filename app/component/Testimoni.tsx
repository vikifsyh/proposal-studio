import React from "react";
import Icon from "./atom/icon/Icon";

const testi = [
  {
    id: 1,
    review:
      "Kakaknya baik sekali, sabar menghadapi customer. Untuk pengerjaan cepat dan halus. Gak bikin emosi, soalnya pernah nemuin yg bikin emosi ☹️ intinya cepat dan tanggap ❤️",
    name: "Kak Nunung",
    title: "Finalis Miss Hijab Indonesia 2022",
  },
  {
    id: 2,
    review:
      "Ini udah kali ketiganya pakai Proposal Studio, responnya cepat, dibantu revisi sampai tuntas, dan hasilnya juga memuaskan, thank you kak",
    name: "Kak Ade",
    title: "Atlet Badminton Top 11 National Rank",
  },
  {
    id: 3,
    review:
      "Tadi uda coba kasih liat ke tmn yg emang kerjaan nya sering acc proposal dan tanya dia, katanya proposal nya ini uda ok, ga perlu ada revisi gmna2, jd saya percaya aja dari hasil tim proposal studio bagus 😁 Next kalau perlu proposal apapun ga perlu ragu lg , tinggal sebut kebutuhan apa trs bayar, tunggu, selesai 👍",
    name: "Trend Coffee",
    title: "",
  },
  {
    id: 4,
    review:
      "Proposal Studio keren… saya cukup puas kerjasama dengan Proposal Studio untuk pembuatan Company Profile Perusahaan saya karena kerjanya cukup profesional dan hasilnya sesuai dengan ekspektasi..",
    name: "CV Kutai Media Utama",
    title: "",
  },
  {
    id: 5,
    review:
      "Masya Allah, terimakasih banyak ka pelayanan nya sangat baik, isi proposal nya sangat memuaskan, design nya bagus bngt, Alhamdulillah pembuatan nya juga cepet🙏🙏🙏",
    name: "Majelis Ta'lim Bustanul Wildan",
    title: "",
  },
  {
    id: 6,
    review:
      "Overall isinya bagus, desainnya juga keren. Gak banyak yg harus direvisi. Kelihatan orang-orangnya emang ada skill khusus bukan yang sekedar bisa bikin proposal. Good job sih, makasihh",
    name: "PT Cahaya Eloc Abadi",
    title: "",
  },
  {
    id: 7,
    review:
      "Terima kasih Proposal Studio yg udah buatin proposal event kami. Keren hasilnya, proses cepat, dan harga jg terjangkau. Next kalau ada project lain, mau order lagi ya. Sukses selalu Proposal Studio.",
    name: "Hackfest 2023",
    title: "",
  },
  {
    id: 8,
    review:
      "Terimakasih Proposal Studio telah membantu saya, Hasilnya memuaskan sesuai dengan harapan saya, Maaf jika dalam penyampaiannya saya kurang dapat dipahami, tapi alhamdulilah Proposal Studio dapat memahami apa yang saya maksud, Sukses terus buat Proposal Studio 🙏",
    name: "Pak Riko dan Pak Paulus",
    title: "Pengajuan Project Batu Bara & Kayu",
  },
  {
    id: 9,
    review:
      "Terimakasih ya kak, hasilnya sangat memuaskan, mungkin bisa di next next event kami melibatkan proposal studio untuk pembuatan proposalnya. Termakasih juga udah sabar banget buat nunggu saya ngirim materinya dan di ajarin pelan pelan pelan juga. Timaacih, Sukses untuk proposal studio dan tim di balik layar pembuatan proposal dari customer🔥🔥",
    name: "IM3 Denpasar",
    title: "Bali",
  },
  {
    id: 10,
    review:
      "Makasih banyakk yaa udah mau sabar banget ngadepin customer kayak aku, minta diskon tapi permintaan nya pun banyak, revisi juga banyakk... makasih juga udah mau jadi kayak tentor buat aku mbak ngebantu bangett.... semoga semakinn lancar rejekinya banyak orderan juga yaa mbakkk",
    name: "Panitia Kompetisi Pajak 2022",
    title: "",
  },
  {
    id: 11,
    review:
      "Terimakasih buat Proposal Studio, untuk designnya sangat bagus, dan udah dikasih tema free+murmer lagi, visualnya bikin jadi profesional, untuk layanan emang baik banget apa lagi adminnya udh sabar, untuk admin slow ress memang wajar, soalnya kan pasti bnyak orderan🙏😊",
    name: "Neko Esport",
    title: "",
  },
  {
    id: 11,
    review:
      "Isinya top wes top markotop, overall konsepnya cocok mbak, ini bener-bener sesuai Mba, gercep, fast respon, gak janji-janji palsu, hanya sedikit ditambah bahannya saja, selain itu semuanya sesuai apa yang di inginkan bosku Mba, semoga kerjasama kita berkesinambungan Mba",
    name: "Baby Ourlens ",
    title: "Kediri",
  },
  {
    id: 12,
    review:
      "Okay thank you yah design proposalnya menarik. Overall, service nya bagus dan cepat tanggap yah bales chat client as well as ramah juga. Design nya juga very catchy dan relevant dgn topic jadi lebih interesting untuk audience yg baca. Worth the price sih eventho ada ujian ttp professional menjalankan task dr client. Itu aja sih ka. Pasti saya contact lagi kl ada butuh bantuan untuk proposal. Thank you so much.",
    name: "Camp Naga Sakti",
    title: "Pelatihan Muay Thai dan Boxing",
  },
  {
    id: 13,
    review:
      "Pekerjaan selesai sesuai deadline, revisi beberapa kali langsung cepat direspon, keren deh, next bakal pake lagi 👍🏼👍🏼👍🏼",
    name: "HAMN 2022",
    title: "Macroworldmania - Community of Macro Photography",
  },
  {
    id: 14,
    review:
      "Seneng bgt order di proposal studio, fast respon mbak, pesen tgl 8 tp tgl 7 udh selese 👍, hasilnyaa jg bagus banget yahh👍 adminnya 1x kkonsultasi udah beres proposal👍 mantap👍👍mang terde best, cepat dan tepat, memuaskannn🔥 bakal jadi langganan proposal buat event saya❤️",
    name: "Sapta Mahifal Corporate",
    title: "",
  },
  {
    id: 15,
    review:
      "Sumpah baru kali ini proposal sekeren ini, bagus semua bikinan Proposal Studio",
    name: "Relawan Banjarnegara Atas",
    title: "",
  },
  {
    id: 16,
    review:
      "Hasil proposalnya bagus sesuai keinginan, kakanya juga sabar klo direvisi revisi hehhee dan termasuk fast respon juga...semoga makin sukses kedepannya ka 😃",
    name: "Minuman Sinom Titi Yuni",
    title: "Sidoarjo",
  },
  {
    id: 17,
    review: "Good semua",
    name: "Ve House of Beuaty",
    title: "Solo",
  },
  {
    id: 18,
    review: "Chat fast respon, harganya terjangkau, dan adminnya sopan🥰",
    name: "Churronox Medan",
    title: "Medan",
  },
  {
    id: 19,
    review:
      "Untuk harga murah menurut saya. Kecepatan pengerjaan lumayan cepat. Untuk pembuatan konsep di bantu juga karna saya masih belum mengerti mengenai proposal sponsorship. Design juga berkualitas. Dan gratis konsultasi lagi.",
    name: "Sapex Store",
    title: "",
  },
  {
    id: 20,
    review:
      "Proposal Studio emang terde best, cepat dan tepat, memuaskannn🔥 bakal jadi langganan proposal buat event saya❤️",
    name: "Kesatria Fest",
    title: "",
  },
  {
    id: 21,
    review:
      "Sudah semuanya bagus Kak, makasih banyak ya Kak nanti bantuin lagi kalau aku butuhin lagi buat proposalnya",
    name: "Primadona Tour & Travel",
    title: "Bali",
  },
  {
    id: 22,
    review:
      "Memuaskan, kk nya ramah, enak diajak diskusi, bolak balik revisi proposal juga kk sabar bgt",
    name: "Penawar Kandong dan Kopijo",
    title: "",
  },
  {
    id: 23,
    review:
      "Alhamdulillah... Akhirnya proposalnya jadi dan bagus, kakaknya juga fast respon terus cepet buat revisianya. Terimakasih Proposal Studio ❤️",
    name: "Sekolah Islam Terpadu Gameel Akhlaq",
    title: "",
  },
  {
    id: 24,
    review:
      "Makasih banyak ya Kak, untuk konsep proposalnya cukup memuaskan, dan harganya bisa negosiasi sebelum deal, kalo buat pelayanannya puas bgtttt konsep yg di ingin in cust terealisasikan, makasihh banyak ya Kak",
    name: "PT Dapur Goma Indonesia",
    title: "",
  },
  {
    id: 25,
    review:
      "Asli bagus banget hasil proposal nya, desain nya keren, font nya juga masuk banget sama desain nya, jadi keliatan elegan, makasih banyak ya kak 🤩 Sesuai dengan request an saya",
    name: "Ling Management",
    title: "",
  },
];

export default function Testimoni() {
  return (
    <div className="my-14 md:my-[100px] mx-5 md:mx-20">
      <div className="justify-center">
        <h2 className="font-bold text-4xl text-center hidden md:block">
          Proposal Studio telah memiliki <br />
          banyak
          <span className="text-primary"> testimoni positif</span> dari klien.
        </h2>
      </div>
      <div className="justify-center">
        <h2 className="font-bold text-xl text-center block md:hidden">
          Proposal Studio telah memiliki banyak
          <span className="text-primary"> testimoni positif</span> dari klien.
        </h2>
      </div>

      <div className="flex overflow-hidden overflow-y-hidden overflow-x-scroll scrollbar-hide animation-container">
        <div className="ticker-element">
          <div className="mt-8 md:mt-16 flex gap-9">
            {testi.map((data, i) => {
              return (
                <div
                  key={data.id}
                  className="p-7 w-[300px] h-fit md:w-[500px]  border border-border rounded-2xl"
                >
                  <div className="flex">
                    <Icon name="star" />
                    <Icon name="star" />
                    <Icon name="star" />
                    <Icon name="star" />
                    <Icon name="star" />
                  </div>
                  <div className="mt-1">
                    <p className="font-medium text-sm text-baseBlack">
                      {data.review}
                    </p>
                  </div>
                  <div className="mt-5">
                    <div className="flex gap-2">
                      <Icon name="user" />

                      <div className="">
                        <p className="font-semibold text-sm text-baseBlack">
                          {data.name}
                        </p>
                        <p className="font-normal text-sm text-border">
                          {data.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
