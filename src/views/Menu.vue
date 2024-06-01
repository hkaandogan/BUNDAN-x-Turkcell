<template>
  <div id="app" class="bckgrnd">
    <v-app id="inspire">
      <v-app-bar
          app
          absolute
          hide-on-scroll
          color="transparent"
          elevation="0"
          src="../assets/bg/ust-dalga-turkcell.svg"
          :height="$vuetify.breakpoint.mobile? '60' :  '120'">
        <template v-slot:img="{props}">
          <v-img
              v-bind="props"
              position="left center"
              :height="$vuetify.breakpoint.mobile? '60' :  '100'">
          </v-img>
        </template>
        <v-spacer/>
        <v-card
            elevation="0"
            class="rounded-circle mt-12 logo-card">
          <v-img
              src="../assets/turkcell-logo.svg"
              :max-height="$vuetify.breakpoint.mobile? '85' :  '120'"
              :max-width="$vuetify.breakpoint.mobile? '85' :  '120'"
              v-bind:style="$vuetify.breakpoint.mobile? 'border-width: 6px;' :'border-width: 9px;'"
              class="logo"
          />
        </v-card>
        <v-spacer/>
      </v-app-bar>
      <v-main>
        <v-container fluid>
          <v-slide-group mandatory>
            <v-container  class="mt-10">
              <v-row>
                <v-col v-for="category in categories" :key="category.name">
                    <category
                        :icon="category.icon"
                        :whicon="category.whicon"
                        :cname="category.name"
                        :getproducts="getproducts"
                        :isfirst = "category.name==='Telefonlar'"
                    />
                </v-col>
              </v-row>
            </v-container>
          </v-slide-group>
        </v-container>
        <v-container grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex v-for="product in products.filter(p=>p.category===this.selectedCategory)" :key="product.id" xl2 lg3 md4 sm6 xs6>
               <product
                   :product="product"
                   :model="product.model"
               />
            </v-flex>
          </v-layout>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Category from "@/components/Category";
import Product from "@/components/Product"

import Telefonlar from "@/assets/icons/cep-telefonu-mavi.png";
import EvAletleri from  "@/assets/icons/ev-aletleri-mavi.png";
import Tablet from  "@/assets/icons/tablet-mavi.png";
import BeyazEsya from "@/assets/icons/beyaz-esya-mavi.png";

import TelefonlarS from "@/assets/icons/cep-telefonu-sari.png";
import EvAletleriS from  "@/assets/icons/ev-aletleri-sari.png";
import TabletS from  "@/assets/icons/tablet-sari.png";
import BeyazEsyaS from "@/assets/icons/beyaz-esya-sari.png";

import TatlilarS from "@/assets/icons/tatlilar-icon-s.svg";
import TostlarP from "@/assets/icons/tostlar-icon.svg";
import TostlarS from "@/assets/icons/tostlar-icon-s.svg";
import EkstralarP from "@/assets/icons/ekstralar-icon.svg";
import EkstralarS from "@/assets/icons/ekstralar-icon-s.svg";
import KahvelerP from "@/assets/icons/kahveler-icon.svg";
import KahvelerS from "@/assets/icons/kahveler-icon-s.svg";
import BitkiCaylariP from "@/assets/icons/bitki-caylari-icon.svg";
import BitkiCaylariS from "@/assets/icons/bitki-caylari-icon-s.svg";
import SogukIceceklerP from "@/assets/icons/soguk-icecek-icon.svg"
import SogukIceceklerS from "@/assets/icons/soguk-icecek-icon-s.svg"

