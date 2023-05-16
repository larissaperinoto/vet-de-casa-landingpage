<template>
  <section id="about" class="flex flex-col justify-center items-center h-screen w-screen sm:flex-row">
    <div class="w-full flex justify-center px-10 md:w-1/3">
      <img src="../assets/images/about_img.png" class="bg-teal-500 rounded-[52px]" />
    </div>
    <div class="w-full p-10 md:w-1/3">
      <h1 class="pb-10 text-4xl font-Luckiest text-slate-700 text-center">Sobre mim</h1>
      <p class="text-xl font-PTSerif text-slate-600 text-justify pb-5">Me chamo <span class="font-bold">Rafael Pescara</span>, sou Médico Veterinário e completamente apaixonado pelos animais.</p>
      <p class="font-PTSerif text-xl text-slate-600  text-justify">Tenho experiência na área de clínica médica de cães e gatos e atualmente atuo nesta área. Meu propósito com o atendimento em domicílio é proporcionar mais comodidade aos meus pacientes e seus tutores.</p>
    </div>
  </section>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
