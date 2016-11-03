<template>
  <div class="itemlist">
   <item v-for="item in lists" :key="item.id" :item="item"></item>
   </div> 
</template>

<script>
/* eslint-disable */
import Item from './Item.vue'

export default {
  data(){
    return{
lists:[
    {
        "by": "pepys",
        "descendants": 17,
        "id": 12841981,
        "kids": [
            12850948,
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
            12839055
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
<style>
    .itemlist{
        border: 1px solid #eaeaea;
    }
</style>