import BitkiCaylari from "@/assets/icons/bitki-caylari-icon.svg";
import Burger from  "@/assets/icons/burger-icon.svg";
import DemlemeKahveler from "@/assets/icons/demleme-kahveler-icon.svg";
import Ekstralar from "@/assets/icons/ekstralar-icon.svg";
import Favoriler from "@/assets/icons/favoriler-icon.svg";
import Kahveler from "@/assets/icons/kahveler-icon.svg";
import Kampanyalar from "@/assets/icons/kampanyalar-icon.svg";
import SicakIcecekler from "@/assets/icons/sicak-icecek-icon.svg";
import SogukIcecekler from "@/assets/icons/soguk-icecek-icon.svg"
import Tatlilar from "@/assets/icons/tatlilar-icon.svg";
import Tostlar from "@/assets/icons/tostlar-icon.svg";

import BitkiCaylariWh from "@/assets/icons/bitki-caylari-icon-wh.svg";
import BurgerWh from  "@/assets/icons/burger-icon-wh.svg";
import DemlemeKahvelerWh from "@/assets/icons/demleme-kahveler-icon-wh.svg";
import EkstralarWh from "@/assets/icons/ekstralar-icon-wh.svg";
import FavorilerWh from "@/assets/icons/favoriler-icon-wh.svg";
import KahvelerWh from "@/assets/icons/kahveler-icon-wh.svg";
import KampanyalarWh from "@/assets/icons/kampanyalar-icon-wh.svg";
import SicakIceceklerWh from "@/assets/icons/sicak-icecek-icon-wh.svg";
import SogukIceceklerWh from "@/assets/icons/soguk-icecek-icon-wh.svg"
import TatlilarWh from "@/assets/icons/tatlilar-icon-wh.svg";
import TostlarWh from "@/assets/icons/tostlar-icon-wh.svg";

import samsung from "@/assets/cihazlar/samsung.jpg";
import iphone from "@/assets/cihazlar/iphone-13.jpg";
import monitor from "@/assets/cihazlar/monitor.jpg";
import laptop from "@/assets/cihazlar/laptop.jpg";
import kahve from "@/assets/cihazlar/kahve-makinesi.jpg";
import supurge from "@/assets/cihazlar/supurge.jpg";
import buzdolabi from "@/assets/cihazlar/buzdolabi.jpg";
import camasir from "@/assets/cihazlar/camasir-makinesi.jpg";
import watch from "@/assets/cihazlar/watch.jpg";
import Mushroom from "@/assets/burgerler/mushroom.jpg";
import Special from "@/assets/burgerler/special_punica.jpg";

import lamba from "@/assets/cihazlar/lamba.jpg";

import Elma from "@/assets/bitkicaylari/elma.jpg";
import Ihlamur from "@/assets/bitkicaylari/ihlamur.jpg";
import Kusburnu from "@/assets/bitkicaylari/kusburnu.jpg";
import Papatya from "@/assets/bitkicaylari/papatya.jpg";

import Brasil from "@/assets/demlemekahveler/brasil.jpg";
import Burundi from "@/assets/demlemekahveler/burundi.jpg";
import Colom from "@/assets/demlemekahveler/colom.jpg";

import Ekstra1 from "@/assets/ekstralar/ekstra1.jpg";
import Ekstra2 from "@/assets/ekstralar/ekstra2.jpeg";
import Ekstra3 from "@/assets/ekstralar/ekstra3.jpg";
import Ekstra4 from "@/assets/ekstralar/ekstra4.jpg";

import Arabiata from "@/assets/favoriler/arabiata.jpg";
import KarisikPizza from "@/assets/favoriler/karisik_pizza.jpg";
import Limonlu from "@/assets/favoriler/limonlu.jpg";
import Ppizza from "@/assets/favoriler/ppizza.jpg";
import Salata from  "@/assets/favoriler/salata.jpg";
import Spburger from "@/assets/favoriler/spburger.jpg";

import America from "@/assets/kahveler/america.jpg";
import Cappuchine from "@/assets/kahveler/cappuchino.jpg";
import Caramel from "@/assets/kahveler/caramel.jpg";
import DamlaSakizli from "@/assets/kahveler/damlasakizli.jpg";
import Mocha from "@/assets/kahveler/mocha.jpg";

