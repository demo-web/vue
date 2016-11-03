<template>
  <div id="app1">
   <button class="btn" @click="show = !show">数据传入子组件</button>
   <item v-show="show" v-for="item in lists" :key="item.id" :item="item"></item>
  </div>
  
</template>

<script>
/* eslint-disable */
import Item from './Item.vue'

export default {
  data(){
    return{
      show:true,
      lists:[
    {
        "by": "pepys",
        "descendants": 17,
        "id": 12841981,
        "kids": [
            12850948,
            12850802,
            12852979,
            12853631,
            12853673
        ],
        "score": 46,
        "time": 1477957245,
        "title": "Post-Fire London was a magnificent, beautiful compromise",
        "type": "story",
        "url": "http://www.apollo-magazine.com/post-fire-london-magnificent-beautiful-compromise/",
        "__lastUpdated": 1478160629418
    },
    {
        "by": "cheiVia0",
        "descendants": 43,
        "id": 12843369,
        "kids": [
            12844427,
            12844265,
            12845301,
            12844282
        ],
        "score": 84,
        "time": 1477973466,
        "title": "FreeDOS 1.2 RC1",
        "type": "story",
        "url": "http://opensource-usability.blogspot.com/2016/10/freedos-12-rc1.html",
        "__lastUpdated": 1478160629419
    },
    {
        "by": "chunkyslink",
        "descendants": 0,
        "id": 12858957,
        "score": 6,
        "time": 1478118702,
        "title": "Wait until insurers can see the contents of your fridge",
        "type": "story",
        "url": "https://www.theguardian.com/technology/2016/nov/02/admiral-facebook-data-insurers-internet-of-things",
        "__lastUpdated": 1478160629420
    },
    {
        "by": "samclemens",
        "descendants": 29,
        "id": 12826095,
        "kids": [
            12851247,
            12850556,
            12850731,
            12850403
        ],
        "score": 47,
        "time": 1477772001,
        "title": "Philosophy Beyond the Academy",
        "type": "story",
        "url": "http://www.chronicle.com/article/Philosophy-Beyond-the-Academy/238052",
        "__lastUpdated": 1478160629420
    },
    {
        "by": "bsg75",
        "descendants": 58,
        "id": 12847172,
        "kids": [
            12848621,
            12847819,
            12847569,
            12849926,
            12848841,
            12848049,
            12848198
        ],
        "score": 197,
        "time": 1478016782,
        "title": "Announcing RStudio v1.0",
        "type": "story",
        "url": "https://blog.rstudio.org/2016/11/01/announcing-rstudio-v1-0/",
        "__lastUpdated": 1478160629421
    },
    {
        "by": "joohwan",
        "descendants": 29,
        "id": 12842797,
        "kids": [
            12843066,
            12843319,
            12842986,
            12843383,
            12843883,
            12843665,
            12846620,
            12843364,
            12845248,
            12842898
        ],
        "score": 112,
        "time": 1477965527,
        "title": "Show HN: KQ – Simple Job Queue for Python Using Kafka",
        "type": "story",
        "url": "https://github.com/joowani/kq",
        "__lastUpdated": 1478160629644
    },
    {
        "by": "prawn",
        "descendants": 107,
        "id": 12827691,
        "kids": [
            12828250,
            12829375,
            12828441,
            12828335,
            12828271,
            12827850,
            12827936,
            12828094,
            12833965,
            12827843,
            12828244,
            12828590,
            12828473,
            12829984,
            12828616,
            12830159,
            12829633,
            12838051,
            12828759,
            12829488,
            12829490,
            12828678,
            12828076,
            12828103,
            12828085,
            12829048,
            12829754,
            12828178,
            12828191,
            12828933,
            12828026,
            12827859,
            12827932,
            12828498,
            12828852,
            12830076,
            12828578,
            12829671,
            12829806
        ],
        "score": 442,
        "time": 1477792863,
        "title": "Museu de la Tècnica",
        "type": "story",
        "url": "https://twitter.com/i/moments/791746773643464704",
        "__lastUpdated": 1478160629645
    },
    {
        "by": "tintinnabula",
        "descendants": 106,
        "id": 12842015,
        "kids": [
            12842553,
            12842413,
            12842544,
            12842289,
            12843250,
            12842369,
            12842729,
            12846111,
            12842478,
            12843382,
            12843070,
            12842288,
            12845865,
            12845764,
            12842615
        ],
        "score": 77,
        "time": 1477957593,
        "title": "How a Fake British Accent Took Old Hollywood by Storm",
        "type": "story",
        "url": "http://www.atlasobscura.com/articles/how-a-fake-british-accent-took-old-hollywood-by-storm",
        "__lastUpdated": 1478160629646
    },
    {
        "by": "Lind5",
        "descendants": 50,
        "id": 12841278,
        "kids": [
            12844137,
            12842455,
            12842116,
            12841908,
            12841680,
            12845555,
            12843150
        ],
        "score": 96,
        "time": 1477950713,
        "title": "Intel, TSMC and other chipmakers weigh extreme ultraviolet lithography",
        "type": "story",
        "url": "http://spectrum.ieee.org/semiconductors/devices/leading-chipmakers-eye-euv-lithography-to-save-moores-law",
        "__lastUpdated": 1478160629647
    },
    {
        "by": "cdvonstinkpot",
        "descendants": 2,
        "id": 12860427,
        "kids": [
            12860434
        ],
        "score": 4,
        "time": 1478130535,
        "title": "Car insurance rates to be determined by Facebook posts",
        "type": "story",
        "url": "https://thestack.com/world/2016/11/02/admiral-facebook-car-insurance/",
        "__lastUpdated": 1478160629647
    },
    {
        "by": "logane",
        "descendants": 20,
        "id": 12838152,
        "kids": [
            12838644,
            12838683,
            12839528,
            12843837,
            12839964,
            12841634,
            12840390,
            12839702,
            12839624,
            12840969
        ],
        "score": 181,
        "time": 1477930309,
        "title": "Show HN: Fast Style Transfer in TensorFlow",
        "type": "story",
        "url": "https://github.com/lengstrom/fast-style-transfer/",
        "__lastUpdated": 1478160629648
    },
    {
        "by": "lochieferrier",
        "descendants": 27,
        "id": 12843221,
        "kids": [
            12845761,
            12843832,
            12845755,
            12843814,
            12844230,
            12843567,
            12844423,
            12843675
        ],
        "score": 102,
        "time": 1477971950,
        "title": "Show HN: Physics-based CAD",
        "type": "story",
        "url": "http://www.prandtl.design/",
        "__lastUpdated": 1478160629648
    },
    {
        "by": "acjohnson55",
        "descendants": 269,
        "id": 12840555,
        "kids": [
            12841006,
            12841098,
            12841038,
            12840895,
            12840883,
            12840824,
            12842010,
            12841005,
            12841166,
            12859671,
            12841491,
            12840899,
            12842827,
            12841276,
            12840985,
            12843871,
            12842047,
            12844687,
            12843063,
            12844650,
            12841582,
            12842323,
            12842670,
            12841127,
            12842093,
            12843334,
            12841029,
            12842400,
            12840885,
            12841815,
            12841543,
            12841045,
            12842720,
            12842066,
            12841311,
            12841498,
            12841044,
            12841301
        ],
        "score": 459,
        "time": 1477945088,
        "title": "No One Saw Tesla’s Solar Roof Coming",
        "type": "story",
        "url": "https://www.bloomberg.com/news/articles/2016-10-31/no-one-saw-tesla-s-solar-roof-coming",
        "__lastUpdated": 1478160629648
    },
    {
        "by": "ashitlerferad",
        "descendants": 1,
        "id": 12860413,
        "kids": [
            12860521
        ],
        "score": 6,
        "time": 1478130349,
        "title": "Getting what you paid for? Benchmark your VPS in 5 mins",
        "type": "story",
        "url": "https://haydenjames.io/web-host-doesnt-want-read-benchmark-vps/",
        "__lastUpdated": 1478160629649
    },
    {
        "by": "ingve",
        "descendants": 205,
        "id": 12829759,
        "kids": [
            12830249,
            12831380,
            12831989,
            12830141,
            12830366,
            12830684,
            12830788,
            12830191,
            12832247,
            12830945,
            12830422,
            12831128,
            12832578,
            12832570,
            12830207,
            12831697,
            12833916,
            12830586,
            12830314,
            12830588,
            12830369,
            12833123,
            12830821,
            12831811,
            12830595,
            12831465,
            12834843,
            12833181,
            12831864,
            12840259,
            12838204,
            12832428,
            12830232,
            12830798,
            12831694,
            12831693,
            12830290
        ],
        "score": 371,
        "time": 1477835192,
        "title": "I don't understand Python's Asyncio",
        "type": "story",
        "url": "http://lucumr.pocoo.org/2016/10/30/i-dont-understand-asyncio/",
        "__lastUpdated": 1478160629650
    },
    {
        "by": "ssuda",
        "descendants": 2,
        "id": 12860368,
        "kids": [
            12860387,
            12860428
        ],
        "score": 5,
        "time": 1478129710,
        "title": "Germany unveils zero-emissions train that only emits steam",
        "type": "story",
        "url": "http://www.independent.co.uk/news/world/europe/germany-unveils-zero-emissions-train-only-emits-steam-lower-saxony-hydrogen-powered-a7391581.html",
        "__lastUpdated": 1478160629650
    },
    {
        "by": "ms123",
        "descendants": 29,
        "id": 12844267,
        "kids": [
            12845955,
            12849790,
            12845112,
            12845521,
            12846347,
            12845708,
            12845619,
            12844887,
            12844894
        ],
        "score": 87,
        "time": 1477991174,
        "title": "Show HN: IMAP-based message broker client written in Go",
        "type": "story",
        "url": "https://github.com/mikaa123/imapmq",
        "__lastUpdated": 1478160629651
    },
    {
        "by": "dconrad",
        "descendants": 6,
        "id": 12859436,
        "kids": [
            12862075,
            12861001,
            12860450
        ],
        "score": 7,
        "time": 1478121907,
        "title": "Nest's economics don't work. Why IoT devices should be sold as services",
        "type": "story",
        "url": "https://medium.com/@dconrad/why-iot-devices-should-be-sold-as-services-f73951871006",
        "__lastUpdated": 1478160629651
    },
    {
        "by": "jetsnoc",
        "descendants": 39,
        "id": 12833481,
        "kids": [
            12833844,
            12835985,
            12833667,
            12835435,
            12834986,
            12833792,
            12834225,
            12835753,
            12834735,
            12833729,
            12852776,
            12835101,
            12834813,
            12834771,
            12833811,
            12833836
        ],
        "score": 248,
        "time": 1477874298,
        "title": "CTO Mentor Network – A virtual peer-to-peer network of CTOs",
        "type": "story",
        "url": "https://ctomentor.network/",
        "__lastUpdated": 1478160629652
    },
    {
        "by": "samps",
        "descendants": 80,
        "id": 12837669,
        "kids": [
            12839055,
            12838732,
            12839546,
            12839087,
            12839849,
            12842081,
            12839423,
            12840861,
            12840819,
            12841820,
            12839272,
            12839444,
            12840830,
            12840066,
            12839401
        ],
        "score": 185,
        "time": 1477927899,
        "title": "Portier – An email-based, passwordless authentication service",
        "type": "story",
        "url": "https://portier.github.io/",
        "__lastUpdated": 1478160629652
    }
]
    }
  },
  components: {
    Item
  }
}
</script>
