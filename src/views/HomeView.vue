<script setup>
import NavBar from '../components/NavBar.vue'
// import InteractiveMap from '../components/InteractiveMap.vue'
</script>

<template>
  <div class="flex flex-col bg-gray-200">
    <NavBar />
    <div
      class="flex flex-col justify-center w-full text-3xl font-bold text-black bg-white max-md:max-w-full"
    >
      <div
        class="flex overflow-hidden relative flex-col justify-center items-center px-16 py-20 w-full min-h-[650px] max-md:px-5 max-md:max-w-full"
      >
        <img
          loading="lazy"
          src="../assets/images/cover_landing_page.jpg"
          class="object-cover absolute inset-0 size-full opacity-50"
        />
        <div
          class="flex relative flex-col justify-center px-5 py-2 mt-28 mb-11 max-w-full w-[569px] max-md:px-5 max-md:my-10"
        >
          <img
            loading="lazy"
            src="../assets/images/Blitar__sid__irtNbnZ.png"
            class="self-center max-w-full aspect-square w-[100px] md:w-[120px] lg:w-[140px]"
          />
          <div class="mt-5 text-4xl font-extrabold text-center max-md:text-4xl">Butun</div>
          <div class="text-xl md:text-2xl self-center">Kec. Gandusari, Kab. Blitar</div>
          <div class="text-xl md:text-2xl self-center">Provinsi Jawa Timur</div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col justify-center px-5 py-10 w-full text-4xl font-bold text-center text-orange-400 bg-emerald-900 max-md:max-w-full"
    >
      <div class="self-center">APARATUR DESA</div>
      <img loading="lazy" srcSet="..." class="mt-10 w-full aspect-[2.78] max-md:max-w-full" />
    </div>
    <div
      class="justify-end md:px-10 lg:px-20 py-16 w-full bg-white-secondary max-md:px-5 max-md:max-w-full"
    >
      <div class="flex gap-5 max-md:flex-col max-md:gap-0">
        <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div
            class="flex flex-col justify-end items-start md:px-10 lg:px-20 py-20 mt-1.5 text-base font-semibold text-black max-md:px-5 max-md:mt-10"
          >
            <div class="text-4xl font-bold text-start text-orange-400">Lokasi Desa</div>
            <div class="mt-12 text-2xl font-bold max-md:mt-10">Desa Butun</div>
            <div class="mt-2.5">Kec. Gandusari, Kab. Blitar</div>
            <div class="mt-2.5">Provinsi Jawa Timur</div>
            <div class="flex gap-1 md:gap-2.5 p-4 mt-8 text-start bg-orange-400 rounded-2xl">
              <div class="text-xs md:text-md lg:text-[0.8rem] my-auto">Cek Selengkapnya</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b60966f464887acb57afbe0e3ee24c56de8400c4a2a5e1a822049a5817248edf?"
                class="shrink-0 w-5 aspect-square"
              />
            </div>
          </div>
        </div>
        <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <div
            class="flex flex-col grow justify-center px-6 py-10 max-md:px-5 max-md:mt-10 max-md:max-w-full"
          >
            <!-- <InteractiveMap loading="lazy" /> -->
            <!-- <img loading="lazy" srcSet="..." class="w-full aspect-[1.16] max-md:max-w-full" /> -->
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col px-2.5 py-10 w-full bg-white max-md:max-w-full">
      <div class="self-center text-4xl font-bold text-center text-orange-400">
        Berita Desa Terbaru
      </div>
      <div class="mt-10 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col max-md:gap-0">
          <div class="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div class="flex flex-col px-8 py-5 max-md:px-5 max-md:max-w-full">
              <div class="flex flex-col justify-center bg-black rounded-3xl max-md:max-w-full">
                <img loading="lazy" srcSet="..." class="w-full aspect-[1.85] max-md:max-w-full" />
              </div>
              <div
                class="flex flex-col justify-center self-center px-2.5 mt-5 max-w-full text-center w-[572px]"
              >
                <div class="text-2xl font-bold text-black max-md:max-w-full">
                  Pembangunan Yang Bersumber Dana Desa 2024
                </div>
                <div
                  class="flex gap-0 justify-center self-end mt-2.5 text-sm font-semibold text-orange-400"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b71cf9e5bb2d8659573ea80bbded8c77f1b09b6c12103d0d268dd02ed0045210?"
                    class="shrink-0 w-5 aspect-square"
                  />
                  <div>13 Juni 2024</div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow p-5 max-md:max-w-full">
              <div
                class="flex flex-col justify-center items-start px-5 py-2.5 text-center bg-gray-200 rounded-3xl border-b-2 border-l-2 border-black border-solid shadow-sm max-md:max-w-full"
              >
                <div class="text-xl font-bold text-black">Kerja Bakti di Makam Dusun</div>
                <div class="flex gap-0 justify-center mt-2.5 text-sm font-semibold text-orange-400">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d49c240900e1d801da8ad3d4a47d42236a91bbaa83a3c6c64180c74d1304612?"
                    class="shrink-0 w-5 aspect-square"
                  />
                  <div>13 Juni 2024</div>
                </div>
              </div>
              <div
                class="flex flex-col justify-center items-start px-5 py-2.5 mt-5 text-center bg-gray-200 rounded-3xl border-b-2 border-l-2 border-black border-solid shadow-sm max-md:max-w-full"
              >
                <div class="text-xl font-bold text-black">Bantuan Untuk Anak-Anak di Papua</div>
                <div class="flex gap-0 justify-center mt-2.5 text-sm font-semibold text-orange-400">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d49c240900e1d801da8ad3d4a47d42236a91bbaa83a3c6c64180c74d1304612?"
                    class="shrink-0 w-5 aspect-square"
                  />
                  <div>13 Juni 2024</div>
                </div>
              </div>
              <div
                class="flex flex-col justify-center items-start px-5 py-2.5 mt-5 text-center bg-gray-200 rounded-3xl border-b-2 border-l-2 border-black border-solid shadow-sm max-md:max-w-full"
              >
                <div class="text-xl font-bold text-black">Kegiatan Susruk Wangan</div>
                <div class="flex gap-0 justify-center mt-2.5 text-sm font-semibold text-orange-400">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d49c240900e1d801da8ad3d4a47d42236a91bbaa83a3c6c64180c74d1304612?"
                    class="shrink-0 w-5 aspect-square"
                  />
                  <div>13 Juni 2024</div>
                </div>
              </div>
              <div
                class="flex flex-col justify-center items-start px-5 py-2.5 mt-5 text-center bg-gray-200 rounded-3xl border-b-2 border-l-2 border-black border-solid shadow-sm max-md:max-w-full"
              >
                <div class="text-xl font-bold text-black max-md:max-w-full">
                  Pengecoran Jalan Kabupaten di Dusun Baos
                </div>
                <div class="flex gap-0 justify-center mt-2.5 text-sm font-semibold text-orange-400">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d49c240900e1d801da8ad3d4a47d42236a91bbaa83a3c6c64180c74d1304612?"
                    class="shrink-0 w-5 aspect-square"
                  />
                  <div>13 Juni 2024</div>
                </div>
              </div>
              <div
                class="flex flex-col justify-center items-start p-5 mt-5 bg-gray-200 rounded-3xl border-b-2 border-l-2 border-black border-solid shadow-sm max-md:max-w-full"
              >
                <div class="text-xl font-bold text-black max-md:max-w-full">
                  Penyaluran Dana Bantuan Langsung Tunai Dana Desa <br />Bulan April-Mei 2024
                </div>
                <div
                  class="flex gap-0 justify-center mt-2.5 text-sm font-semibold text-center text-orange-400"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b71cf9e5bb2d8659573ea80bbded8c77f1b09b6c12103d0d268dd02ed0045210?"
                    class="shrink-0 w-5 aspect-square"
                  />
                  <div>13 Juni 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="px-20 py-7 w-full bg-emerald-900 max-md:px-5 max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col max-md:gap-0">
        <div class="flex flex-col w-[70%] max-md:ml-0 max-md:w-full">
          <div class="text-xl font-semibold text-white max-md:mt-10 max-md:max-w-full">
            ©2024 Pemerintah desa Butun
          </div>
        </div>
        <div class="flex flex-col ml-5 w-[30%] max-md:ml-0 max-md:w-full">
          <div class="text-xl font-semibold text-white max-md:mt-10">
            E-mail: butun@kominfo.go.id
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