import Indirim10 from "@/assets/kampanyalar/indirim10.jpg";
import Indirim25 from "@/assets/kampanyalar/indirim25.jpg";

import Sicak1 from "@/assets/sicakicecekler/sicaki1.jpg";
import Sicak2 from "@/assets/sicakicecekler/sicaki2.jpg";
import Sicak3 from "@/assets/sicakicecekler/sicaki3.jpg";
import Sicak4 from "@/assets/sicakicecekler/sicaki4.jpeg";
import Sicak5 from "@/assets/sicakicecekler/sicaki5.jpg";

import Soguk1 from "@/assets/sogukicecekler/soguk1.png";
import Soguk2 from "@/assets/sogukicecekler/soguk2.jpg";
import Soguk3 from "@/assets/sogukicecekler/soguk3.jpeg";
import Soguk4 from "@/assets/sogukicecekler/soguk4.jpg";
import Soguk5 from "@/assets/sogukicecekler/soguk5.jpg";
import Soguk6 from "@/assets/sogukicecekler/soguk6.jpg";

import Tatli1 from "@/assets/tatlilar/tatli1.jpg";
import Tatli2 from "@/assets/tatlilar/tatli2.jpg";
import Tatli3 from "@/assets/tatlilar/tatli3.jpg";
import Tatli4 from "@/assets/tatlilar/tatli4.jpg";
import Tatli5 from "@/assets/tatlilar/tatli5.jpg";

import Tost1 from "@/assets/tostlar/tost1.jpg";
import Tost2 from "@/assets/tostlar/tost2.jpg";
import Tost3 from "@/assets/tostlar/tost3.jpg";
import Tost4 from "@/assets/tostlar/tost4.jpg";

