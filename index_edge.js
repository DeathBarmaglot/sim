/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'f',
                type: 'image',
                rect: ['-1473px', '-889px','3250px','1958px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 't',
                type: 'image',
                rect: ['-1605px', '-436px','3510px','1140px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t.svg",'0px','0px'],
                transform: [[],[],[],['0.07','0.07']]
            },
            {
                id: 'lo',
                type: 'image',
                rect: ['-625px', '-515px','1550px','1120px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"lo.svg",'0px','0px'],
                transform: [[],[],[],['0.07','0.07']]
            },
            {
                id: 'p',
                type: 'image',
                rect: ['124px', '5px','170px','170px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"p.jpg",'0px','0px']
            },
            {
                id: 'd',
                type: 'image',
                rect: ['124px', '4px','170px','170px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"d.jpg",'0px','0px']
            },
            {
                id: 'a',
                type: 'image',
                rect: ['124px', '5px','170px','170px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a.jpg",'0px','0px']
            },
            {
                id: 'tar',
                type: 'image',
                rect: ['125px', '4px','170px','170px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"tar.jpg",'0px','0px']
            },
            {
                id: 'li',
                type: 'image',
                rect: ['-696px', '-541px','1570px','1500px','auto', 'auto'],
                clip: ['rect(0px 1570px 355.99853515625px 0px)'],
                fill: ["rgba(0,0,0,0)",im+"li.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_tar}": [
                ["style", "top", '4px'],
                ["style", "opacity", '0'],
                ["style", "left", '125px']
            ],
            "${_a}": [
                ["style", "top", '5px'],
                ["style", "opacity", '0'],
                ["style", "left", '124px']
            ],
            "${_lo}": [
                ["style", "top", '-515px'],
                ["transform", "scaleY", '0'],
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["style", "left", '-625px']
            ],
            "${_li}": [
                ["style", "top", '-541px'],
                ["style", "left", '-696px'],
                ["style", "opacity", '1'],
                ["style", "background-position", [0,567.998046875], {valueTemplate:'@@0@@px @@1@@px'} ],
                ["style", "clip", [0,1570,355.99853515625,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_p}": [
                ["style", "top", '5px'],
                ["style", "opacity", '0'],
                ["style", "left", '124px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '300px'],
                ["style", "height", '180px'],
                ["style", "overflow", 'hidden']
            ],
            "${_t}": [
                ["style", "top", '-436px'],
                ["transform", "scaleY", '0.07'],
                ["transform", "scaleX", '0.07'],
                ["style", "opacity", '0'],
                ["style", "left", '-1605px']
            ],
            "${_d}": [
                ["style", "top", '4px'],
                ["style", "opacity", '0'],
                ["style", "left", '124px']
            ],
            "${_f}": [
                ["style", "top", '-889px'],
                ["style", "height", '1958px'],
                ["style", "left", '-1473px'],
                ["style", "width", '3250px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 13000,
            autoPlay: true,
            timeline: [
                { id: "eid14", tween: [ "style", "${_li}", "background-position", [0,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,567.998046875]}], position: 3648, duration: 195 },
                { id: "eid16", tween: [ "style", "${_li}", "background-position", [0,-360], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 6441, duration: 200 },
                { id: "eid20", tween: [ "style", "${_li}", "background-position", [0,-776.0009765625], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-360]}], position: 9512, duration: 226 },
                { id: "eid23", tween: [ "style", "${_li}", "background-position", [0,-1160.0024418438], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,-776.000977]}], position: 11816, duration: 184 },
                { id: "eid21", tween: [ "style", "${_tar}", "opacity", '1', { fromValue: '0'}], position: 11516, duration: 299 },
                { id: "eid2", tween: [ "transform", "${_lo}", "scaleX", '0.07', { fromValue: '0'}], position: 0, duration: 384 },
                { id: "eid4", tween: [ "transform", "${_lo}", "scaleY", '0.07', { fromValue: '0'}], position: 0, duration: 384 },
                { id: "eid27", tween: [ "style", "${_lo}", "opacity", '0', { fromValue: '1'}], position: 3000, duration: 179 },
                { id: "eid29", tween: [ "style", "${_lo}", "opacity", '1', { fromValue: '0'}], position: 3179, duration: 179 },
                { id: "eid32", tween: [ "style", "${_li}", "opacity", '0', { fromValue: '1'}], position: 6360, duration: 179 },
                { id: "eid33", tween: [ "style", "${_li}", "opacity", '1', { fromValue: '0'}], position: 6539, duration: 179 },
                { id: "eid34", tween: [ "style", "${_li}", "opacity", '0', { fromValue: '1'}], position: 9448, duration: 179 },
                { id: "eid35", tween: [ "style", "${_li}", "opacity", '1', { fromValue: '0'}], position: 9627, duration: 179 },
                { id: "eid36", tween: [ "style", "${_li}", "opacity", '0', { fromValue: '1'}], position: 11750, duration: 179 },
                { id: "eid37", tween: [ "style", "${_li}", "opacity", '1', { fromValue: '0'}], position: 11929, duration: 179 },
                { id: "eid15", tween: [ "style", "${_d}", "opacity", '1', { fromValue: '0'}], position: 6142, duration: 299 },
                { id: "eid6", tween: [ "style", "${_t}", "opacity", '1', { fromValue: '0'}], position: 284, duration: 384 },
                { id: "eid8", tween: [ "style", "${_t}", "opacity", '0', { fromValue: '1'}], position: 3071, duration: 384 },
                { id: "eid9", tween: [ "style", "${_lo}", "left", '-715px', { fromValue: '-625px'}], position: 3071, duration: 299 },
                { id: "eid12", tween: [ "style", "${_p}", "opacity", '1', { fromValue: '0'}], position: 3349, duration: 299 },
                { id: "eid11", tween: [ "style", "${_a}", "opacity", '1', { fromValue: '0'}], position: 9213, duration: 299 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-4450888");
