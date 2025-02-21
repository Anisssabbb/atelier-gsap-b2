gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);

//GSAP Animation - Window 2 apparition 

gsap.to("#merecoraline", {
    scrollTrigger: {
        trigger: '#personnages',
        start: 'top 60%',
        end: 'top 20%',
        scrub: 1,
        markers: true,
        id:"window2",
        toggleActions : 'play none reverse reset'
    },
    rotation: 360,
g
})








// gsap Animation -  jsp  ``


gsap.from("#texte1", {
        duration : 5,
        motionPath : {

            path : "M23 1C12 16.3333 -7.2 50.8 4 66C18 85 49 90 60 89C71 88 76 59 60 52C44 45 59 188 53 198C47 208 15 237 15 244C15 251 3 310 36 316C69 322 79 324 113 304C147 284 104 257 91 255C78 253 80 384 86 384"
        },

        onComplete : () => {
            document.getElementById('').style.color="black";
        
        }


});
