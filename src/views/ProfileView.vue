<template>
  <NavBar />
  <main id="profile" class="flex justify-center items-center px-16 py-20 bg-white max-md:px-5">
    <section class="flex flex-col items-center w-full max-w-[90%] max-md:max-w-full">
      <h1 class="mt-5 text-4xl font-bold text-center text-orange-400 max-md:max-w-full">
        Wilayah Desa
      </h1>
      <p class="mt-16 text-base text-black max-md:mt-10 max-md:max-w-full">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <div class="mt-16 w-4/5 max-md:mt-10">
        <div class="flex gap-5 max-md:flex-col max-md:gap-0">
          <article class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow justify-center py-2 font-bold text-center text-red-500 rounded-xl border-2 border-black border-solid shadow-sm max-md:mt-10">
              <p ref="hektareWilayah" class="text-4xl">{{ hWilayah }}</p>
              <p class="mt-5 text-3xl">Hektare Wilayah</p>
            </div>
          </article>
          <article class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow justify-center p-2 font-bold text-center text-green-400 rounded-xl border-2 border-black border-solid shadow-sm max-md:px-5 max-md:mt-10">
              <p ref="hektareSawah" class="text-4xl">{{hSawah}}</p>
              <p class="mt-5 text-3xl">Hektare Sawah</p>
            </div>
          </article>
          <article class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow justify-center p-2 font-bold text-center text-blue-400 rounded-xl border-2 border-black border-solid shadow-sm max-md:mt-10">
              <p ref="hektareTegalan" class="text-4xl">{{hTegalan}}</p>
              <p class="mt-5 text-3xl">Hektare Tegalan</p>
            </div>
          </article>
        </div>
      </div>
      <div class="mt-11 max-w-full w-4/5 max-md:mt-10">
        <div class="flex gap-5 max-md:flex-col max-md:gap-0">
          <article class="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow justify-center py-2 font-bold text-center text-red-500 whitespace-nowrap rounded-xl border-2 border-black border-solid shadow-sm max-md:mt-10">
              <p ref="dusun" class="text-4xl">{{dusun}}</p>
              <p class="mt-5 text-3xl">Dusun</p>
            </div>
          </article>
          <article class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow justify-center py-2 font-bold text-center text-green-400 whitespace-nowrap rounded-xl border-2 border-black border-solid shadow-sm max-md:mt-10">
              <p ref="rw" class="text-4xl">{{rw}}</p>
              <p class="mt-5 text-3xl">RW</p>
            </div>
          </article>
          <article class="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow justify-center py-2 font-bold text-center text-blue-400 whitespace-nowrap rounded-xl border-2 border-black border-solid shadow-sm max-md:mt-10">
              <p ref="rt" class="text-4xl">{{rt}}</p>
              <p class="mt-5 text-3xl">RT</p>
            </div>
          </article>
        </div>
      </div>
      <h2 class="self-stretch mt-28 text-4xl font-bold text-center text-orange-400 max-md:mt-10 max-md:max-w-full">
        Peta Desa
      </h2>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/45ece1ce4402e27a3f3c63b6bdc4e580a6d04078970fbdc2f45471cf1eecfc9c?apiKey=f1a9489e42624277a4277c6751b4869b&" class="mt-10 max-w-full aspect-[2.33] w-[906px]" alt="Peta Desa" />
    </section>
  </main>
  <FooterComponent />
</template>

  
<script>
import NavBar from '../components/NavBar.vue'
import FooterComponent from '../components/FooterComponent.vue'


export default {
  name: 'ProfileDesa',
  components:{
    NavBar,
    FooterComponent
  },
  data(){
    return{
      hWilayah:100,
      hSawah:70,
      hTegalan: 20,
      dusun:5,
      rw:17,
      rt:60
    }
  },
  mounted() {
    this.animateValue(this.$refs.hektareWilayah, 0, this.hWilayah, 2000);
    this.animateValue(this.$refs.hektareSawah, 0, this.hSawah, 2000);
    this.animateValue(this.$refs.hektareTegalan, 0, this.hTegalan, 2000);
    this.animateValue(this.$refs.dusun, 0, this.dusun, 2000);
    this.animateValue(this.$refs.rw, 0, this.rw, 2000);
    this.animateValue(this.$refs.rt, 0, this.rt, 2000);
  },
  methods: {
    animateValue(ref, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) {
          startTimestamp = timestamp};
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        ref.innerText = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }
}
</script>
