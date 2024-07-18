<template>
  <section class="flex justify-center items-center py-10 bg-white max-md:px-5">
    <div class="mt-10 w-full max-w-[1200px] max-md:max-w-full">
      <div class="flex gap-20 max-md:flex-col max-md:gap-50">
        <div class="flex flex-col w-3/5 max-md:ml-0 max-md:w-full">
          <div class="flex flex-col mt-20 font-bold text-black max-md:mt-10">
            <h2 class="text-4xl text-orange-400">Visi dan Misi</h2>
            <p class="mt-7 text-2xl">
              Membawa desa Butun menuju masa depan yang lebih baik melalui visi yang jelas dan misi yang terukur.
            </p>
            <a href="#" class="flex gap-2 self-start px-5 py-5 mt-16 text-base font-semibold text-center bg-orange-400 rounded-3xl max-md:mt-10 duration-300 hover:scale-105">
              <span class="my-auto">Cek Selengkapnya</span>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb74af6c9042e77ae06e20bc25fb2de3f76456a005182cc85e7aac22a06086b6?apiKey=f1a9489e42624277a4277c6751b4869b&" class="shrink-0 w-6 aspect-square" alt="" />
            </a>
          </div>
        </div>
        <div class="flex flex-col ml-5 max-md:ml-0 max-md:w-full">
          <img loading="lazy" src="../assets/images/VisiMisi.png" class="grow w-full max-md:mt-10 max-md:max-w-full" alt="Sejarah desa Butun" />
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script>
  export default {
    name: 'VisiMisi'
  }
  </script>