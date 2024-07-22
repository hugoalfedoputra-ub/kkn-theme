<template>
  <NavBar />
  <section
    class="flex justify-center w-full min-h-screen overflow-hidden md:p-10 lg:p-0 items-center max-md:px-5 p-10"
  >
    <div
      class="flex lg:justify-between xl:justify-evenly gap-20 items-center grow flex-col-reverse lg:flex-row md:mx-20"
    >
      <div class="flex lg:p-5 xl:p-10 lg:w-[50%] flex-col justify-center">
        <h1 class="text-3xl font-bold font-primary text-yellow-primary">Sejarah Desa</h1>
        <div class="my-4">
          <p class="text-base indent-8">
            Cerita ini digali dari keterangan seseorang yang bernama <b>“KASAN MURADI”</b> (Alm),
            oleh <b>“MOELYO SUTJIPTO”</b> (Alm) Yang dahulu Kepala Desa Butun Periode Tahun 1940 -
            1975.
          </p>
          <p class="text-base indent-8">
            Konon Desa Butun masih berupa hutan, yang dibabad dari 2 (dua) arah yaitu :
          </p>
          <ol class="list-decimal ml-4">
            <li>
              <p class="text-base font-bold">DARI ARAH SELATAN</p>
              <p class="text-base">
                Dibabad oleh seorang <b>Kyai IMAM TOBRONI</b> yang berasal dari Mataram,
                menghasilkan 2 (dua) Dukuh atau Dusun yaitu Dusun Butun dan Dusun Jetis
              </p>
            </li>
            <li>
              <p class="text-base font-bold">DARI ARAH UTARA</p>
              <p class="text-base">
                Dibabad oleh seseorang yang bernama <b>WONGSO KROMO</b> yang berasal dari Ponorogo,
                menghasilkan Dukuh atau Dusun Baos dan Balong .
              </p>
            </li>
          </ol>
          <br />
          <p class="text-base indent-8">
            Pembabatan hutan itu dimulai dari pinggir hingga butul (tembus), maka kata Butul (Jawa)
            itu menjadi Butun.
          </p>
          <br />
          <p class="text-base indent-8">
            Dusun Jetis dahulu kala disebut Dukuh Temurejo karena di Dukuh tersebut banyak tumbuh
            tanaman obat - obatan ( temu lawak, temu ireng , dsb ), dan di Dukuh tersebut ada
            sebagian wilayah yang disebut Jumput, karena di wilayah tersebut dahulu sering terdapat
            Penyamun ( begal ), maka dengan kejadian - kejadian yang sering terjadi itu akhirnya
            timbul secara Masyarakat yang berbunyi <b>“ OJO TASTIS LEK DIJUMPUT “</b> .
          </p>
          <p class="text-base indent-8">
            Disebut Dukuh atau Dusun Baos, karena diwilayah tersebut sangat luas dan penghuninya
            masih sangat sedikit, ( Jawa Aos ). Dan sebagian wilayah Deasa Butun konon banyak
            terdapat sumber - sumber air jernih di tempat - tempat yang rendah, sehingga air tetap
            tergenang ( Jawa Balongan ), maka sewilayah tersebut disebut Dukuh Balong sampai
            sekarang.
          </p>
          <br />
          <p class="text-base">Pada tahun 1850, Butun resmi menjadi Desa yang terdiri dari :</p>
          <br />
          <ol class="list-decimal ml-4">
            <li>
              <p class="text-base">
                <b>Desa Butun</b> : Terdiri dari Dukuh Butun dan Jetis yang dipimpin oleh seorang
                Kepala Desa yaitu:
              </p>
              <ol class="custom-ordered-list">
                <li>
                  <p class="text-base">
                    <b>IMAM TOBRONI</b> memerintah pada Tahun 1850 - 1874 yang berdomisili di Dukuh
                    Butun.
                  </p>
                </li>
                <li>
                  <p class="text-base">
                    <b>KASAN BAWI</b> memerintah pada Tahun 1874 – 1919 yanb berdomisili di Dukuh
                    Jetis.
                  </p>
                </li>
              </ol>
            </li>
            <li>
              <p class="text-base">
                <b>Desa Baos</b> : Terdiri dari Dukuh Baos dan Dukuh Balong yang dipimpin oleh
                seorang Kepala Desa yaitu :
              </p>
              <ol class="custom-ordered-list">
                <li>
                  <p class="text-base">
                    <b>WONGSO KROMO</b> memerintah pada Tahun 1850 - 1874 yang beromisili di Dukuh
                    Balong
                  </p>
                </li>
                <li>
                  <p class="text-base">
                    <b>IRO DIKROMO</b> memerintah pada Tahun 1875 – 1919 yang berdomisili di Dukuh
                    Baos
                  </p>
                </li>
                <li>
                  <b>SOEREDJO</b> memerintah pada Tahun 1919 – 1924 yang berdomisili di Dukuh Baos.
                </li>
              </ol>
            </li>
          </ol>
          <br />
          <p class="text-base indent-8">
            Dikarenakan pada Tahun 1919 terjadi Lahar yang sangat Dahsyat ( dari letusan gunung
            Kelud ), yang mengakibatkan banyak tanah yang terlanda lahar termasuk tanah - tanah
            bengkok di Desa Baos, maka pada Tahun 1924 antara Desa Butun dan Desa Baos mengadakan
            Musyawarah penggabungan Desa, dan telah disepakati menjadi satu Desa yaitu Desa Butun,
            yang terdiri dari 4 (empat) Dusun :
          </p>
          <ol class="list-decimal ml-4">
            <li>Dusun Butun</li>
            <li>Dusun Jetis</li>
            <li>Dusun Baos</li>
            <li>Dusun Balong</li>
          </ol>
        </div>
      </div>
      <div class="p-4">
        <img
          class="max-w-full max-h-96 rounded-3xl"
          src="/images/map_butun.png"
          alt="Map of Blitar"
        />
      </div>
    </div>
  </section>
  <FooterComponent class="z-0 left-0 bottom-0" />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooterComponent from '@/components/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    FooterComponent
  }
}
</script>
