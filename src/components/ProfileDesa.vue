<template>
    <section class="flex justify-center items-center px-16 py-20 bg-gray-200 max-md:px-5">
      <div class="mt-14 w-full max-w-[1087px] max-md:mt-10 max-md:max-w-full">
        <div class="flex gap-40 max-md:flex-col max-md:gap-0">
          <div class="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="../assets/images/WelcomeToButun.png" alt="Profil Desa Butun" class="grow w-full aspect-[1.04] max-md:mt-10 max-md:max-w-full" />
          </div>
          <div class="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col self-stretch my-auto font-bold text-black max-md:mt-10 max-md:max-w-full">
              <h1 class="text-4xl text-orange-400 max-md:max-w-full">Profil Desa</h1>
              <p class="mt-9 text-2xl max-md:max-w-full">Kenali lebih dalam tentang desa Butun melalui laman profil desa.</p>
              <a href="/profile-desa/profile" class="flex gap-2 self-start px-5 py-5 mt-16 text-base font-semibold text-center bg-orange-400 rounded-3xl max-md:mt-10 duration-300 hover:scale-105">
                <span class="my-auto">Cek Selengkapnya</span>
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb74af6c9042e77ae06e20bc25fb2de3f76456a005182cc85e7aac22a06086b6?apiKey=f1a9489e42624277a4277c6751b4869b&" alt="" class="shrink-0 w-6 aspect-square" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ProfileDesa'
  }
  </script>
  
  