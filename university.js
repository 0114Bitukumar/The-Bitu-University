var tl = gsap.timeline()

tl.from("#main h1",{
    y: -50,
    opacity:0,
    // duration:1,
    delay:0.5
})
.from("#nav h2",{
    y: -50,
    opacity:0,
    stagger : 0.25,
})
.from("#pf1",{
    x: -200,
    opacity:0,
    duration:0.5
})
.from("#pf2",{
    x: -200,
    opacity:0,
    duration:0.5
})
.from("#pf3",{
    x: -200,
    opacity:0,
    duration:0.5
})
.from("#pf4",{
    x: -200,
    opacity:0,
    duration:0.5
})
.from("#main p",{
    x: -200,
    opacity:0,
    duration:0.5,
    delay:-0.2
})
.from("#main button",{
    scale:0.3,
    opacity:0,
    duration:0.5,
    delay:-0.2
})
.from("#main img",{
    x:100,
    scale:0.2,
    opacity:0,
},"-=1")