export default {
  name: "Menu",
  components: {Category,Product},
  comments:{
    'category':Category,
    'product':Product
  },
  methods:{
    getproducts(cname){
      this.selectedCategory = cname;
    }
  },
  data() {
    return {
      selectedCategory : '',
      categories: [
          {name: "Telefonlar", icon: TelefonlarS, whicon: Telefonlar},
          {name: "Ev Aletleri", icon: EvAletleriS, whicon: EvAletleri},
          {name: "Tablet/Bilgisayar", icon: TabletS, whicon: Tablet},
          {name: "Beyaz Eşya", icon: BeyazEsyaS, whicon: BeyazEsya},
          //{name: "Kahveler", icon: KahvelerP, whicon: KahvelerS},
          // {name: "Çaylar", icon: BitkiCaylariP, whicon: BitkiCaylariS},
          // {name: "Soğuk İçecekler", icon: SogukIceceklerP, whicon:SogukIceceklerS},

          //{name: "Burgerler", icon: Burger,whicon: BurgerWh},
          //{name: "Tostlar", icon: Tostlar,whicon: TostlarWh},
          //{name: "Bitkicaylari", icon: BitkiCaylari,whicon: BitkiCaylariWh},
          //{name: "Demlemekahveler", icon: DemlemeKahveler,whicon: DemlemeKahvelerWh},
          //{name: "Ekstralar", icon: Ekstralar,whicon: EkstralarWh},
          //{name: "Favoriler", icon: Favoriler,whicon: FavorilerWh},
          //{name: "Kahveler", icon: Kahveler,whicon: KahvelerWh},
          //{name: "Kampanyalar", icon: Kampanyalar,whicon: KampanyalarWh},
          //{name: "Sicakicecekler", icon: SicakIcecekler,whicon: SicakIceceklerWh},
          //{name: "Sogukicecekler", icon:SogukIcecekler,whicon:SogukIceceklerWh},
          //{name: "Tatlılar", icon: Tatlilar,whicon: TatlilarWh},
      ],
      products:[
          //{name: "Baltazar Burger",category:"Burgerler",price:"20",minute:"20 Dk",img:Baltazar,id:"3",model:"/models/Baltazar1-70.glb"},
          //{name: "Baltazar Texas Burger",category:"Burgerler",price:"20",minute:"20 Dk",img:BaltazarTexas,id:"3",model:"/models/Baltazar2-70.glb"},

          {name: "Turkcell Buzdolabı",category:"Telefonlar",price:"",minute:"",img:lamba,id:"7",model:"/models/buzdolabi.glb"},
          {name: "LG Çamaşır Makinesi",category:"Telefonlar",price:"",minute:"",img:camasir,id:"8",model:"/models/camasir-makinesi.glb"},
          {name: "Apple MacBook Pro",category:"Telefonlar",price:"",minute:"",img:laptop,id:"9",model:"/models/macbook.glb"},
          {name: "Apple Watch",category:"Telefonlar",price:"",minute:"",img:watch,id:"10",model:"/models/watch.glb"},




          {name: "Asus TUF VG27AQ",category:"Tablet/Bilgisayar",price:"",minute:"",img:monitor,id:"5",model:"/models/samsung-s20.glb"},
          {name: "Apple MacBook Pro",category:"Tablet/Bilgisayar",price:"",minute:"",img:laptop,id:"1",model:"/models/samsung-s20.glb"},
          
          {name: "Fakir Kaave Makinesi",category:"Ev Aletleri",price:"",minute:"",img:kahve,id:"2",model:"/models/samsung-s20.glb"},
          {name: "Dyson V12",category:"Ev Aletleri",price:"",minute:"",img:supurge,id:"6",model:"/models/samsung-s20.glb"},
          
          {name: "Turkcell Buzdolabı",category:"Beyaz Eşya",price:"",minute:"",img:buzdolabi,id:"7",model:"/models/buzdolabi.glb"},
          {name: "LG Çamaşır Makinesi",category:"Beyaz Eşya",price:"",minute:"",img:camasir,id:"8",model:"/models/camasir-makinesi.glb"},
          // {name: "Papatya",category:"Çaylar",price:"20",minute:"",img:Papatya,id:"9",model:""},
          //{name: "Brasil",category:"Demlemekahveler",price:"20",minute:"20 Dk",img:Brasil,id:"10",model:""},
          //{name: "Burundi",category:"Demlemekahveler",price:"20",minute:"20 Dk",img:Burundi,id:"11",model:""},
          //{name: "Colom",category:"Demlemekahveler",price:"20",minute:"20 Dk",img:Colom,id:"12",model:""},
          // {name: "Soğan Halkası",category: "Yan Ürünler",price: "20",minute: "",img: Ekstra1,id:"13",model:""},
          // {name: "Patates Dilimi",category: "Yan Ürünler",price: "20",minute: "",img: Ekstra2,id:"14",model:""},
          //{name: "Yan Ürün",category: "Yan Ürünler",price: "20",minute: "20 Dk",img: Ekstra3,id:"15",model:""},
          //{name: "Ekstra4",category: "Ekstralar",price: "20",minute: "20 Dk",img: Ekstra4,id:"16",model:""},
          //{name: "Arabiata",category:"Favoriler",price:"20",minute:"20 Dk",img:Arabiata,id:"17",model:""},
          //{name: "KarisikPizza",category:"Favoriler",price:"20",minute:"20 Dk",img:KarisikPizza,id:"18",model:""},
          //{name: "Limonlu",category: "Favoriler",price: "20",minute: "20 Dk",img: Limonlu,id:"19",model:""},
          //{name: "Ppizza",category: "Favoriler",price: "20",minute: "20 Dk",img: Ppizza,id:"20",model:""},
          //{name: "Salata",category: "Favoriler",price: "20",minute: "20 Dk",img: Salata,id:"21",model:""},
          //{name: "Spburger",category: "Favoriler",price: "20",minute: "20 Dk",img: Spburger,id:"22",model:""},
          // {name: "Americano",category:"Kahveler",price:"20",minute:"",img:America,id:"23",model:""},
          // {name: "Cappuccino",category: "Kahveler",price: "20",minute: "",img: Cappuchine,id:"24",model:""},
          // {name: "Caramel Macchiato",category: "Kahveler",price: "20",minute: "",img: Caramel,id:"25",model:""},
          //{name: "DamlaSakizli",category: "Kahveler",price: "20",minute: "20 Dk",img: DamlaSakizli,id:"26",model:""},
          //{name: "Mocha",category: "Kahveler",price: "20",minute: "20 Dk",img: Mocha,id:"27",model:""},
          //{name: "Indirim10",category: "Kampanyalar",price: "20",minute: "20 Dk",img: Indirim10,id:"28",model:""},
          //{name: "Indirim25",category: "Kampanyalar",price: "20",minute: "20 Dk",img: Indirim25,id:"29",model:""},
          //{name: "Sicak1",category: "Sicakicecekler",price: "20",minute: "20 Dk",img: Sicak1,id:"30",model:""},
          //{name: "Sicak2",category: "Sicakicecekler",price: "20",minute: "20 Dk",img: Sicak2,id:"31",model:""},
          //{name: "Sicak3",category: "Sicakicecekler",price: "20",minute: "20 Dk",img: Sicak3,id:"32",model:""},
          //{name: "Sicak4",category: "Sicakicecekler",price: "20",minute: "20 Dk",img: Sicak4,id:"33",model:""},
          //{name: "Sicak5",category: "Sicakicecekler",price: "20",minute: "20 Dk",img: Sicak5,id:"34",model:""},
          // {name: "Ayran",category: "Soğuk İçecekler",price: "20",minute: "",img: Soguk1,id:"35",model:""},
          // {name: "Uludağ Gazozu",category: "Soğuk İçecekler",price: "20",minute: "",img: Soguk2,id:"36",model:""},
          // {name: "Fanta",category: "Soğuk İçecekler",price: "20",minute: "",img: Soguk3,id:"37",model:""},
          // {name: "Limonata",category: "Sogukicecekler",price: "20",minute: "",img: Soguk4,id:"38",model:""},
          //{name: "Soguk5",category: "Sogukicecekler",price: "20",minute: "20 Dk",img: Soguk5,id:"39",model:""},
          //{name: "Soguk6",category: "Sogukicecekler",price: "20",minute: "20 Dk",img: Soguk6,id:"40",model:""},
          // {name: "Magnolia",category: "Tatlılar",price: "20",minute: "20 Dk",img: Tatli1,id:"41",model:""},
          // {name: "Cheesecake",category: "Tatlılar",price: "20",minute: "20 Dk",img: Tatli2,id:"42",model:""},
          // {name: "Çikolatalı Pasta",category: "Tatlılar",price: "20",minute: "20 Dk",img: Tatli3,id:"43",model:""},
          //{name: "Tatli4",category: "Tatlilar",price: "20",minute: "20 Dk",img: Tatli4,id:"44",model:""},
          //{name: "Tatli5",category: "Tatlilar",price: "20",minute: "20 Dk",img: Tatli5,id:"45",model:""},
          // {name: "Tost",category: "Tostlar",price: "20",minute: "20 Dk",img: Tost1,id:"46",model:""},
          // {name: "Tost",category: "Tostlar",price: "20",minute: "20 Dk",img: Tost2,id:"47",model:""},
          // {name: "Tost",category: "Tostlar",price: "20",minute: "20 Dk",img: Tost3,id:"48",model:""},
          // {name: "Tost",category: "Tostlar",price: "20",minute: "20 Dk",img: Tost4,id:"49",model:""},
      ],
    }
  },

};
</script>

<style scoped>
.logo{
  border-style: solid;
  border-color: #164094;
}
.logo-card{
  border-style: solid;
  border-color: white;
  border-width: 3px;
}
.bckgrndex {
  background-image: url('../assets/bg/bg-pattern.svg');
  background-repeat: repeat;
  background-size: auto;
}
.bckgrnd{
  color: #f9f9f9;
}
#inspire {
  background: none;
}

</style>