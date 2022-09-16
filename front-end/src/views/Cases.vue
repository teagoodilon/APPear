<template>
   <body>
      <div>
         <h2>Cases de Sucesso</h2>
      </div>
      <div class="cases">
         <carousel
            @prox="prox"
            @ante="ante"
         >
         <carousel-slide v-for="(slide,index) in slides" 
            :key="slide" 
            :index="index"
            :visibleSlide="visibleSlide"
            :direction="direction"
            >
            <img :src="slide" class="imagem">
         </carousel-slide>
         </carousel>
      </div>
   </body>

</template>

<script>
import Carousel from '../components/Carousel.vue';
import CarouselSlide from '../components/CarouselSlide.vue';
export default {
   data() {
      return {
         slides: [
            'https://picsum.photos/id/237/600/300',
            'https://picsum.photos/id/227/600/300',
            'https://picsum.photos/id/267/600/300',
            'https://picsum.photos/id/235/600/300',
            'https://picsum.photos/id/211/600/300',
         ],
         visibleSlide: 0,
         direction: 'left',
      }
   },
   computed: {
      slidesLen() {
         return this.slides.length;
      }
   },
   methods: {
      prox() {
         if(this.visibleSlide >= this.slidesLen - 1){
            this.visibleSlide=0;
         } else {
            this.visibleSlide++;
         }
         this.direction= "left"
      },
      ante() {
         if(this.visibleSlide <= 0){
            this.visibleSlide= this.slidesLen - 1;
         } else {
            this.visibleSlide--;
         }
         this.direction= "right"
      }
   },
   components: {
      Carousel,
      CarouselSlide,
   }
}
</script>


<style scoped>
   .cases {
      display: flex;
      position: relative;
      top: -80px;
   }
   
   .tituloo {
    background: #BFBAAC;
    border-top-left-radius: 30px;
    margin-left: -5px;
    padding: 10px;
    margin-bottom: 10px;
    position: relative;
    top:-20px;
  }

  .tituloo h1 {
    font-size: 32px;
    background: #032A57;
    width: 300px;
    padding: 5px;
    margin-left: 30px;
    margin: 5px 0px 5px 30px;
    font-weight: 700;
    color: #e0dcd0;
    white-space: nowrap;
  }
</style>

