<template>
  <div class="relative bg-accent font-sans text-primary min-h-screen overflow-hidden">
    <!-- Animated background -->
    <div class="flower-container absolute inset-0 z-0">
      <div v-for="i in 200" :key="i" class="flower-wrapper">
        <div class="flower"></div>
      </div>
    </div>

    <div class="relative z-10">
    <div class="flex flex-col items-center justify-center p-10 text-center">
      <div class="p-5">
        <a href="https://maps.app.goo.gl/tuxRM2f1JJfqfjtZ9" target="_blank" rel="noopener noreferrer" class="mb-10 inline-flex items-center space-x-2 rounded-full border border-primary bg-primary px-4 py-1.5 text-sm text-accent shadow-sm transition-colors hover:border-icterine hover:bg-secondary hover:text-icterine">
          Santa Fe, Calle 4, 6b 
          <svg class="m-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
              </g>
          </svg>
        </a>
      </div>

      <h1 class="font-serif text-6xl font-medium text-primary md:text-8xl">
        Flores
        <span class="font-display block italic text-7xl md:text-9xl mt-2 text-icterine">
          Mari
        </span>
      </h1>

      <p class="p-5 mt-8 max-w-lg text-base md:text-lg text-primary">
        Mi nombre es Marisol, y me dedico a la venta de Ramos y Arreglos Florales para toda ocasión. Ofrezco una amplia variedad de flores frescas y hermosas para hacer que tus momentos especiales sean aún más memorables.
      </p>
    </div>

    <div class="parent text-center m-5 md:m-10 p-5 md:p-10">
        <div class="div1">
          <!-- Redes sociales -->
          <!-- From Uiverse.io by AKAspidey01 --> 
          <div class="flex items-center justify-center gap-4 mx-auto">
            <a href="https://www.instagram.com/floresmari._" target="_blank" rel="noopener noreferrer" class="social-button">
              <!-- Instagram -->
              <div class="relative w-16 h-16 rounded-full group">
                <div class="floater w-full h-full absolute top-0 left-0 bg-violet-400 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                <div class="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-violet-400 rounded-full">
                  <svg fill="none" viewBox="0 0 22 22" height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.94 6.46809C21.8884 5.2991 21.6994 4.49551 21.4285 3.79911C21.1492 3.05994 20.7194 2.39818 20.1564 1.84802C19.6062 1.28932 18.9401 0.855163 18.2094 0.580194C17.5091 0.309437 16.7096 0.120336 15.5407 0.0688497C14.363 0.0128932 13.9891 0 11.0022 0C8.01527 0 7.64141 0.0128932 6.46808 0.064466C5.29914 0.116039 4.49551 0.305225 3.79932 0.57581C3.05994 0.855163 2.39818 1.28494 1.84802 1.84802C1.28932 2.39813 0.855377 3.06428 0.580193 3.7949C0.309437 4.49551 0.120379 5.2948 0.0688496 6.4637C0.0129362 7.64141 0 8.01527 0 11.0022C0 13.9891 0.0129362 14.363 0.0644659 15.5363C0.116039 16.7053 0.305225 17.5089 0.576025 18.2053C0.855377 18.9444 1.28932 19.6062 1.84802 20.1564C2.39818 20.7151 3.06432 21.1492 3.79494 21.4242C4.49547 21.6949 5.29476 21.884 6.46391 21.9355C7.63702 21.9873 8.0111 22 10.998 22C13.9849 22 14.3588 21.9873 15.5321 21.9355C16.7011 21.884 17.5047 21.695 18.2009 21.4242C18.9321 21.1415 19.5961 20.7091 20.1505 20.1548C20.7048 19.6005 21.1373 18.9365 21.42 18.2053C21.6906 17.5047 21.8798 16.7052 21.9314 15.5363C21.9829 14.363 21.9958 13.9891 21.9958 11.0022C21.9958 8.01527 21.9914 7.64137 21.94 6.46809ZM19.9588 15.4503C19.9114 16.5248 19.731 17.105 19.5805 17.4918C19.2109 18.4502 18.4502 19.2109 17.4918 19.5805C17.105 19.731 16.5206 19.9114 15.4503 19.9586C14.29 20.0103 13.942 20.023 11.0066 20.023C8.07118 20.023 7.71881 20.0103 6.56259 19.9586C5.48816 19.9114 4.90796 19.731 4.52117 19.5805C4.04425 19.4043 3.61014 19.1249 3.25772 18.7596C2.89242 18.4029 2.61306 17.9731 2.43677 17.4961C2.28635 17.1094 2.10589 16.5248 2.05874 15.4547C2.007 14.2943 1.99428 13.9461 1.99428 11.0107C1.99428 8.07535 2.007 7.72298 2.05874 6.56698C2.10589 5.49254 2.28635 4.91235 2.43677 4.52555C2.61306 4.04842 2.89241 3.61439 3.26211 3.26189C3.61865 2.89658 4.04842 2.61723 4.52555 2.44115C4.91235 2.29073 5.49692 2.11023 6.56697 2.06291C7.72736 2.01134 8.07556 1.99844 11.0107 1.99844C13.9505 1.99844 14.2985 2.01134 15.4547 2.06291C16.5292 2.11027 17.1093 2.29069 17.4961 2.44111C17.9731 2.61723 18.4072 2.89658 18.7596 3.26189C19.1249 3.61865 19.4042 4.04842 19.5805 4.52555C19.731 4.91235 19.9114 5.49671 19.9587 6.56698C20.0103 7.72736 20.0232 8.07535 20.0232 11.0107C20.0232 13.9461 20.0104 14.29 19.9588 15.4503Z" class="group-hover:fill-[#171543] fill-white duration-300"></path>
                    <path d="M11.0026 5.35054C7.88252 5.35054 5.35107 7.88182 5.35107 11.0021C5.35107 14.1223 7.88252 16.6536 11.0026 16.6536C14.1227 16.6536 16.6541 14.1223 16.6541 11.0021C16.6541 7.88182 14.1227 5.35054 11.0026 5.35054ZM11.0026 14.668C8.97844 14.668 7.33654 13.0264 7.33654 11.0021C7.33654 8.97774 8.97844 7.33609 11.0025 7.33609C13.0269 7.33609 14.6685 8.97774 14.6685 11.0021C14.6685 13.0264 13.0268 14.668 11.0026 14.668ZM18.1971 5.12706C18.1971 5.85569 17.6063 6.44646 16.8775 6.44646C16.1489 6.44646 15.5581 5.85569 15.5581 5.12706C15.5581 4.39833 16.1489 3.80774 16.8775 3.80774C17.6063 3.80774 18.1971 4.39829 18.1971 5.12706Z" class="group-hover:fill-[#171543] fill-white duration-300"></path>
                  </svg>
                </div>
              </div>
            </a>
            <a href="https://wa.me/+56930250781" target="_blank" rel="noopener noreferrer" class="social-button">
              <!-- WhatsApp -->
              <div class="relative w-16 h-16 rounded-full group">
                <div class="floater w-full h-full absolute top-0 left-0 bg-green-500 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                <div class="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-green-500 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                  </svg>
                </div>
              </div>
            </a>
            <a href="tel:930250781" class="social-button">
              <!-- Teléfono -->
              <div class="relative w-16 h-16 rounded-full group">
                <div class="floater w-full h-full absolute top-0 left-0 bg-blue-400 rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"></div>
                <div class="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-blue-400 rounded-full">
                  <svg viewBox="0 0 24 24" height="25" width="25" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" class="group-hover:fill-[#171543] fill-white duration-300"></path>
                  </svg>
                </div>
              </div>
            </a>
          </div>
        </div>

        <!-- <div class="div2">
          <a href="#" class="rounded-lg bg-vanilla px-6 py-3 text-base font-medium text-black transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-icterine focus:ring-offset-2 focus:ring-offset-black">
            Catalogo ↓
          </a>
        </div> -->
    </div>
    </div>
    
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}

</script>

<style scoped>

.flower-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 40px;
  padding: 40px;
  animation: move-background 40s infinite linear;
  width: 150vw; /* Make it wider and taller to allow for movement */
  height: 150vh;
  position: absolute;
  top: -25vh;
  left: -25vw;
}

.flower-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flower {
  --size: 25px;
  --petal-clr: rgba(255, 97, 192, 0.05);
  --center-clr: rgba(255, 255, 255, 0.08);
  height: var(--size);
  width: var(--size);
  border-radius: 50%;
  background-color: var(--center-clr);
  box-shadow:
    calc(var(--size) * -0.4) calc(var(--size) * -0.6) var(--petal-clr),
    calc(var(--size) * 0.4) calc(var(--size) * -0.6) var(--petal-clr),
    calc(var(--size) * 0.7) 0 var(--petal-clr),
    calc(var(--size) * 0.4) calc(var(--size) * 0.6) var(--petal-clr),
    calc(var(--size) * -0.4) calc(var(--size) * 0.6) var(--petal-clr),
    calc(var(--size) * -0.7) 0 var(--petal-clr);
}

@keyframes move-background {
  from { background-position: 0 0; }
  to { transform: translate(-200px, -200px); }
}

</style>
