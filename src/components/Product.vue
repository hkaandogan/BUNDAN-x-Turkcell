<template>
  <v-card
      elevation="0"
      :class="$vuetify.breakpoint.mobile? 'ma-0 rounded-lg ': 'ma-4 rounded-lg '">
    <v-img
        :height="$vuetify.breakpoint.mobile? '250':'350'"
        class="white--text align-end"
        :src="product.img">
      <v-card-text class="ma-0 pa-0 gradient-card">
        <v-card-subtitle class="ma-0 pb-0 mt-0 pt-0">
          <v-layout row justify-space-between>
            <div> {{ product.category }}</div>
            <div>  {{ product.minute }}</div>
          </v-layout>
        </v-card-subtitle>
        <v-card-text class="mb-0 pb-0 mt-0 pt-0">
          <v-layout row justify-space-between>
            <div class="font-weight-black mb-0 pb-2">
              {{ product.name }}
            </div>
          </v-layout>
        </v-card-text>
        <v-card-actions class="mt-0 pt-0 col">
          <div class="font-weight-medium mb-0 pb-0 pl-0">
            {{ product.price }}₺
          </div>
          <v-spacer/>
          <v-btn
              small
              rounded
              color="#de6c02"
              class="white--text"
              @click="sheet = true"
          >
            Detaylar
          </v-btn>
          <v-bottom-sheet v-model="sheet" persistent class="c-rounded elevation-0">
            <v-img src="../assets/bg/bundan-ust.svg" class="wave-img">
              <v-avatar
                  size="28"
                  :color="!threed ? 'grey lighten-5' : 'grey lighten-2'"
                  class="close-icon"
              >
                <v-btn icon @click="sheet = !sheet">
                  <v-icon :color="!threed ? 'grey darken-3' : '#de6c02'">mdi-close</v-icon>
                </v-btn>
              </v-avatar>
            </v-img>
            <v-sheet height="85vh" elevation="0" class="c-rounded">
                <v-img v-if="!threed" :src="product.img" class="product-img c-rounded"> </v-img>
                <div v-if="threed" class="modelvw-div">
                  <model-viewer
                                :src="`${this.model}`"
                                ar
                                ar-modes="webxr scene-viewer quick-look fallback"
                                loading="eager"
                                exposure="0.62"
                                shadow-intensity="0.8"
                                ar-scale="auto"
                                auto-rotate="true"
                                quick-look-browsers="safari chrome"
                                camera-controls="true"
                                ar-status="not-presenting"
                                camera-target="0m 0m 0m"
                                camera-orbit="auto 25deg auto"
                                min-camera-orbit="auto auto 0.75m"
                                max-camera-orbit="auto auto 0.75m"
                  >
                    <v-btn rounded color="#de6c02" slot="ar-button" height="30" width="100" class="custom-ar-button white--text mt-8 caption">
                      Masada Gör
                      <v-icon color="white" class="pl-2" dense> mdi-cube-scan </v-icon>
                    </v-btn>
                  </model-viewer>
                </div>
                <div class="product-div mt-0">
                  <v-btn v-if="!threed && this.model" height="30" width="50" rounded color="#de6c02" class="custom-button white--text" @click="threed = !threed">
                    <v-row>
                      <v-avatar
                          class="v-avatar--left"
                          color="white"
                          size="24"
                      >
                        <span class="black--text caption">2D</span>
                      </v-avatar>
                    </v-row>
                  </v-btn>
                  <v-btn v-if="threed && this.model" height="30" width="50" rounded color="#de6c02" class="custom-button white--text" @click="threed = !threed">
                    <v-row>
                      <v-spacer/>
                      <v-avatar
                          color="white"
                          size="24"
                      >
                        <span class="black--text caption">3D</span>
                      </v-avatar>
                    </v-row>
                  </v-btn>
                 <v-container class="pa-0 mt-5">
                   <v-row justify="space-between">
                     <v-col class="font-weight-medium text--darken-1" style="font-family: 'Red Hat Display', sans-serif !important;">
                       Modeller
                     </v-col>
                     <v-spacer/>
                     <v-col class="font-weight-medium text--darken-1 text-end pr-0" style="font-family: 'Red Hat Display', sans-serif !important;">
                       20 Dakika
                     </v-col>
                   </v-row>
                 </v-container>
                  <div class="mt-2 pt-0 font-weight-bold text-h5" style="font-family: 'Red Hat Display', sans-serif !important;">{{ product.name }}</div>
                  <div class="mt-3 pb-0 body-2" style="font-family: 'Red Hat Display', sans-serif !important;">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <div class=" mt-2 pb-2 caption" style="font-family: 'Red Hat Display', sans-serif !important;">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </div>
                  <v-container class="pa-0">
                    <v-row class="mt-3" justify="space-between">
                      <v-col>
                        <div class="font-weight-medium black--text text-h5" style="font-family: 'Red Hat Display', sans-serif !important;">
                          60.99
                        </div>
                      </v-col>
                      <v-spacer/>
                      <!-- <v-col class="pr-0">
                        <v-btn width="120" height="30" rounded color="#dd6c03" class="white--text pl-6 pr-6 caption" style="font-family: 'Red Hat Display', sans-serif !important;">
                          Sipariş Ver
                        </v-btn>
                      </v-col> -->
                    </v-row>
                  </v-container>
                </div>
              </v-sheet>
          </v-bottom-sheet>
        </v-card-actions>
      </v-card-text>
    </v-img>
  </v-card>
</template>
<script>

import('@google/model-viewer');

export default {
  name: "Product",
  props: {
    product: Object,
    model: String
  },
  data () {
    return {
      sheet: false,
      threed: false,
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

*{
  font-family: 'Red Hat Display', sans-serif !important;
}

model-viewer{
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

model-viewer:host{
  display: block;
  position: relative;
  contain: strict;
}

.modelvw-div{
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  display: block;
}


.product-div{
  width: 100%;
  display: flex;
  position: absolute;
  top: 60%;
  flex: 1 1 0;
  z-index: 0;
  flex-direction: column;
  padding: 0 8vw;
  box-sizing: border-box;
  overflow: visible;
}

.custom-ar-button{
  background-color: #de6c02;
  color: white;
  border-radius: 40px;
  border: none;
  position: absolute;
  bottom: 332.5px;
  left: 16px;
}


.custom-button{
  background-color: #de6c02;
  border-radius: 40px;
  border: none;
  position: absolute;
  top: -22px;
  right: 16px;
}

.product-img{
  width: 100vw;
  height: 40vh;
  position: absolute;
}

.wave-img{
  position: absolute;
  z-index: 3;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
}

.c-rounded{
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  box-shadow: none !important;
}

.close-icon{
  top:10px;
  right: 20px;
  overflow: visible;
  position: absolute;
}


</style>
