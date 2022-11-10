import Builder from "./example/builder"
import Mouse from "./example/Mouse"
import "../scss/style.scss"
document.addEventListener('DOMContentLoaded', ()=>{

    let b = new Builder(document.querySelectorAll('.examples > img')[0])
    Mouse.bind()
    b.importFromHTML(
        `
<svg>
    <defs>
    <filter id="filter">
    <!-- COLOR -->
    <feFlood flood-color="#73DCFF" flood-opacity="0.75" result="COLOR-blu"></feFlood>
    <feFlood flood-color="#9673FF" flood-opacity="0.4" result="COLOR-red"></feFlood>
    <!-- COLOR END -->

    <!-- Texture -->
    <feTurbulence baseFrequency=".05" type="fractalNoise" numOctaves="3" seed="0" result="Texture_10"></feTurbulence>
    <feColorMatrix type="matrix" values="0 0 0 0 0,
    0 0 0 0 0,
    0 0 0 0 0,
    0 0 0 -2.1 1.1" in="Texture_10" result="Texture_20"></feColorMatrix>

    <feColorMatrix result="Texture_30" type="matrix" values="0 0 0 0 0,
    0 0 0 0 0,
    0 0 0 0 0,
    0 0 0 -1.7 1.8" in="Texture_10"></feColorMatrix>
    <!-- Texture -->

    <!-- FILL -->
    <feOffset dx="-3" dy="4" in="SourceAlpha" result="FILL_10"></feOffset>
    <feDisplacementMap scale="17" in="FILL_10" in2="Texture_10" result="FILL_20"></feDisplacementMap>
    <feComposite operator="in" in="Texture_30" in2="FILL_20" result="FILL_40"></feComposite>
    <feComposite operator="in" in="COLOR-blu" in2="FILL_40" result="FILL_50"></feComposite>
    <!-- FILL END-->

    <!-- OUTLINE -->
    <feMorphology operator="dilate" radius="3" in="SourceAlpha" result="OUTLINE_10"></feMorphology>
    <feComposite operator="out" in="OUTLINE_10" in2="SourceAlpha" result="OUTLINE_20"></feComposite>
    <feDisplacementMap scale="7" in="OUTLINE_20" in2="Texture_10" result="OUTLINE_30"></feDisplacementMap>
    <feComposite operator="arithmetic" k2="-1" k3="1" in="Texture_20" in2="OUTLINE_30" result="OUTLINE_40"></feComposite>
    <!-- OUTLINE END-->

    <!-- BEVEL OUTLINE -->
    <feConvolveMatrix order="8,8" divisor="1" kernelMatrix="1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 0 0 0 0 0 0 0 0 1 " in="SourceAlpha" result="BEVEL_10"></feConvolveMatrix>
    <feMorphology operator="dilate" radius="2" in="BEVEL_10" result="BEVEL_20"></feMorphology>
    <feComposite operator="out" in="BEVEL_20" in2="BEVEL_10" result="BEVEL_30"></feComposite>
    <feDisplacementMap scale="7" in="BEVEL_30" in2="Texture_10" result="BEVEL_40"></feDisplacementMap>
    <feComposite operator="arithmetic" k2="-1" k3="1" in="Texture_20" in2="BEVEL_40" result="BEVEL_50"></feComposite>
    <feOffset dx="-7" dy="-7" in="BEVEL_50" result="BEVEL_60"></feOffset>
    <feComposite operator="out" in="BEVEL_60" in2="OUTLINE_10" result="BEVEL_70"></feComposite>
    <!-- BEVEL OUTLINE END -->

    <!-- BEVEL FILL -->
    <feOffset dx="-9" dy="-9" in="BEVEL_10" result="BEVEL-FILL_10"></feOffset>
    <feComposite operator="out" in="BEVEL-FILL_10" in2="OUTLINE_10" result="BEVEL-FILL_20"></feComposite>
    <feDisplacementMap scale="17" in="BEVEL-FILL_20" in2="Texture_10" result="BEVEL-FILL_30"></feDisplacementMap>
    <feComposite operator="in" in="COLOR-red" in2="BEVEL-FILL_30" result="BEVEL-FILL_50"></feComposite> <!-- -->
    <!-- BEVEL FILL END-->

    <feMerge result="merge2">
     <feMergeNode in="BEVEL-FILL_50"></feMergeNode>
     <feMergeNode in="BEVEL_70"></feMergeNode>
     <feMergeNode in="FILL_50"></feMergeNode>
      <feMergeNode in="OUTLINE_40"></feMergeNode>
    </feMerge>
  </filter>
    </defs>
</svg>
        `
    )
})

export default class Blob {
    constructor(container) {
        this.container = container
        this.build()

        this.draw()
    }

    build(){
        this.c = document.createElement('canvas')
        this.container.appendChild(this.c)
        const rect = this.c.getBoundingClientRect()
        this.c.width = rect.width
        this.c.height = rect.height
        this.ctx = this.c.getContext('2d')

        this.hiddenCanvas = document.createElement('canvas')
        this.hiddenCtx = this.hiddenCanvas.getContext('2d')
        this.hiddenCanvas.width = this.c.width
        this.hiddenCanvas.height = this.c.height

        let size = 0.5
        this.circles = Array(20).fill({}).map(c => ({
            x: Math.random() * this.c.width,
            y: Math.random() * this.c.height,
            speedX: (Math.random() * 2 - 1) * 0.2,
            speedY: (Math.random() * 2 - 1) * 0.2,
            size: (this.c.width / 5 * Math.random() + this.c.width / 10) * size,
            color: `hsl(${Math.random()*100+120}deg, 70%, 70%)`
        }))
        this.ctx.fillStyle = "red"
        this.loop()
    }

    clear(){
        this.hiddenCtx.clearRect(0, 0, this.c.width, this.c.height)
        this.ctx.clearRect(0, 0, this.c.width, this.c.height)
    }

    draw(){
        this.clear()

        this.circles.map(c => {
            if(c.x < 0 || c.x > this.c.width) c.speedX = -c.speedX
            if(c.y < 0 || c.y > this.c.height) c.speedY = -c.speedY

            c.x += c.speedX
            c.y += c.speedY
            this.drawCircle(c.x,c.y, c.size, c.color)
        })

        this.ctx.drawImage(this.hiddenCanvas, 0, 0, this.c.width, this.c.height)
    }

    loop(){
        this.draw()
        requestAnimationFrame(this.loop.bind(this))
    }

    drawCircle(x, y, radius=50, color="red"){
        this.hiddenCtx.fillStyle = color
        this.hiddenCtx.beginPath()
        this.hiddenCtx.arc(x, y, radius, 0, 2*Math.PI)
        this.hiddenCtx.fill()
    }
}